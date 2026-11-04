const STUDY_SUMMARY_AULA7 = [
  {
    id: 'classificacao-testes',
    title: 'Bugs, erros e falhas',
    intro: 'A aula revisa como um defeito pode aparecer no funcionamento do software e diferencia tipos de erros e bugs observáveis.',
    diagram: 'bug-types',
    topics: [
      {
        title: 'Erro, defeito, bug e falha',
        text: 'A apresentação descreve uma sequência em que uma pessoa comete um erro, esse erro cria um defeito no software e o defeito pode causar uma falha durante a operação. O bug é apresentado como um desvio entre o funcionamento real e o que foi especificado ou esperado. Um defeito representa incapacidade ou ineficiência para atender a requisitos e critérios, podendo impedir a aplicação de executar seu trabalho como esperado.',
        example: 'Em um cadastro de paciente no sistema MV, um dado que não é salvo como especificado pode indicar um defeito; quando essa divergência aparece durante o uso, manifesta-se uma falha observável.'
      },
      {
        title: 'Erros citados no material',
        text: 'A aula enumera erros funcionais, sintáticos, lógicos, de cálculo, no nível de unidade, de integração no nível de sistema e de índice fora do intervalo (out of bounds). Nem todos recebem uma explicação detalhada nos slides; os casos explicados são tratados nos tópicos seguintes.',
        example: 'Ao planejar testes de uma rotina do sistema MV, a lista ajuda a separar problemas de comportamento, cálculo, integração ou limites de entrada, sem presumir que todos tenham a mesma causa.'
      },
      {
        title: 'Bugs funcionais',
        text: 'Relacionam-se ao funcionamento de uma parte do software. Um botão que não envia um formulário, uma pesquisa que não reage à entrada ou um aplicativo que trava são exemplos. A categoria é ampla: uma investigação posterior pode revelar um tipo mais específico de erro por trás do comportamento.',
        example: 'No sistema MV, se a ação de salvar um cadastro é acionada e os dados não são gravados como previsto, há um comportamento funcional incorreto a investigar.'
      },
      {
        title: 'Como confirmar um bug funcional',
        text: 'É preciso verificar se a funcionalidade foi projetada de maneira diferente ou se está realmente quebrada. Teste-a isoladamente e em combinação com outras funções, considere a intenção do cliente e reúna evidências de que o comportamento contraria o esperado. O fato de uma loja funcionar diferente de outras não prova, sozinho, que há um bug.',
        example: 'Se uma busca do sistema MV apresentar uma ordem de resultados diferente da de outro sistema, compare-a com os requisitos definidos para esse produto antes de registrar defeito.'
      },
      {
        title: 'Bugs de conteúdo',
        text: 'Afetam o conteúdo apresentado: textos, rótulos, imagens, vídeos, ícones, links ou dados. Exemplos incluem links e imagens quebrados, redirecionamentos defeituosos, texto ou conteúdo ausente, dicas vazias, traduções faltantes, produtos que não aparecem apesar de a busca funcionar e dados ausentes.',
        example: 'Em uma tela didática do sistema MV, um link de manual que leva a uma página inexistente é um problema de conteúdo; se a busca funciona, mas um registro esperado está ausente, o problema pode estar nos dados exibidos.'
      },
      {
        title: 'Bugs visuais',
        text: 'São problemas gráficos de apresentação, como textos ou imagens maiores que suas caixas, campos de entrada estreitos demais para mostrar o texto padrão e elementos que se sobrepõem a outras partes da página.',
        example: 'Se um rótulo de um formulário do sistema MV fica cortado ou cobre outro campo, o defeito observado é visual, mesmo que a operação do formulário continue funcionando.'
      },
      {
        title: 'Erros sintáticos',
        text: 'Acontecem no código-fonte e podem impedir a compilação correta. Caracteres ausentes ou incorretos, como um parêntese não fechado, são exemplos. A compilação normalmente indica onde o erro sintático está para que seja corrigido.',
        example: 'Uma alteração no código de uma tela do sistema MV que deixe um parêntese sem fechamento pode impedir a compilação antes de a funcionalidade chegar aos testes de uso.'
      },
      {
        title: 'Erros de cálculo',
        text: 'Ocorrem quando o software retorna um valor incorreto, seja para exibição ao usuário, seja para repasse a outro programa. As causas citadas são algoritmo inadequado, incompatibilidade entre tipos de dados e implementação incorreta do cálculo ou do repasse. Em contextos como aplicações bancárias, o impacto financeiro pode ser elevado.',
        example: 'Em um cenário didático do sistema MV, se um cálculo de total apresenta um valor diferente do esperado, investigue o algoritmo, os tipos de dados e a forma como o resultado é repassado.'
      },
      {
        title: 'Erros de integração no nível do sistema',
        text: 'Acontecem quando duas ou mais partes de subsistemas interagem incorretamente. Partes feitas por desenvolvedores diferentes podem interpretar requisitos de modos distintos ou deixar passar detalhes. A investigação tende a ser mais difícil porque envolve mais de uma parte, aumenta a complexidade e reduz a visibilidade geral.',
        example: 'Se um cadastro do sistema MV envia dados para outro subsistema e a informação chega divergente, o problema pode estar na interação entre componentes, não em uma tela isolada.'
      },
      {
        title: 'Índice fora do intervalo (out of bounds)',
        text: 'Pode surgir quando uma interação inesperada fornece parâmetro fora dos limites previstos, como valor muito maior ou menor do que o intervalo codificado, ou um tipo de dado inesperado, como texto onde se esperava número. Em alguns casos, isso pode exigir mais cálculos do que a solução foi desenvolvida para suportar.',
        example: 'Em um campo numérico didático do sistema MV, testar valores acima ou abaixo do intervalo especificado e texto inesperado ajuda a observar se a aplicação lida com esses limites conforme o esperado.'
      }
    ]
  },
  {
    id: 'ciclo-vida',
    title: 'Severidade, prioridade e ordem de correção',
    intro: 'Severidade descreve o impacto do defeito; prioridade expressa a urgência de correção segundo a necessidade do negócio. Os critérios se relacionam, mas não são sinônimos.',
    diagram: 'severity-priority',
    topics: [
      {
        title: 'Severidade: intensidade do impacto',
        text: 'A severidade representa o grau de impacto de um defeito sobre o software ou seu funcionamento. A aula usa os níveis S1 (crítica ou show stopper), S2 (grave), S3 (moderada) e S4 (pequena).',
        example: 'Ao avaliar um defeito no sistema MV, classifique primeiro o efeito que ele causa na funcionalidade e nos fluxos, antes de decidir quando corrigir.'
      },
      {
        title: 'S1 — crítica ou show stopper',
        text: 'Pode bloquear o teste de uma função, causar falha nos principais casos de uso, envolver segurança, ocultar uma funcionalidade esperada da versão, provocar perda grave de dados ou bloquear uma versão. Um botão que impede totalmente o uso de uma funcionalidade também aparece como exemplo.',
        example: 'Se uma falha no sistema MV impede acessar uma funcionalidade central ou provoca perda grave de dados, o impacto descrito corresponde ao nível crítico.'
      },
      {
        title: 'S2 — grave',
        text: 'Abrange funcionalidades que funcionam mal, entradas esperadas que causam falhas ou efeitos indesejados e entradas incomuns que provocam efeitos irreversíveis.',
        example: 'Se uma entrada esperada no cadastro do sistema MV provoca um efeito indesejado importante, avalie o caso como grave, mesmo que outros fluxos ainda estejam disponíveis.'
      },
      {
        title: 'S3 — moderada',
        text: 'A funcionalidade não atende a alguns critérios de aceitação, mas continua funcionando em geral. Exemplos: mensagem de erro ou sucesso não exibida e efeitos indesejados diante de entradas incomuns, mas contornáveis.',
        example: 'Se uma mensagem de confirmação não aparece após uma ação no sistema MV, mas a operação funciona e pode ser verificada por outro caminho, o impacto pode se enquadrar como moderado.'
      },
      {
        title: 'S4 — pequena',
        text: 'Tem quase nenhum impacto na funcionalidade, mas ainda é um erro válido. Erros ortográficos e pequenas falhas de interface são exemplos apresentados.',
        example: 'Um erro ortográfico em uma tela secundária do sistema MV, sem impacto na operação, ilustra um defeito pequeno que ainda deve ser registrado.'
      },
      {
        title: 'Prioridade: urgência de correção',
        text: 'A prioridade representa a perspectiva do negócio sobre quais bugs devem ser corrigidos primeiro e quais podem aguardar, considerando necessidades e demandas atuais. A aula apresenta P1 (crítica), P2 (alta), P3 (média) e P4 (baixa).',
        example: 'Dois defeitos no sistema MV podem ter impactos diferentes e prazos de correção diferentes; priorize considerando a demanda e o momento do negócio.'
      },
      {
        title: 'P1 — crítica e P2 — alta',
        text: 'P1 deve ser resolvida imediatamente. O material cita defeitos S1 encontrados em produção e problemas de interface que afetam a experiência. P2 inclui funcionalidade inutilizável como deveria por problema no código, configuração de dependências, detalhes não levantados durante o desenvolvimento e prazos do projeto.',
        example: 'Uma falha crítica do sistema MV encontrada em produção pode demandar correção imediata; uma dependência mal configurada que impede o uso correto de uma função pode receber prioridade alta.'
      },
      {
        title: 'P3 — média e P4 — baixa',
        text: 'P3 pode ser avaliada para um ciclo futuro, dependendo dos recursos disponíveis; a aula também cita efeitos indesejados causados por entradas incomuns ou inexistentes no ambiente do usuário. P4 abrange erros que não afetam a funcionalidade, pequenas melhorias de interface ou experiência e erros de digitação.',
        example: 'Uma melhoria visual não essencial no sistema MV pode aguardar recursos, enquanto um efeito de uma entrada incomum deve ser analisado considerando o ambiente real e a disponibilidade para correção.'
      },
      {
        title: 'Matriz de severidade e prioridade',
        text: 'A matriz combina os dois critérios para orientar a ordem de correção. Baixa severidade e baixa prioridade afetam poucos clientes e não prejudicam fluxos principais; baixa severidade e alta prioridade merecem correção sem interromper a função central; alta severidade e baixa prioridade podem atingir poucas circunstâncias; alta severidade e alta prioridade afetam muitos usuários, interrompem serviços ou fluxos importantes.',
        example: 'Uma falha visual no checkout didático do sistema MV, sem impedir a ação, pode ter baixa severidade e urgência alta; um bloqueio de compra apenas em um sistema operacional antigo pode ser grave para um grupo restrito.'
      },
      {
        title: 'Classificar e revisar os bugs',
        text: 'A matriz ajuda a decidir a ordem de correção e a classificar bugs em níveis de 1 a 4 ou em alto, médio e baixo. A classificação pode ocorrer quando o bug é criado ou em reunião periódica da equipe, depois que os novos relatos são priorizados.',
        example: 'A equipe do exemplo MV pode registrar severidade e prioridade ao abrir um bug e revisá-las em reunião quando o impacto, a demanda ou os recursos disponíveis mudarem.'
      }
    ]
  },
  {
    id: 'tdd',
    title: 'Estratégia de testes e boas práticas',
    intro: 'Uma estratégia define objetivos, escopo e critérios, orienta a escolha de técnicas e casos e é ajustada a partir da análise dos resultados.',
    diagram: 'test-strategy',
    topics: [
      {
        title: 'Definir objetivos e resultados aceitáveis',
        text: 'Antes de testar, esclareça quais aspectos do software serão avaliados, quais métricas serão usadas para avaliar qualidade e quais resultados serão considerados aceitáveis.',
        example: 'Para uma mudança no sistema MV, a equipe pode explicitar qual comportamento será observado e qual resultado dos testes será aceito, conforme os requisitos do projeto.'
      },
      {
        title: 'Identificar requisitos e escopo do teste',
        text: 'Determine os requisitos que serão testados, as funcionalidades incluídas, os cenários cobertos e os critérios de aceitação que indicarão se o software está funcionando corretamente.',
        example: 'Em uma alteração de cadastro do sistema MV, delimite quais campos e cenários pertencem ao teste e quais resultados satisfazem os critérios definidos.'
      },
      {
        title: 'Escolher técnicas e ferramentas adequadas',
        text: 'Selecione técnicas e ferramentas considerando o projeto, a complexidade do sistema, os prazos e os recursos disponíveis. Testes funcionais, de desempenho e de segurança são exemplos citados.',
        example: 'Para avaliar uma mudança do sistema MV, escolha a técnica compatível com o objetivo e com os recursos e prazos disponíveis, em vez de selecionar uma ferramenta sem relação com o escopo.'
      },
      {
        title: 'Criar casos de teste',
        text: 'Os casos devem derivar dos requisitos e funcionalidades definidos. Cada um precisa descrever com clareza o cenário, os passos a seguir e os resultados esperados.',
        example: 'Um caso para o sistema MV pode registrar os dados de entrada de um cadastro, a sequência de ações e o resultado que deve ser observado.'
      },
      {
        title: 'Analisar e documentar resultados',
        text: 'Analise os resultados para identificar padrões de falhas, pontos fracos e oportunidades de melhoria. Use as conclusões para ajustar a estratégia e tornar o esforço de teste mais eficiente.',
        example: 'Se vários testes de uma tela do sistema MV revelam falhas no mesmo tipo de entrada, documente o padrão e reavalie a estratégia para cobrir melhor esse ponto.'
      },
      {
        title: 'Começar cedo e automatizar quando possível',
        text: 'Iniciar os testes no começo do desenvolvimento ajuda a encontrar erros cedo e ajustar o processo. A automação pode economizar tempo e recursos; identifique quais testes podem ser automatizados e providencie as ferramentas necessárias.',
        example: 'Durante o desenvolvimento de uma funcionalidade didática do sistema MV, testes podem começar assim que os requisitos forem definidos; verificações repetitivas podem ser consideradas para automação.'
      },
      {
        title: 'Adotar uma abordagem abrangente',
        text: 'A estratégia deve considerar todos os aspectos relevantes do software, incluindo funcionalidade, interface do usuário, desempenho e segurança.',
        example: 'Para uma tela do sistema MV, avaliar apenas se o botão funciona deixa de fora a interface, o desempenho e a segurança que também podem integrar o escopo.'
      },
      {
        title: 'Testar em cenários e comunicar-se com a equipe',
        text: 'Verifique o funcionamento em diferentes sistemas operacionais, navegadores e dispositivos. Mantenha comunicação aberta e frequente com a equipe de desenvolvimento para que erros sejam corrigidos e melhorias implementadas.',
        example: 'Se o sistema MV for usado em navegadores ou dispositivos diferentes, os cenários selecionados devem refletir esse escopo e os achados precisam chegar à equipe responsável.'
      }
    ]
  },
  {
    id: 'manual-automatizado',
    title: 'Plano de teste: finalidade, origem e identificação',
    intro: 'O plano registra como a verificação e a validação serão organizadas. Seu conteúdo deve derivar dos requisitos e do projeto do sistema.',
    diagram: 'test-plan',
    topics: [
      {
        title: 'Planejar verificação e validação desde o início',
        text: 'O planejamento deve começar no início do desenvolvimento. O plano de teste deriva da especificação e do projeto do sistema, e organiza as decisões e procedimentos de verificação e validação.',
        example: 'Para um novo módulo didático do sistema MV, a equipe começa a planejar os testes junto ao desenvolvimento e usa a especificação e o projeto como base.'
      },
      {
        title: 'Equilibrar abordagens estáticas e dinâmicas',
        text: 'O planejamento decide o equilíbrio entre abordagens estáticas e dinâmicas, especifica padrões e procedimentos para inspeções e testes, orienta inspeções de programa e define o plano de teste de software.',
        example: 'No plano do sistema MV, a equipe documenta como combinar inspeções e testes executados, respeitando o projeto e os procedimentos que definiu.'
      },
      {
        title: 'Descrever o projeto e identificar documentos',
        text: 'A identificação do projeto reúne documentos como especificação de requisitos, plano de projeto, modelo de análise, documento de arquitetura, protótipo, manual do usuário e lista de riscos. O modelo apresentado registra se cada item foi criado ou está disponível e se foi recebido ou revisado. Um breve texto contextual sobre o software também é recomendado.',
        example: 'O plano didático do sistema MV pode listar quais desses documentos existem, quais foram recebidos ou revisados e incluir uma descrição curta do software em teste.'
      },
      {
        title: 'Definir objetivos e escopo do plano',
        text: 'Os objetivos registram o que o plano de teste pretende atender. O escopo descreve a abrangência do documento, os projetos associados e o que mais pode ser afetado ou influenciado por ele.',
        example: 'Um plano do sistema MV pode indicar que testa uma mudança específica e delimitar quais áreas do projeto são afetadas por essa mudança.'
      },
      {
        title: 'Escopo do projeto e escopo do produto',
        text: 'A aula diferencia escopo do projeto, que responde “como” e corresponde ao trabalho necessário para construir o projeto, de escopo do produto, que responde “o que” e reúne características funcionais para construir o produto.',
        example: 'No exemplo do sistema MV, as atividades necessárias para construir uma alteração pertencem ao escopo do projeto; as características funcionais esperadas pertencem ao escopo do produto.'
      },
      {
        title: 'Histórico de revisões e changelog',
        text: 'O histórico registra data, versão, descrição e autor(a), além do estado atual do documento. Cada revisão deve ser atualizada como um log; também é interessante manter um changelog para saber o que mudou entre versões.',
        example: 'Quando o plano do sistema MV muda, a equipe registra a data, a versão, a descrição da mudança e a autoria, para que alterações anteriores possam ser identificadas.'
      }
    ]
  },
  {
    id: 'automacao',
    title: 'Categorias de teste e níveis',
    intro: 'O plano pode descrever diferentes categorias e níveis. A escolha de cada categoria depende do contexto geral do projeto.',
    diagram: 'test-levels',
    topics: [
      {
        title: 'Categorias conforme o contexto do projeto',
        text: 'O plano descreve técnicas considerando diferentes categorias de teste, cuja utilização depende do contexto geral do projeto. Para cada técnica, o modelo pede: técnica utilizada, objetivo, estratégias, ferramentas utilizadas, critérios de êxito e considerações especiais.',
        example: 'No plano didático do sistema MV, cada categoria escolhida deve ter objetivo, estratégia, ferramentas, critério de êxito e considerações adequados ao projeto.'
      },
      {
        title: 'Teste unitário',
        text: 'Concentra-se na verificação da menor unidade de software. Essa unidade é caracterizada por estímulos, como chamadas de métodos, e por entradas e saídas de dados, como parâmetros e valores de retorno.',
        example: 'Uma rotina isolada do sistema MV pode receber parâmetros definidos e ter seu valor de retorno conferido sem avaliar ainda a integração com outros componentes.'
      },
      {
        title: 'Teste de integração',
        text: 'Descreve o roteiro para testar componentes integrados — unidades e interfaces — de modo a operacionalizar o serviço do sistema.',
        example: 'No exemplo do sistema MV, um teste de integração verifica se uma unidade entrega corretamente os dados à interface ou ao componente com o qual precisa operar.'
      },
      {
        title: 'Teste de segurança',
        text: 'Testa os mecanismos de proteção incorporados ao sistema, considerando critérios de permissão de acesso e integridade dos dados.',
        example: 'Um caso didático do sistema MV pode verificar se os acessos previstos respeitam as permissões definidas e se os dados mantêm sua integridade.'
      },
      {
        title: 'Teste de desempenho',
        text: 'Descreve o roteiro para testar o desempenho do sistema considerando o contexto de integração e utilização.',
        example: 'Ao planejar um teste de desempenho para o sistema MV, registre o contexto de integração e de utilização em que o comportamento será observado.'
      },
      {
        title: 'Teste de stress',
        text: 'Avalia o desempenho em situações anormais que exigem uso excessivo de recursos, frequência ou volume de utilização anormais.',
        example: 'Um cenário de stress do sistema MV pode observar seu comportamento diante de um volume ou frequência anormais definidos para o teste.'
      },
      {
        title: 'Teste de tolerância a falhas',
        text: 'Descreve como testar desempenho e segurança da informação diante de falhas de recursos, ataques voluntários ou involuntários e situações de risco imprevisíveis.',
        example: 'No exemplo didático do sistema MV, o plano pode prever como observar a integridade dos dados quando houver uma falha de recurso durante a execução.'
      },
      {
        title: 'Teste de configuração',
        text: 'Verifica o funcionamento em diferentes configurações de software e hardware. Podem variar as estações de trabalho, conexões de rede, servidores de banco de dados, aplicativos, drivers e combinações de recursos ativos.',
        example: 'Um plano para o sistema MV pode indicar as configurações de estação, rede, servidor, aplicativos e drivers em que o funcionamento será avaliado.'
      },
      {
        title: 'Requisitos de teste no exemplo de plano',
        text: 'O exemplo de plano lista testes de banco de dados, funcionais, do ciclo de negócios, da interface do usuário, perfil de performance, carga, stress, segurança e controle de acesso, falha e recuperação e instalação. Essa lista mostra itens que podem ser previstos; a seleção depende do contexto do projeto.',
        example: 'Para uma mudança no sistema MV, a equipe seleciona da lista os requisitos de teste relacionados ao escopo, sem assumir que todos são necessários em qualquer projeto.'
      },
      {
        title: 'Quatro níveis de teste',
        text: 'A aula relembra quatro níveis: unidade, integração, sistema e aceitação. O diagrama relaciona requisitos, análise, arquitetura e código aos níveis, que organizam a verificação ao longo do desenvolvimento.',
        example: 'Em um exemplo do sistema MV, uma verificação pode começar em uma unidade, seguir para componentes integrados, avaliar o sistema e chegar à aceitação conforme o escopo previsto.'
      }
    ]
  },
  {
    id: 'ferramentas-complementos',
    title: 'Atividades e gerenciamento do plano',
    intro: 'Além de escolher categorias, o plano descreve fluxo, calendário, responsáveis e procedimentos para acompanhar sua execução.',
    diagram: 'test-management',
    topics: [
      {
        title: 'Atividades e fluxo de trabalho',
        text: 'Estabeleça as atividades necessárias para concluir o processo de teste em cada categoria e descreva o fluxo de trabalho dessas atividades.',
        example: 'Para cada categoria prevista no sistema MV, o plano pode registrar a sequência de atividades necessária para concluir o teste.'
      },
      {
        title: 'Cronograma das atividades',
        text: 'Estime marcos e prazos relacionados às atividades de teste. O exemplo de plano também solicita um cronograma detalhado.',
        example: 'No plano do sistema MV, associe marcos e prazos às atividades selecionadas e mantenha o cronograma detalhado.'
      },
      {
        title: 'Responsáveis, recursos e entregáveis',
        text: 'Defina quem executará as atividades e quais artefatos e produtos deverão ser concluídos e entregues. O exemplo de plano lista recursos como trabalhadores e sistemas.',
        example: 'Para uma atividade do sistema MV, registre a pessoa ou equipe responsável, os sistemas necessários e os artefatos que serão entregues.'
      },
      {
        title: 'Gerenciamento do plano de teste',
        text: 'O plano de gerenciamento pode definir funcionalidades, desempenho, capacidade, medidas e objetivos de qualidade e metodologias de avaliação.',
        example: 'No exemplo do sistema MV, registre quais medidas e objetivos de qualidade serão usados e como os resultados serão avaliados.'
      },
      {
        title: 'Procedimentos para problemas',
        text: 'Resuma os processos e procedimentos a usar quando surgirem problemas no plano de teste ou em sua execução.',
        example: 'Se uma atividade planejada para o sistema MV não puder ser executada como previsto, o documento deve indicar o processo a seguir para tratar o problema.'
      },
      {
        title: 'Avaliação e restrições',
        text: 'Liste as restrições do esforço de teste que tiveram efeito negativo sobre a forma como o plano foi elaborado. A avaliação registra limitações relevantes para compreender a abordagem adotada.',
        example: 'Se prazo ou recursos limitaram os testes do sistema MV, documente a restrição e como ela afetou o plano, em vez de omitir esse contexto.'
      }
    ]
  }
];

const STUDY_SUMMARIES = {
  'aula-01': STUDY_SUMMARY,
  'aula-02': STUDY_SUMMARY_AULA7
};
