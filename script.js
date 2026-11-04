(() => {
  'use strict';

  const STORAGE_KEY = 'minha-plataforma-estudos:v1';
  const THEME_KEY = 'camystudy-theme';
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];
  const app = document.getElementById('app');
  const bank = Array.isArray(QUESTION_BANK?.lessons) ? QUESTION_BANK.lessons : [];
  let screen = 'dashboard';
  let activeLessonId = null;
  let resultContext = null;
  let summaryPage = 1;
  let toastTimer = null;

  const blankState = () => ({ lessons: {}, lastSaved: null });
  let storageAvailable = true;
  let state = loadState();
  let currentTheme = loadThemePreference();

  function loadThemePreference() {
    try {
      return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
    } catch (error) {
      console.warn('Não foi possível carregar a preferência de aparência.', error);
      return 'light';
    }
  }
  function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    const dark = currentTheme === 'dark';
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      const label = dark ? 'Ativar modo claro' : 'Ativar modo escuro';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
      toggle.setAttribute('aria-pressed', String(dark));
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171b18' : '#fbfaf7');
  }
  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    try {
      localStorage.setItem(THEME_KEY, currentTheme);
    } catch (error) {
      console.error('Não foi possível guardar a preferência de aparência.', error);
      showToast('A aparência mudou, mas a preferência não pôde ser salva.');
    }
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return parsed && typeof parsed === 'object' ? { ...blankState(), ...parsed } : blankState();
    } catch (error) {
      storageAvailable = false;
      console.warn('Não foi possível acessar o armazenamento local.', error);
      return blankState();
    }
  }
  function persist() {
    state.lastSaved = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageAvailable = true;
    } catch (error) {
      storageAvailable = false;
      console.error('Não foi possível salvar o progresso neste dispositivo.', error);
      showToast('Não foi possível salvar. Verifique o espaço e as permissões do navegador.');
    }
    updateSavedLabel();
  }
  function lessonRecord(id) {
    if (!state.lessons[id]) state.lessons[id] = { current: null, lastResult: null, history: [] };
    const record = state.lessons[id];
    record.history = Array.isArray(record.history) ? record.history : [];
    return record;
  }
  function getLesson(id) { return bank.find(item => item.id === id); }
  function getAnswers(lesson, record) {
    return record.current?.answers || record.lastResult?.answers || Array(lesson.questions.length).fill(null);
  }
  function compute(lesson, answers) {
    const answered = answers.filter(Boolean).length;
    const correct = answers.reduce((sum, value, i) => sum + (value && value === lesson.questions[i].answer ? 1 : 0), 0);
    const errors = answered - correct;
    const unanswered = lesson.questions.length - answered;
    return { answered, correct, errors, unanswered, score: Math.round((correct / lesson.questions.length) * 100), percent: answered ? Math.round((correct / answered) * 100) : 0, total: lesson.questions.length };
  }
  function formatDate(value) {
    if (!value) return '—';
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
  }
  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char]));
  }
  function stripLabel(text) { return String(text).replace(/^[A-E][.)]\s*/i, ''); }
  function showToast(message) {
    let node = document.querySelector('.toast');
    if (!node) { node = document.createElement('div'); node.className = 'toast'; document.body.appendChild(node); }
    node.textContent = message; node.classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => node.classList.remove('visible'), 2400);
  }
  function updateSavedLabel() {
    const node = document.getElementById('lastSaved');
    if (!node) return;
    node.textContent = !storageAvailable
      ? 'Armazenamento indisponível — progresso não será mantido ao sair'
      : state.lastSaved ? `Salvo neste dispositivo às ${formatDate(state.lastSaved)}` : 'Progresso salvo neste dispositivo';
  }
  function totalOverview() {
    return bank.reduce((sum, lesson) => {
      const rec = lessonRecord(lesson.id); const answers = getAnswers(lesson, rec); const calc = compute(lesson, answers);
      return { answered: sum.answered + calc.answered, correct: sum.correct + calc.correct, errors: sum.errors + calc.errors, lessons: sum.lessons + (rec.lastResult ? 1 : 0) };
    }, { answered:0, correct:0, errors:0, lessons:0 });
  }

  function render() {
    if (screen === 'summary') renderCategorizedSummary();
    else if (screen === 'quiz') renderQuiz();
    else if (screen === 'result') renderResult();
    else renderDashboard();
    updateSavedLabel();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function renderDashboard() {
    const overview = totalOverview();
    const average = overview.answered ? Math.round((overview.correct / overview.answered) * 100) : 0;
    app.innerHTML = `
      <section class="hero">
        <div class="hero-copy"><p class="eyebrow">Um cantinho para aprender</p><h1>Aprender coisas novas pode ser <em>leve.</em></h1><p class="lede">Resumos claros, exemplos para visualizar e exercícios no seu ritmo. Seu progresso fica salvo neste dispositivo para você continuar quando quiser.</p><a class="hero-link" href="#lessons">Explorar minhas aulas <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H20v17H5.5A2.5 2.5 0 0 1 3 17.5zM3 6h14m-7 0v11"/></svg></a></div>
        <div class="hero-art" aria-label="Mulher sorrindo segurando café" role="img"><img src="assets/hero-cafe.png" alt="Mulher sorrindo segurando café"></div>
      </section>
      <section class="lesson-grid" id="lessons">${bank.map(renderLessonCard).join('')}</section>
      <section class="overview" aria-label="Desempenho geral">
        <div class="overview-item"><span>Respondidas</span><strong>${overview.answered}</strong></div>
        <div class="overview-item"><span>Acertos</span><strong>${overview.correct}</strong></div>
        <div class="overview-item"><span>Média geral</span><strong>${average}%</strong></div>
        <div class="overview-item"><span>Aulas concluídas</span><strong>${overview.lessons}/${bank.length}</strong></div>
      </section>`;
    bindDashboard();
  }

  function renderLessonCard(lesson) {
    const rec = lessonRecord(lesson.id); const answers = getAnswers(lesson, rec); const calc = compute(lesson, answers);
    const hasProgress = Boolean(rec.current && calc.answered > 0);
    const done = Boolean(rec.lastResult && !rec.current);
    const progress = done ? 100 : Math.round((calc.answered / lesson.questions.length) * 100);
    const action = done ? 'Ver resumo' : hasProgress ? 'Continuar aula' : 'Ver resumo';
    const actionClass = done ? 'btn-secondary' : 'btn-primary';
    const lastQuestion = rec.current ? Math.min((rec.current.currentIndex ?? 0) + 1, lesson.questions.length) : done ? lesson.questions.length : 1;
    return `<article class="lesson-card"><div class="lesson-kicker"><span class="lesson-number">Aula ${escapeHTML(lesson.number)}</span><span>${lesson.questions.length} questões</span></div><div><h3>${escapeHTML(lesson.title)}</h3><p class="lesson-subtitle">${escapeHTML(lesson.subtitle || '')}</p></div><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><div class="progress-label"><span>${done ? 'Concluída' : `${calc.answered} respondidas`}</span><strong>${progress}%</strong></div><div class="lesson-bottom"><div class="metric"><strong>${lastQuestion}</strong>última questão</div><button class="btn ${actionClass}" data-lesson-action="${lesson.id}">${action}</button></div></article>`;
  }
  function bindDashboard() {
    document.querySelectorAll('[data-lesson-action]').forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.lessonAction;
      activeLessonId = id;
      summaryPage = 1;
      screen = 'summary';
      render();
    }));
  }

  function renderSummary() {
    const lesson = getLesson(activeLessonId);
    if (!lesson) { screen = 'dashboard'; render(); return; }
    const rec = lessonRecord(lesson.id);
    const hasProgress = Boolean(rec.current);
    const done = Boolean(rec.lastResult && !rec.current);
    const pages = [
      {
        title: 'Transparência dos testes',
        intro: 'A transparência indica quais aspectos do sistema são examinados: a estrutura interna, o comportamento externo ou os dois. Essa diferença ajuda a entender o objetivo de cada técnica.',
        blocks: [
          { title: 'Teste de caixa branca', text: 'Também chamado de teste orientado à lógica ou estrutural, utiliza o código-fonte e a estrutura interna para avaliar os componentes do programa. Pode examinar fluxo de dados, condições e ciclos, além de selecionar partes específicas de um componente para investigar seu comportamento com precisão. Ao planejar sua implementação, consideram-se criticidade, complexidade, estrutura e nível de qualidade pretendido, incluindo confiança e segurança. Os níveis associados no material são testes de unidade e teste estático.' },
          { title: 'Teste de caixa preta', text: 'Também conhecido como técnica funcional, verifica os aspectos externos e os requisitos funcionais: as ações que o programa deve realizar. Não examina seu modo interno de funcionamento. Comparam-se grupos de entradas com as saídas esperadas, conforme a especificação do programa. Os níveis associados no material são integração, sistema, aceitação, alfa e beta. O slide também menciona métodos, classes, comandos de repetição e condições ao descrever esses testes, e os resume como testes de entrada e saída.' },
          { title: 'Teste de caixa cinza', text: 'Combina as técnicas de caixa branca e de caixa preta. Analisa a lógica interna e a funcionalidade externa, comparando o que foi especificado com o que o sistema realiza. Pode utilizar engenharia reversa.' },
          { title: 'Diferença essencial e exemplos', text: 'Caixa branca investiga como o sistema funciona; caixa preta confere se as funções entregam o resultado especificado; caixa cinza combina as duas perspectivas. Entre os problemas que a aula cita para testes de caixa preta estão aceitar uma data de nascimento futura, deixar de validar um campo obrigatório, permitir números negativos em campos de valor a pagar e apresentar botões que não executam a ação devida.' }
        ]
      },
      {
        title: 'Outros tipos de teste',
        intro: 'Além das técnicas de caixa branca, preta e cinza, a aula apresenta testes escolhidos de acordo com o aspecto que se deseja avaliar.',
        blocks: [
          { title: 'Carga, usabilidade e stress', text: 'Teste de carga avalia os limites de uso do software: quanto volume de informações e tráfego ele suporta sem apresentar erros. Teste de usabilidade é feito com um pequeno grupo de usuários para verificar se o sistema atende às necessidades, observar dificuldades e ouvir impressões; essas impressões devem ser confrontadas com as observações do avaliador. Teste de stress leva o software aos limites de potência e funcionamento, para mais ou para menos, a fim de identificar quando deixa de funcionar adequadamente e verificar se os limites máximos ou mínimos especificados estão corretos.' },
          { title: 'Testes alfa e beta', text: 'O teste alfa é semelhante ao teste de aceitação: disponibiliza-se o sistema de forma não planejada a um pequeno grupo de pessoas que participa do projeto e fornece feedback sobre o estado atual. É frequentemente usado em software de prateleira como aceitação interna. O teste beta é realizado de forma não planejada por um grande número de pessoas desconhecidas, sem relação com a equipe ou empresa desenvolvedora. Em software de prateleira, é frequentemente usado como aceitação externa e permite avaliar o feedback do mercado.' },
          { title: 'Teste de regressão', text: 'É repetido a cada versão em que funcionalidades são modificadas. Seu objetivo é evitar que erros corrigidos anteriormente voltem a aparecer quando algo novo é acrescentado ao software.' },
          { title: 'Como não confundir', text: 'Carga mede quanto uso o sistema suporta sem erros; stress força os limites para verificar em que ponto o funcionamento se deteriora. Usabilidade observa o uso e as dificuldades de pessoas. Alfa envolve um grupo pequeno ligado ao projeto; beta envolve um grupo grande de pessoas externas. Regressão verifica se mudanças reintroduziram defeitos já corrigidos.' }
        ]
      },
      {
        title: 'Ciclo de vida dos testes',
        intro: 'O material organiza o trabalho de teste em cinco fases, da definição da estratégia ao encerramento e arquivamento da documentação.',
        blocks: [
          { title: '1. Planejamento', text: 'Com base nos requisitos, elaboram-se a Estratégia de Teste e o Plano de Teste.' },
          { title: '2. Preparação', text: 'Prepara-se o Ambiente de Teste para que os testes possam ocorrer conforme planejado. Isso inclui equipamentos, pessoal, ferramentas de automação e massa de testes.' },
          { title: '3. Especificação', text: 'Elaboram-se ou revisam-se os casos de teste e os roteiros de teste.' },
          { title: '4. Execução e 5. Entrega', text: 'Na Execução, os testes são realizados e os resultados obtidos são registrados. Na Entrega, última fase, o projeto é finalizado e toda a documentação também é finalizada e arquivada.' }
        ]
      },
      {
        title: 'TDD: desenvolvimento orientado a testes',
        intro: 'Test Driven Development (TDD) é uma abordagem em que os testes são criados antes do código de cada funcionalidade. O desenvolvimento acontece em ciclos chamados Red, Green, Refactor.',
        blocks: [
          { title: 'Red — definir o comportamento', text: 'A fase vermelha inicia o ciclo. Escreve-se um teste que expressa o que a funcionalidade deve fazer e executa-se esse teste para observar a falha inicial. O teste só será aprovado quando suas expectativas forem atendidas. A falha ajuda a orientar a implementação.' },
          { title: 'Green — fazer o teste passar', text: 'Implementa-se o código necessário para atender ao teste. O objetivo é encontrar uma solução funcional, sem se preocupar ainda em otimizar a implementação.' },
          { title: 'Refactor — melhorar sem quebrar', text: 'Com o teste passando, o código existente é ajustado e melhorado. A saída esperada deve ser preservada; a cada alteração, os testes devem continuar passando para verificar que o comportamento planejado não foi quebrado. A implementação pode se tornar mais descritiva ou mais rápida.' },
          { title: 'Exemplo sortArray e observação sobre MC-FIRE', text: 'Para criar sortArray, que ordena números de um array em ordem crescente, o slide propõe começar com a entrada [2, 4, 1] e a saída esperada [1, 2, 4]. Na fase verde, descreve um loop que percorre o array e move números que estejam fora de ordem, com um loop dentro de outro, até ordenar valores como [3, 4, 5, 6, 2, 1]. A refatoração identifica essa solução como bubble sort e observa que não é um método particularmente rápido. Ao falar em refatorar os testes, o material recomenda considerar as características de um bom teste, que chama de MC-FIRE, mas não detalha o significado dessa sigla.' },
          { title: 'Benefícios atribuídos ao TDD', text: 'A aula lista segurança para modificar o código e feedback rápido sobre problemas durante refatorações; menos bugs e, consequentemente, menos tempo de depuração e correção; correção mais completa dos bugs encontrados; código mais simples e melhor escrito; e possibilidade de manter documentação atualizada sobre cada parte do sistema.' }
        ]
      },
      {
        title: 'Testes manuais e automatizados',
        intro: 'Os dois modos têm usos, vantagens e limitações diferentes. O material recomenda escolher cada um conforme o tipo de avaliação e o contexto.',
        blocks: [
          { title: 'Teste manual', text: 'É a execução de um teste por uma pessoa. Um especialista em garantia da qualidade (testador) verifica se a aplicação funciona conforme as condições descritas nos casos de teste. Ele avalia design, funcionalidade e desempenho. É recomendado para testes exploratórios, de usabilidade e de aceite, e é útil quando não é possível implementar um teste automatizado.' },
          { title: 'Vantagens e limitações do teste manual', text: 'Vantagens: o testador pode avaliar o sistema em condições semelhantes às de produção; pode identificar problemas de aparência visual e de usabilidade que os testes automatizados não conseguem identificar; e requer baixo investimento, sem exigir ferramentas caras ou habilidades de alto nível para ser executado. Limitações: é lento, a interação humana aumenta a possibilidade de um bug passar despercebido e não é adequado para testes de carga e desempenho.' },
          { title: 'Teste automatizado', text: 'Consiste em desenvolver testes programados para execução automática. Com ferramentas, scripts e softwares, compara resultados reais com resultados esperados e ajuda a verificar se o desempenho do sistema corresponde ao esperado. É recomendado para testes de regressão, carga e performance.' },
          { title: 'Vantagens e limitações do teste automatizado', text: 'Vantagens: os scripts e as ferramentas tornam a execução mais confiável e mais rápida que a manual, e são adequados para carga e desempenho. Limitações: desenvolver os testes pode levar mais tempo; cada tipo e fase pode exigir uma ferramenta e conhecimento específicos; o custo pode ser maior, dependendo da automação e da necessidade de infraestrutura adicional; e a automação não identifica problemas de usabilidade.' },
          { title: 'Comparação prática', text: 'A avaliação humana é importante para aspectos visuais, usabilidade, exploração e aceite. A automação é indicada para repetir verificações, regressão, carga e desempenho. Portanto, velocidade e repetibilidade não eliminam a necessidade de avaliação humana; os modos têm funções complementares.' }
        ]
      },
      {
        title: 'Automação de testes: objetivos e princípios',
        intro: 'Automatizar é atribuir a um dispositivo autonomia para controlar o próprio funcionamento com mínima interferência humana. Em testes de software, uma ferramenta imita a interação do testador com a aplicação.',
        blocks: [
          { title: 'Motivações gerenciais', text: 'Na visão gerencial, automatizar pode tornar mais independentes entre si as variáveis do triângulo das restrições — escopo, tempo e custo — sem afetar a qualidade do produto a ser entregue.' },
          { title: 'Motivações operacionais', text: 'A execução dos testes pode manter a mesma eficiência em menos tempo; tarefas repetitivas podem ter uma redução drástica de falhas humanas; e os testadores ficam mais disponíveis para atividades estratégicas.' },
          { title: 'O papel humano permanece', text: 'O teste manual não deve ser eliminado: deve ser reduzido e concentrado em casos específicos nos quais automatizar seja muito caro ou seja necessário julgamento humano. Mesmo que 99% dos testes sejam automatizados, ainda são necessárias pessoas para atividades que os robôs não conseguem realizar, como manutenção do projeto de teste, pesquisa e documentação de novas estratégias. O material afirma que o robô não substituirá o testador.' },
          { title: 'Princípios da automação', text: 'Primeiro, projete os casos de teste e depois automatize-os. Não tente automatizar tudo: priorize. Organize e proteja os scripts de modo que a revisão seja facilitada. Inicie a automação de testes o mais cedo possível no projeto.' }
        ]
      },
      {
        title: 'Ferramentas e tópicos finais',
        intro: 'Os slides apresentam ferramentas para diferentes plataformas e usos. As características abaixo são as que o próprio material atribui a cada uma.',
        blocks: [
          { title: 'Selenium', text: 'Ferramenta open source e gratuita para testes automatizados de aplicações web pelo navegador, incluindo testes de regressão. Oferece recursos de gravação e reprodução. O material cita Java, Perl, JavaScript, PHP, Python, C#, Ruby e Groovy como linguagens que os testadores podem utilizar.' },
          { title: 'Ranorex', text: 'Apresentada como ferramenta completa, ajustável e fácil de usar para iniciantes, com IDE e APIs abertas para especialistas em automação. Suporta testes de ponta a ponta em desktop, web e dispositivos móveis. Tem versão paga e oferece uma versão de avaliação gratuita.' },
          { title: 'Robotium e Telerik Test Studio', text: 'Robotium é um framework gratuito popular para automação de testes Android, compatível com aplicações nativas e híbridas. Simula procedimentos normalmente executados por um analista e facilita a escrita de testes de caixa preta. Telerik Test Studio é uma ferramenta abrangente que pode ser usada manualmente e oferece testes funcionais de UI, exploratórios, de performance, mobile, de carregamento e integração com Visual Studio.' },
          { title: 'Slides com conteúdo apenas indicado', text: 'O material inclui um slide intitulado “Exemplo de teste com o Robotium”, mas não descreve o exemplo em texto. Também apresenta o título “Metodologia 5W2H”, sem explicar seus elementos nos slides extraídos. Por fidelidade à fonte, este resumo registra essas menções sem completar o conteúdo com informações externas.' },
          { title: 'Leituras complementares e referências listadas', text: 'Para TDD, os slides citam “Test Driven Development”, da Codecademy (codecademy.com/article/tdd-red-green-refactor), e um artigo da OneDayTesting (blog.onedaytesting.com.br/test-driven-development). Como leituras complementares, citam “Testes Automatizados”, da Auditeste (auditeste.com.br/testes-automatizados), e “5 ferramentas para gestão de testes de software”, da Vericode (blog.vericode.com.br/5-ferramentas-testes-de-software). A apresentação também termina com agradecimento e votos de bons estudos.' }
        ]
      }
    ];
    summaryPage = Math.max(1, Math.min(summaryPage, pages.length));
    const page = pages[summaryPage - 1];
    const pageNumber = String(summaryPage).padStart(2, '0');
    app.innerHTML = `<section class="summary-shell"><div class="summary-top"><button class="btn btn-quiet" id="summaryHome">Voltar ao painel</button><span class="summary-source">${escapeHTML(lesson.source || 'Material da aula')}</span></div><div class="summary-heading"><p class="eyebrow">Aula ${escapeHTML(lesson.number)} · Resumo completo · Parte ${summaryPage} de ${pages.length}</p><h1>${escapeHTML(page.title)}</h1><p class="lede">${escapeHTML(page.intro)}</p></div><div class="summary-page-bar"><span class="summary-dot active"></span><strong>Parte ${String(summaryPage).padStart(2, '0')} de ${pages.length}</strong><span class="summary-overall">${summaryPage}/${pages.length}</span></div>${renderSummaryDiagram(summaryPage)}<div class="summary-grid">${page.blocks.map((block, index) => `<article class="summary-block"><span class="summary-number">${pageNumber}.${String(index + 1).padStart(2, '0')}</span><div><h2>${escapeHTML(block.title)}</h2><p>${escapeHTML(block.text)}</p></div></article>`).join('')}</div><div class="summary-actions"><button class="btn btn-secondary" id="summaryPrevious" ${summaryPage === 1 ? 'disabled' : ''}>Parte anterior</button>${summaryPage < pages.length ? '<button class="btn btn-primary" id="summaryNext">Próxima parte</button>' : `<button class="btn btn-primary" id="summaryStart">${done ? 'Revisar resultado' : hasProgress ? 'Continuar quiz' : 'Começar quiz'}</button>`}</div></section>`;
    document.getElementById('summaryHome')?.addEventListener('click', () => { screen = 'dashboard'; render(); });
    document.getElementById('summaryPrevious')?.addEventListener('click', () => { summaryPage = Math.max(1, summaryPage - 1); render(); });
    document.getElementById('summaryNext')?.addEventListener('click', () => { summaryPage = Math.min(pages.length, summaryPage + 1); render(); });
    document.getElementById('summaryStart')?.addEventListener('click', () => {
      if (done) { resultContext = { type:'final', id:lesson.id }; screen = 'result'; render(); }
      else startQuiz(lesson.id);
    });
  }

  function renderSummaryDiagram(page) {
    if (page === 1) {
      return `<section class="summary-visual" aria-labelledby="transparency-title"><div class="visual-heading"><div><h2 id="transparency-title">Comparação das técnicas de transparência</h2><p>O foco de cada técnica pode ser comparado pela informação que o teste examina.</p></div></div><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">CAIXA PRETA</span><div class="concept-flow"><span>Entradas</span><span class="flow-separator" aria-hidden="true"></span><strong>Funções do sistema</strong><span class="flow-separator" aria-hidden="true"></span><span>Saídas esperadas</span></div><p>Compara comportamento e requisitos; não observa o funcionamento interno.</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">CAIXA BRANCA</span><div class="concept-flow"><span>Código-fonte</span><span class="flow-separator" aria-hidden="true"></span><strong>Estrutura e lógica</strong><span class="flow-separator" aria-hidden="true"></span><span>Componentes</span></div><p>Examina fluxo de dados, condições, ciclos e partes do componente.</p></article>
        <article class="diagram-card gray-box"><span class="diagram-label">CAIXA CINZA</span><div class="concept-flow"><span>Estrutura interna</span><span class="flow-separator flow-combine" aria-hidden="true">+</span><strong>Entradas e saídas</strong><span class="flow-separator" aria-hidden="true"></span><span>Comparação</span></div><p>Combina lógica interna e funcionalidade externa, confrontando especificação e execução.</p></article>
      </div></section>`;
    }
    if (page === 3) {
      return `<section class="summary-visual" aria-label="Sequência das fases do ciclo de vida dos testes"><div class="lifecycle"><span>Planejamento</span><i aria-hidden="true">•</i><span>Preparação</span><i aria-hidden="true">•</i><span>Especificação</span><i aria-hidden="true">•</i><span>Execução</span><i aria-hidden="true">•</i><span>Entrega</span></div></section>`;
    }
    if (page === 4) {
      return `<section class="summary-visual" aria-label="Ciclo TDD Red, Green e Refactor"><div class="tdd-flow">
        <article class="tdd-step red-step"><span class="step-number">1</span><strong>RED · teste falha</strong><p>Defina o comportamento esperado e execute o teste.</p></article><span class="tdd-separator" aria-hidden="true"></span>
        <article class="tdd-step green-step"><span class="step-number">2</span><strong>GREEN · teste passa</strong><p>Implemente uma solução funcional para atender ao teste.</p></article><span class="tdd-separator" aria-hidden="true"></span>
        <article class="tdd-step refactor-step"><span class="step-number">3</span><strong>REFACTOR · melhorar</strong><p>Melhore o código mantendo o teste aprovado.</p></article>
      </div><p class="visual-caption">Exemplo do material: entrada [2, 4, 1]; função sortArray; saída [1, 2, 4].</p></section>`;
    }
    if (page === 6) {
      return `<section class="summary-visual" aria-label="Objetivos da automação na gestão e na operação"><div class="transparency-diagram"><article class="diagram-card black-box"><span class="diagram-label">VISÃO GERENCIAL</span><div class="concept-flow"><span>Escopo</span><i aria-hidden="true">•</i><span>Tempo</span><i aria-hidden="true">•</i><span>Custo</span></div><p>Variáveis mais independentes sem afetar a qualidade do produto.</p></article><article class="diagram-card white-box"><span class="diagram-label">VISÃO OPERACIONAL</span><div class="concept-flow"><span>Menos tempo</span><i aria-hidden="true">•</i><span>Menos falhas repetitivas</span><i aria-hidden="true">•</i><span>Foco estratégico</span></div><p>Execução eficiente, redução de falhas humanas repetitivas e maior disponibilidade dos testadores.</p></article></div></section>`;
    }
    return '';
  }

  const topicBriefs = {
    'Transparência: caixa branca, caixa preta e caixa cinza': 'Caixa branca olha o código; caixa preta confere entradas e saídas; caixa cinza combina as duas.',
    'Caixa preta: funções, entradas e saídas': 'Testa o que o sistema recebe e responde, sem olhar como o código funciona.',
    'Caixa cinza: combinação das perspectivas': 'Compara o resultado visível com a lógica interna do sistema.',
    'Carga, usabilidade e stress': 'Carga mede volume; usabilidade observa pessoas; stress testa os limites.',
    'Alfa, beta e regressão': 'Alfa: grupo interno pequeno. Beta: pessoas externas. Regressão: verifica se mudanças quebraram algo.',
    'Diferenças entre os tipos de teste': 'Cada teste responde a uma pergunta: aguenta o volume? É fácil usar? A mudança quebrou algo?',
    'Planejamento': 'Define a estratégia e o plano com base nos requisitos.',
    'Preparação': 'Organiza ambiente, equipe, ferramentas e dados de teste.',
    'Especificação': 'Descreve os testes e os passos que serão seguidos.',
    'Execução': 'Roda os testes e registra os resultados.',
    'Entrega': 'Encerra o projeto e guarda a documentação.',
    'Red: escrever primeiro o teste': 'Escreva o teste antes do código; ele falha porque a função ainda não existe.',
    'Green: implementar para passar': 'Faça o mínimo necessário para o teste passar.',
    'Refactor: melhorar sem quebrar o teste': 'Organize o código e rode o teste de novo para garantir que continua funcionando.',
    'Exemplo sortArray e observação sobre MC-FIRE': 'O exemplo ordena uma lista; a aula também cita MC-FIRE, sem explicar a sigla.',
    'Benefícios do TDD apresentados na aula': 'Testes dão retorno rápido, ajudam a evitar bugs e registram o comportamento esperado.',
    'Teste manual: definição e indicações': 'Uma pessoa executa os passos e observa o sistema; é útil para usabilidade e exploração.',
    'Vantagens e limitações do teste manual': 'É simples de começar e percebe problemas visuais, mas demora e não serve bem para carga.',
    'Teste automatizado: definição e indicações': 'Um script repete testes e compara o resultado com o esperado.',
    'Vantagens e limitações do teste automatizado': 'É rápido para repetir tarefas, mas exige preparação e não avalia bem a usabilidade.',
    'Como escolher entre os dois': 'Use pessoas para observar e explorar; use automação para repetir verificações.',
    'Motivações gerenciais': 'Automatizar ajuda a equilibrar escopo, tempo e custo sem esquecer a qualidade.',
    'Motivações operacionais': 'Reduz tarefas repetitivas e libera tempo da equipe para outras atividades.',
    'O papel humano continua necessário': 'Automação ajuda, mas pessoas ainda precisam avaliar, pesquisar e manter os testes.',
    'Princípios para automatizar': 'Planeje antes, priorize o que automatizar e mantenha os scripts organizados.',
    'Selenium': 'Automatiza testes de sites pelo navegador; os slides o apresentam como gratuito e open source.',
    'Ranorex': 'Ferramenta para testes em desktop, web e celular; há versão paga e avaliação gratuita.',
    'Robotium': 'Framework citado para automatizar testes de aplicativos Android.',
    'Telerik Test Studio': 'Ferramenta citada para testes de interface, exploração, desempenho e dispositivos móveis.',
    'Metodologia 5W2H e exemplo com Robotium': 'Os slides citam os temas, mas não detalham o método nem o exemplo.',
    'Leituras complementares e referências': 'A aula lista leituras sobre TDD, automação e ferramentas de teste.'
  };

  function getTopicBrief(topic) {
    return topicBriefs[topic.title] || topic.text.split(/(?<=[.!?])\s+/)[0];
  }

  function compactExample(example) {
    const firstThought = example.split(/[;.!?](?:\s|$)/)[0];
    if (firstThought.length <= 120) return `${firstThought}.`;
    const clipped = firstThought.slice(0, 117).replace(/\s+\S*$/, '');
    return `${clipped}...`;
  }

  function renderTopicIllustration(categoryId, topicIndex) {
    const icons = {
      inspect: '<circle cx="25" cy="23" r="13"/><path d="m35 33 12 12M19 23h12m-6-6v12"/>',
      input: '<path d="M12 14h36v27H12zM18 21h10m-10 7h20m-20 7h14"/><path d="M42 20v14m-5-5 5 5 5-5"/>',
      layers: '<path d="m30 9 20 11-20 11-20-11L30 9Z"/><path d="m12 27 18 10 18-10M12 35l18 10 18-10"/>',
      pulse: '<path d="M8 29h10l6-14 10 27 7-16h11"/>',
      people: '<circle cx="23" cy="19" r="7"/><circle cx="41" cy="22" r="5"/><path d="M9 43c1-9 6-14 14-14s13 5 14 14m-1-10c7-2 14 2 15 10"/>',
      refresh: '<path d="M45 20a17 17 0 0 0-29-5l-4 5m0-9v9h9m-6 14a17 17 0 0 0 29 5l4-5m0 9v-9h-9"/>',
      target: '<circle cx="30" cy="27" r="19"/><circle cx="30" cy="27" r="11"/><circle cx="30" cy="27" r="3"/>',
      toolbox: '<rect x="9" y="17" width="42" height="27" rx="4"/><path d="M21 17v-6h18v6m-30 9h42m-26 0v6h10v-6"/>',
      clipboard: '<rect x="14" y="12" width="32" height="36" rx="4"/><path d="M23 12V8h14v4m-14 11h14m-14 8h14m-14 8h8"/>',
      play: '<circle cx="30" cy="27" r="20"/><path d="m25 17 15 10-15 10V17Z"/>',
      archive: '<path d="M10 14h40v9H10zM14 23v23h32V23m-21 8h10"/>',
      test: '<rect x="14" y="10" width="32" height="36" rx="4"/><path d="M22 19h16m-16 8h8m-8 9 5 5 11-12"/>',
      wrench: '<path d="M37 12a13 13 0 0 0-15 17L10 41l8 8 12-12a13 13 0 0 0 17-15l-9 9-9-9 8-10Z"/>',
      spark: '<path d="m30 8 4 14 14 5-14 5-4 14-5-14-14-5 14-5 5-14Zm17 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/>',
      code: '<path d="m21 17-12 10 12 10m18-20 12 10-12 10M34 12l-8 30"/>',
      shield: '<path d="M30 8 47 15v12c0 12-7 19-17 24-10-5-17-12-17-24V15l17-7Z"/><path d="m22 28 6 6 11-12"/>',
      eye: '<path d="M6 27s9-14 24-14 24 14 24 14-9 14-24 14S6 27 6 27Z"/><circle cx="30" cy="27" r="7"/>',
      gauge: '<path d="M10 40a21 21 0 1 1 40 0"/><path d="m30 29 11-10M17 35h3m20 0h3m-13-20v3"/>',
      robot: '<rect x="14" y="17" width="32" height="27" rx="7"/><path d="M30 10v7m-6 27v5m12-5v5M14 27H9m37 0h5"/><circle cx="23" cy="28" r="2"/><circle cx="37" cy="28" r="2"/><path d="M23 36h14"/>',
      balance: '<path d="M30 11v34m-14 0h28M14 18h32m-16-7 5 7m-5-7-5 7M14 18l-8 15h16l-8-15Zm32 0-8 15h16l-8-15Z"/>',
      chart: '<path d="M11 45V28h10v17m4 0V12h10v33m4 0V22h10v23M8 45h44"/>',
      timer: '<circle cx="30" cy="29" r="18"/><path d="M30 18v12l8 5m-13-26h10m-5 0V8"/>',
      list: '<rect x="12" y="10" width="36" height="37" rx="4"/><path d="m19 21 2 2 4-5m5 4h11m-22 8 2 2 4-5m5 4h11m-22 8 2 2 4-5m5 4h11"/>',
      browser: '<rect x="8" y="11" width="44" height="34" rx="4"/><path d="M8 20h44m-35-5h1m6 0h1m6 0h1m-13 15 6-5 6 5m8-5h5m-5 6h5"/>',
      devices: '<rect x="7" y="12" width="34" height="28" rx="3"/><path d="M3 46h42m-25-6v6"/><rect x="41" y="20" width="13" height="24" rx="3"/><path d="M46 40h3"/>',
      android: '<path d="M18 21a14 14 0 0 1 24 0M15 23h30v17a4 4 0 0 1-4 4H19a4 4 0 0 1-4-4V23Zm5-13-4-5m28 5 4-5M9 25v13m42-13v13"/><circle cx="23" cy="30" r="1"/><circle cx="37" cy="30" r="1"/>',
      sliders: '<path d="M12 15h36m-36 12h36m-36 12h36"/><circle cx="23" cy="15" r="4"/><circle cx="39" cy="27" r="4"/><circle cx="27" cy="39" r="4"/>',
      info: '<circle cx="30" cy="27" r="20"/><path d="M30 25v13m0-21h.1"/>',
      book: '<path d="M8 13c9-3 16-1 22 5 6-6 13-8 22-5v30c-9-3-16-1-22 5-6-6-13-8-22-5V13Zm22 5v30"/>'
    };
    const categoryIcons = {
      'classificacao-testes': ['inspect', 'input', 'layers', 'pulse', 'people', 'refresh'],
      'ciclo-vida': ['target', 'toolbox', 'clipboard', 'play', 'archive'],
      tdd: ['test', 'wrench', 'spark', 'code', 'shield', 'refresh'],
      'manual-automatizado': ['eye', 'gauge', 'robot', 'balance', 'refresh'],
      automacao: ['chart', 'timer', 'people', 'list', 'spark'],
      'ferramentas-complementos': ['browser', 'devices', 'android', 'sliders', 'info', 'book']
    };
    const iconName = categoryIcons[categoryId]?.[topicIndex] || 'inspect';
    return `<svg class="topic-drawing" data-icon="${iconName}" data-palette="${categoryId}" viewBox="0 0 60 54" aria-hidden="true" focusable="false"><g>${icons[iconName]}</g></svg>`;
  }

  function renderCategorizedSummary() {
    const lesson = getLesson(activeLessonId);
    if (!lesson) { screen = 'dashboard'; render(); return; }
    const studySummary = STUDY_SUMMARIES[lesson.id];
    if (!studySummary) { screen = 'dashboard'; render(); showToast('O resumo desta aula ainda não está disponível.'); return; }
    const record = lessonRecord(lesson.id);
    const hasProgress = Boolean(record.current);
    const done = Boolean(record.lastResult && !record.current);
    const startLabel = done ? 'Revisar resultado' : hasProgress ? 'Continuar quiz' : 'Começar quiz';
    const categoryLinks = studySummary.map(category => `<a href="#summary-${category.id}">${escapeHTML(category.title)}</a>`).join('');
    const categories = studySummary.map(category => `
      <section class="summary-category" id="summary-${category.id}">
        <header class="category-heading"><p class="eyebrow">Categoria</p><h2>${escapeHTML(category.title)}</h2><p>${escapeHTML(category.intro)}</p></header>
        ${renderCategoryDiagram(category.diagram)}
        <div class="summary-grid">${category.topics.map((topic, topicIndex) => `<article class="summary-block" data-palette="${category.id}">
          <div class="topic-summary">
            ${renderTopicIllustration(category.id, topicIndex)}
            <div><span class="topic-label">IDEIA PRINCIPAL</span><h3>${escapeHTML(topic.title)}</h3><p class="topic-brief">${escapeHTML(getTopicBrief(topic))}</p></div>
          </div>
          ${topic.example ? `<div class="mv-example"><strong>Exemplo MV</strong><p>${escapeHTML(compactExample(topic.example))}</p></div>` : ''}
          <details class="topic-details"><summary>Ver explicação completa</summary><p>${escapeHTML(topic.text)}</p>${topic.example ? `<p class="full-example"><strong>Exemplo completo:</strong> ${escapeHTML(topic.example)}</p>` : ''}</details>
        </article>`).join('')}</div>
      </section>`).join('');

    app.innerHTML = `<section class="summary-shell">
      <div class="summary-top"><button class="btn btn-quiet" id="summaryHome">Voltar ao painel</button><span class="summary-source">${escapeHTML(lesson.source || 'Material da aula')}</span></div>
      <header class="summary-heading"><p class="eyebrow">Aula ${escapeHTML(lesson.number)} · Guia de estudo completo</p><h1>${escapeHTML(lesson.title)}: resumo por categorias</h1><p class="lede">Conteúdo organizado por categoria e assunto, com explicações e exemplos para visualizar a aplicação das ideias.</p></header>
      <aside class="summary-note"><strong>Sobre os exemplos:</strong> os cenários do sistema MV são didáticos. Eles não afirmam funcionalidades, arquitetura ou características específicas de um produto MV.</aside>
      <nav class="summary-index" aria-label="Categorias do resumo">${categoryLinks}</nav>
      ${categories}
      <div class="summary-actions"><button class="btn btn-secondary" id="summaryHomeBottom">Voltar ao painel</button><button class="btn btn-primary" id="summaryStart">${startLabel}</button></div>
      <div class="summary-quiz-dock"><button class="btn btn-primary summary-quiz-fixed" id="summaryStartFixed" type="button" aria-label="Começar quiz de ${escapeHTML(lesson.title)}">Começar quiz</button></div>
    </section>`;

    document.getElementById('summaryHome')?.addEventListener('click', () => { screen = 'dashboard'; render(); });
    document.getElementById('summaryHomeBottom')?.addEventListener('click', () => { screen = 'dashboard'; render(); });
    document.getElementById('summaryStart')?.addEventListener('click', () => {
      if (done) { resultContext = { type:'final', id:lesson.id }; screen = 'result'; render(); }
      else startQuiz(lesson.id);
    });
    document.getElementById('summaryStartFixed')?.addEventListener('click', () => startQuiz(lesson.id));
  }

  function renderCategoryDiagram(type) {
    if (type === 'bug-types') {
      return `<section class="summary-visual" aria-label="Categorias de bugs"><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">FUNCIONAL</span><p>A ação não produz o comportamento esperado.</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">CONTEÚDO</span><p>Texto, mídia, link, rótulo ou dado está ausente ou incorreto.</p></article>
        <article class="diagram-card gray-box"><span class="diagram-label">VISUAL</span><p>Elementos gráficos estão cortados, sobrepostos ou mal dimensionados.</p></article>
      </div></section>`;
    }
    if (type === 'severity-priority') {
      return `<section class="summary-visual" aria-label="Matriz de severidade e prioridade"><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">SEVERIDADE</span><p>Qual é o impacto do defeito no software e nos fluxos?</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">PRIORIDADE</span><p>Com que urgência o negócio precisa da correção?</p></article>
        <article class="diagram-card gray-box"><span class="diagram-label">DECISÃO</span><p>Combine os critérios para orientar a ordem de correção.</p></article>
      </div></section>`;
    }
    if (type === 'test-strategy') {
      return `<section class="summary-visual" aria-label="Etapas para estruturar uma estratégia de testes"><div class="lifecycle"><span>Objetivos</span><i aria-hidden="true">•</i><span>Requisitos e escopo</span><i aria-hidden="true">•</i><span>Técnicas e casos</span><i aria-hidden="true">•</i><span>Resultados e ajustes</span></div></section>`;
    }
    if (type === 'test-plan') {
      return `<section class="summary-visual" aria-label="Elementos de identificação do plano de teste"><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">BASE</span><p>Especificação e projeto do sistema.</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">IDENTIFICAÇÃO</span><p>Projeto, documentos, objetivos e escopo.</p></article>
        <article class="diagram-card gray-box"><span class="diagram-label">REVISÕES</span><p>Data, versão, descrição e autoria.</p></article>
      </div></section>`;
    }
    if (type === 'test-levels') {
      return `<section class="summary-visual" aria-label="Quatro níveis de teste"><div class="lifecycle"><span>Unidade</span><i aria-hidden="true">•</i><span>Integração</span><i aria-hidden="true">•</i><span>Sistema</span><i aria-hidden="true">•</i><span>Aceitação</span></div></section>`;
    }
    if (type === 'test-management') {
      return `<section class="summary-visual" aria-label="Elementos do gerenciamento do plano"><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">EXECUÇÃO</span><p>Atividades, fluxo e responsáveis.</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">ORGANIZAÇÃO</span><p>Recursos, marcos e cronograma.</p></article>
        <article class="diagram-card gray-box"><span class="diagram-label">ACOMPANHAMENTO</span><p>Qualidade, procedimentos e restrições.</p></article>
      </div></section>`;
    }
    if (type === 'transparency') {
      return `<section class="summary-visual" aria-label="Comparação das técnicas de transparência"><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">CAIXA PRETA</span><div class="concept-flow"><span>Entradas</span><span class="flow-separator" aria-hidden="true"></span><strong>Funções do sistema</strong><span class="flow-separator" aria-hidden="true"></span><span>Saídas esperadas</span></div><p>Compara comportamento e requisitos; não observa o funcionamento interno.</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">CAIXA BRANCA</span><div class="concept-flow"><span>Código-fonte</span><span class="flow-separator" aria-hidden="true"></span><strong>Estrutura e lógica</strong><span class="flow-separator" aria-hidden="true"></span><span>Componentes</span></div><p>Examina fluxo de dados, condições, ciclos e partes do componente.</p></article>
        <article class="diagram-card gray-box"><span class="diagram-label">CAIXA CINZA</span><div class="concept-flow"><span>Estrutura interna</span><span class="flow-separator flow-combine" aria-hidden="true">+</span><strong>Entradas e saídas</strong><span class="flow-separator" aria-hidden="true"></span><span>Comparação</span></div><p>Combina lógica interna e funcionalidade externa, confrontando especificação e execução.</p></article>
      </div></section>`;
    }
    if (type === 'lifecycle') {
      return `<div class="summary-visual" aria-label="Sequência das fases do ciclo de vida dos testes"><div class="lifecycle"><span>Planejamento</span><i aria-hidden="true">•</i><span>Preparação</span><i aria-hidden="true">•</i><span>Especificação</span><i aria-hidden="true">•</i><span>Execução</span><i aria-hidden="true">•</i><span>Entrega</span></div></div>`;
    }
    if (type === 'tdd') {
      return `<section class="summary-visual" aria-label="Ciclo TDD Red, Green e Refactor"><div class="tdd-flow">
        <article class="tdd-step red-step"><strong>RED · teste falha</strong><p>Defina o comportamento esperado e execute o teste.</p></article><span class="tdd-separator" aria-hidden="true"></span>
        <article class="tdd-step green-step"><strong>GREEN · teste passa</strong><p>Implemente uma solução funcional para atender ao teste.</p></article><span class="tdd-separator" aria-hidden="true"></span>
        <article class="tdd-step refactor-step"><strong>REFACTOR · melhorar</strong><p>Melhore o código mantendo o teste aprovado.</p></article>
      </div><p class="visual-caption">Exemplo do material: entrada [2, 4, 1]; função sortArray; saída [1, 2, 4].</p></section>`;
    }
    if (type === 'automation') {
      return `<section class="summary-visual" aria-label="Objetivos da automação na gestão e na operação"><div class="transparency-diagram">
        <article class="diagram-card black-box"><span class="diagram-label">VISÃO GERENCIAL</span><div class="concept-flow"><span>Escopo</span><i aria-hidden="true">·</i><span>Tempo</span><i aria-hidden="true">·</i><span>Custo</span></div><p>Variáveis mais independentes sem afetar a qualidade do produto.</p></article>
        <article class="diagram-card white-box"><span class="diagram-label">VISÃO OPERACIONAL</span><div class="concept-flow"><span>Menos tempo</span><i aria-hidden="true">·</i><span>Menos falhas repetitivas</span><i aria-hidden="true">·</i><span>Foco estratégico</span></div><p>Execução eficiente, redução de falhas humanas repetitivas e maior disponibilidade dos testadores.</p></article>
      </div></section>`;
    }
    return '';
  }

  function startQuiz(id) {
    const lesson = getLesson(id); if (!lesson) return;
    const rec = lessonRecord(id);
    if (!rec.current) {
      rec.current = { answers: Array(lesson.questions.length).fill(null), currentIndex: 0, startedAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      persist();
    }
    activeLessonId = id; screen = 'quiz'; render();
  }
  function renderQuiz() {
    const lesson = getLesson(activeLessonId); const rec = lessonRecord(activeLessonId);
    if (!lesson || !rec.current) { screen = 'dashboard'; render(); return; }
    const current = rec.current; const index = Math.max(0, Math.min(current.currentIndex || 0, lesson.questions.length - 1)); current.currentIndex = index;
    const question = lesson.questions[index]; const calc = compute(lesson, current.answers); const selected = current.answers[index];
    const isLast = index === lesson.questions.length - 1;
    const finishLabel = calc.unanswered ? 'Finalizar com pendências' : 'Concluir aula';
    app.innerHTML = `<section class="quiz-wrap"><div class="quiz-head"><div><p class="eyebrow">Aula ${escapeHTML(lesson.number)} · ${escapeHTML(lesson.title)}</p><h1>Raciocine antes de responder.</h1><p class="quiz-title-meta">Cinco alternativas · uma única resposta correta · sem feedback durante a tentativa</p></div><div class="quiz-actions"><button class="btn btn-quiet" id="backHome">Painel</button><button class="btn btn-secondary" id="saveExit">Salvar e sair</button></div></div><div class="quiz-progress"><div class="quiz-progress-line"><span style="width:${Math.round(((index + 1) / lesson.questions.length) * 100)}%"></span></div><div class="quiz-progress-count">${index + 1} / ${lesson.questions.length}</div></div><article class="question-card"><div class="question-index">Questão ${String(index + 1).padStart(2, '0')}</div><h2 class="question-text">${escapeHTML(question.question)}</h2><div class="options" role="radiogroup" aria-label="Alternativas">${question.options.map((option, optionIndex) => { const letter = LETTERS[optionIndex]; return `<label class="option ${selected === letter ? 'selected' : ''}"><input type="radio" name="answer" value="${letter}" ${selected === letter ? 'checked' : ''}><span class="option-letter">${letter}</span><span>${escapeHTML(stripLabel(option))}</span></label>`; }).join('')}</div></article><div class="quiz-footer"><span class="answered-note">${calc.answered} respondidas · ${calc.unanswered} pendentes</span><div class="nav-actions"><button class="btn btn-secondary" id="previousQuestion" ${index === 0 ? 'disabled' : ''}>Anterior</button><button class="btn btn-primary" id="nextQuestion">${isLast ? finishLabel : 'Próxima'}</button></div></div></section>`;
    bindQuiz(lesson, rec, index, isLast, calc.unanswered);
  }
  function bindQuiz(lesson, rec, index, canFinish, unanswered) {
    document.querySelectorAll('input[name="answer"]').forEach(input => input.addEventListener('change', () => {
      rec.current.answers[index] = input.value; rec.current.updatedAt = new Date().toISOString(); persist(); renderQuiz();
    }));
    document.getElementById('previousQuestion')?.addEventListener('click', () => { rec.current.currentIndex = Math.max(0, index - 1); persist(); renderQuiz(); });
    document.getElementById('nextQuestion')?.addEventListener('click', () => {
      if (canFinish) {
        if (unanswered && !confirm(`Ainda há ${unanswered} questão(ões) sem resposta. Elas aparecerão como pendentes, não como erro. Deseja finalizar mesmo assim?`)) return;
        completeQuiz(lesson, rec);
        return;
      }
      rec.current.currentIndex = Math.min(lesson.questions.length - 1, index + 1); persist(); renderQuiz();
    });
    document.getElementById('saveExit')?.addEventListener('click', () => { persist(); resultContext = { type:'partial', id:lesson.id }; screen = 'result'; render(); showToast('Progresso salvo neste dispositivo.'); });
    document.getElementById('backHome')?.addEventListener('click', () => { persist(); screen = 'dashboard'; render(); });
  }
  function completeQuiz(lesson, rec) {
    const calc = compute(lesson, rec.current.answers); const finishedAt = new Date().toISOString();
    const result = { ...calc, answers: rec.current.answers.slice(), startedAt: rec.current.startedAt, finishedAt, attemptNumber: rec.history.length + 1 };
    rec.history.unshift(result); rec.lastResult = result; rec.current = null; persist();
    activeLessonId = lesson.id; resultContext = { type:'final', id:lesson.id, result }; screen = 'result'; render();
  }

  function renderResult() {
    const id = resultContext?.id || activeLessonId; const lesson = getLesson(id); const rec = lessonRecord(id);
    if (!lesson) { screen='dashboard'; render(); return; }
    const isPartial = resultContext?.type === 'partial'; const result = isPartial && rec.current ? { ...compute(lesson, rec.current.answers), answers:rec.current.answers, finishedAt:rec.current.updatedAt } : (resultContext?.result || rec.lastResult);
    if (!result) { screen='dashboard'; render(); return; }
    const calc = compute(lesson, result.answers); const title = isPartial ? 'Pausa inteligente.' : 'Aula concluída.'; const subtitle = isPartial ? 'Seu progresso foi salvo. Continue quando estiver pronto.' : 'O resultado desta tentativa agora faz parte do seu histórico.';
    app.innerHTML = `<section class="result-shell"><div class="result-header"><div><p class="eyebrow">Aula ${escapeHTML(lesson.number)} · ${escapeHTML(lesson.title)}</p><h1>${title}</h1><p class="lede">${subtitle}</p></div><div class="score-block"><strong>${isPartial ? calc.percent : calc.score}%</strong><span>${isPartial ? 'aproveitamento até aqui' : 'nota final'}</span></div></div><div class="result-stats"><div class="stat-card"><span>Respondidas</span><strong>${calc.answered}</strong></div><div class="stat-card good"><span>Acertos</span><strong>${calc.correct}</strong></div><div class="stat-card bad"><span>Erros</span><strong>${calc.errors}</strong></div><div class="stat-card wait"><span>Pendentes</span><strong>${calc.unanswered}</strong></div></div><div class="progress-label"><span>Progresso da aula</span><strong>${Math.round((calc.answered / calc.total) * 100)}%</strong></div><div class="progress-track"><div class="progress-fill" style="width:${Math.round((calc.answered / calc.total) * 100)}%"></div></div><div class="result-actions"><button class="btn btn-primary" id="resultContinue">${isPartial ? 'Continuar quiz' : 'Refazer aula'}</button><button class="btn btn-secondary" id="resultHome">Voltar ao painel</button></div>${isPartial ? renderPartialNotice(lesson, result.answers) : renderReview(lesson, result.answers)}${renderHistory(rec, isPartial)}</section>`;
    bindResult(lesson, rec, isPartial);
  }
  function renderPartialNotice(lesson, answers) {
    const pending = answers.reduce((list, a, i) => { if (!a) list.push(i + 1); return list; }, []);
    return `<section class="result-panel"><h2>Você parou na questão ${lessonRecord(lesson.id).current.currentIndex + 1}.</h2><p class="panel-sub">Nenhuma questão pendente foi contabilizada como erro. ${pending.length ? `Ainda faltam ${pending.length} respostas.` : 'Todas as questões já têm resposta; conclua a aula para registrar o resultado final.'}</p><div class="result-actions"><button class="btn btn-primary" id="partialContinue">Retomar agora</button></div></section>`;
  }
  function renderReview(lesson, answers) {
    const wrong = lesson.questions.map((q, i) => ({q, i})).filter(({q, i}) => answers[i] && answers[i] !== q.answer);
    const unanswered = lesson.questions.map((q, i) => ({q, i})).filter(({i}) => !answers[i]);
    return `<section class="result-panel"><h2>Revisão de desempenho</h2><p class="panel-sub">Aqui estão as questões que merecem uma segunda leitura. A explicação retoma o raciocínio apresentado no material.</p>${wrong.length ? `<div class="review-list">${wrong.map(({q,i}) => renderReviewItem(q, answers[i], i, false)).join('')}</div>` : '<div class="empty-state"><strong>Nenhum erro nesta tentativa.</strong>Excelente domínio do conteúdo registrado.</div>'}</section><section class="result-panel"><h2>Questões não respondidas</h2><p class="panel-sub">Estas questões não entram como erro, mas você pode revisitá-las em uma nova tentativa.</p>${unanswered.length ? `<div class="review-list">${unanswered.map(({q,i}) => renderReviewItem(q, null, i, true)).join('')}</div>` : '<div class="empty-state"><strong>Você respondeu tudo.</strong>Não há pendências nesta tentativa.</div>'}</section>`;
  }
  function renderReviewItem(q, selected, index, pending) {
    const selectedText = selected ? `${selected}. ${stripLabel(q.options[LETTERS.indexOf(selected)])}` : 'Não respondida';
    const correctText = `${q.answer}. ${stripLabel(q.options[LETTERS.indexOf(q.answer)])}`;
    return `<article class="review-item ${pending ? 'pending' : 'corrected'}"><h4>Questão ${index + 1}: ${escapeHTML(q.question)}</h4><div class="review-row"><span><strong>Sua resposta:</strong> ${escapeHTML(selectedText)}</span><span><strong>Resposta correta:</strong> ${escapeHTML(correctText)}</span></div><p class="explanation"><strong>Por quê:</strong> ${escapeHTML(q.explanation)}</p></article>`;
  }
  function renderHistory(rec, partial) {
    if (!rec.history?.length) return '';
    return `<section class="result-panel"><h2>Histórico de tentativas</h2><p class="panel-sub">Tentativas concluídas são preservadas para você acompanhar sua evolução.</p><div class="history-list">${rec.history.map((item, i) => `<div class="history-row"><div><strong>Tentativa ${item.attemptNumber || rec.history.length - i}</strong><br><small>${formatDate(item.finishedAt)} · ${item.correct} acertos · ${item.errors} erros</small></div><span class="history-score">${item.score}/100</span></div>`).join('')}</div></section>`;
  }
  function bindResult(lesson, rec, isPartial) {
    document.getElementById('resultHome')?.addEventListener('click', () => { screen='dashboard'; render(); });
    document.getElementById('resultContinue')?.addEventListener('click', () => {
      if (isPartial) { startQuiz(lesson.id); return; }
      rec.current = { answers:Array(lesson.questions.length).fill(null), currentIndex:0, startedAt:new Date().toISOString(), updatedAt:new Date().toISOString() }; persist(); activeLessonId=lesson.id; screen='quiz'; render();
    });
    document.getElementById('partialContinue')?.addEventListener('click', () => startQuiz(lesson.id));
  }

  document.getElementById('brandHome').addEventListener('click', () => { screen='dashboard'; render(); });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('resetData').addEventListener('click', () => {
    if (confirm('Apagar todo o progresso e o histórico local? Esta ação não pode ser desfeita.')) {
      try {
        localStorage.removeItem(STORAGE_KEY);
        storageAvailable = true;
        state=blankState(); screen='dashboard'; render(); showToast('Dados locais apagados.');
      } catch (error) {
        storageAvailable = false;
        console.error('Não foi possível apagar os dados locais.', error);
        updateSavedLabel();
        showToast('Não foi possível apagar os dados. Verifique as permissões do navegador.');
      }
    }
  });
  applyTheme(currentTheme);
  render();
})();
