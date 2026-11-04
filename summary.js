// Resumo da Aula 6, organizado por categoria e assunto, com exemplos didaticos de um sistema MV.
const STUDY_SUMMARY = [
  {
    id: 'classificacao-testes',
    title: 'Classificação e tipos de teste',
    intro: 'As técnicas de transparência se distinguem pelo que examinam no sistema. Outros tipos de teste se diferenciam pelo objetivo da avaliação.',
    diagram: 'transparency',
    topics: [
      {
        title: 'Transparência: caixa branca, caixa preta e caixa cinza',
        text: 'A caixa branca, também chamada de teste orientado à lógica ou estrutural, utiliza o código-fonte e a estrutura interna para avaliar componentes. Pode examinar fluxo de dados, condições e ciclos, e selecionar partes de um componente para investigar seu comportamento. Sua implementação deve considerar criticidade, complexidade, estrutura e nível de qualidade pretendido, incluindo confiança e segurança. Os níveis associados no material são testes de unidade e teste estático.',
        example: 'Em uma rotina de cadastro de paciente, uma análise de caixa branca poderia examinar as condições internas que verificam se os campos obrigatórios foram preenchidos. O foco é como o programa executa essa verificação.'
      },
      {
        title: 'Caixa preta: funções, entradas e saídas',
        text: 'Também chamada de técnica funcional, verifica os requisitos e as ações que o sistema deve desempenhar, sem observar seu modo interno de funcionamento. Comparam-se entradas com as saídas esperadas de acordo com a especificação. Os níveis associados no material são integração, sistema, aceitação, alfa e beta. Os slides também mencionam métodos, classes, comandos de repetição e condições ao descrever esses testes, e os resumem como testes de entrada e saída.',
        example: 'No cadastro de um paciente em um sistema MV, pode-se informar uma data de nascimento futura e conferir se o sistema a rejeita, deixar vazio um campo obrigatório, tentar usar um valor negativo onde não deveria ser permitido ou verificar se um botão executa a ação indicada. O avaliador confere o resultado sem consultar o código.'
      },
      {
        title: 'Caixa cinza: combinação das perspectivas',
        text: 'Combina caixa branca e caixa preta: analisa a lógica interna e a funcionalidade externa, comparando o que foi especificado com o que o sistema efetivamente realiza. Pode utilizar engenharia reversa.',
        example: 'Em uma consulta ou cadastro no sistema MV, o avaliador poderia conferir o resultado apresentado e também examinar a lógica interna usada para produzi-lo, comparando ambos com a especificação.'
      },
      {
        title: 'Carga, usabilidade e stress',
        text: 'O teste de carga avalia os limites de uso do software, como o volume de informações e o tráfego que suporta sem apresentar erros. O teste de usabilidade utiliza um pequeno grupo de usuários para avaliar se o software atende às necessidades, observar dificuldades e ouvir impressões; estas devem ser confrontadas com as observações do avaliador. O teste de stress leva o software aos limites de potência e funcionamento, para mais ou para menos, para identificar em que ponto deixa de funcionar adequadamente e verificar os limites máximos ou mínimos especificados.',
        example: 'Em um cenário de uso do sistema MV, um teste de carga poderia observar o comportamento diante de muitos acessos ou registros; um teste de usabilidade acompanharia profissionais realizando uma tarefa e registraria onde encontram dificuldade; um teste de stress investigaria os limites de funcionamento para mais ou para menos.'
      },
      {
        title: 'Alfa, beta e regressão',
        text: 'O teste alfa é semelhante ao teste de aceitação: o sistema é disponibilizado de forma não planejada a um grupo pequeno de pessoas que participa do projeto e fornece feedback sobre seu estado atual. É frequentemente usado em sistemas de prateleira como aceitação interna. O teste beta também ocorre de forma não planejada, mas envolve um grande número de pessoas desconhecidas e sem relação com a equipe ou empresa desenvolvedora; em sistemas de prateleira, pode servir como aceitação externa e avaliar o feedback do mercado. O teste de regressão é realizado a cada versão em que funcionalidades são modificadas para evitar que erros corrigidos anteriormente voltem a aparecer.',
        example: 'Antes da disponibilização de uma versão de um sistema MV, um pequeno grupo ligado ao projeto poderia participar de uma avaliação alfa; pessoas externas à equipe poderiam participar de um beta. Depois de alterar uma validação, um teste de regressão conferiria se os casos que já funcionavam continuam funcionando.'
      },
      {
        title: 'Diferenças entre os tipos de teste',
        text: 'Carga mede o volume de uso suportado sem erros; stress força os limites para verificar quando o funcionamento deixa de ser adequado. Usabilidade observa a interação e as dificuldades de usuários. Alfa é associado a um pequeno grupo ligado ao projeto e à aceitação interna; beta, a muitas pessoas externas e à aceitação externa. Regressão verifica se mudanças reintroduziram erros já corrigidos.',
        example: 'Se uma alteração no cadastro de pacientes do sistema MV for feita, regressão significa voltar a executar testes relevantes para verificar se validações que já funcionavam não foram prejudicadas.'
      }
    ]
  },
  {
    id: 'ciclo-vida',
    title: 'Organização do trabalho de teste',
    intro: 'O ciclo de vida organiza o trabalho desde a estratégia até a finalização do projeto e o arquivamento da documentação.',
    diagram: 'lifecycle',
    topics: [
      { title: 'Planejamento', text: 'Com base nos requisitos, elaboram-se a Estratégia de Teste e o Plano de Teste.', example: 'Para uma mudança no cadastro de pacientes do sistema MV, o planejamento definiria a estratégia e o plano com base nos requisitos dessa mudança.' },
      { title: 'Preparação', text: 'Prepara-se o Ambiente de Teste para realizar os testes conforme planejado. Isso inclui equipamentos, pessoal, ferramentas de automação e massa de testes.', example: 'Antes de testar o cadastro no sistema MV, a equipe prepararia o ambiente, os dados de teste, os equipamentos, as pessoas e as ferramentas necessárias.' },
      { title: 'Especificação', text: 'Elaboram-se ou revisam-se os casos de teste e os roteiros de teste.', example: 'Um caso de teste poderia registrar os dados de entrada e o resultado esperado ao deixar vazio um campo obrigatório.' },
      { title: 'Execução', text: 'Os testes são executados e os resultados obtidos são registrados.', example: 'O testador executaria o roteiro no ambiente preparado e registraria se o sistema MV apresentou o resultado esperado.' },
      { title: 'Entrega', text: 'É a última fase do ciclo de vida: o projeto é finalizado, e toda a documentação é finalizada e arquivada.', example: 'Ao encerrar a atividade de teste da mudança, a equipe finalizaria e arquivaria a documentação produzida.' }
    ]
  },
  {
    id: 'tdd',
    title: 'Desenvolvimento orientado a testes (TDD)',
    intro: 'Test Driven Development significa desenvolvimento orientado a testes. Os testes são criados antes do código de cada funcionalidade, em ciclos conhecidos como Red, Green, Refactor.',
    diagram: 'tdd',
    topics: [
      {
        title: 'Red: escrever primeiro o teste',
        text: 'A fase vermelha inicia o ciclo. Escreve-se e executa-se um teste que informa o que se espera da funcionalidade; inicialmente, ele falha porque o comportamento ainda não foi implementado. O teste só será aprovado quando suas expectativas forem atendidas.',
        example: 'O material usa sortArray: para a entrada [2, 4, 1], o teste espera a saída [1, 2, 4]. Em um cenário didático do sistema MV, um teste poderia registrar que uma data de nascimento futura deve ser rejeitada.'
      },
      {
        title: 'Green: implementar para passar',
        text: 'Implementa-se o código para atender ao teste. O objetivo é encontrar uma solução funcional, sem se preocupar em otimizar a implementação neste momento.',
        example: 'Para a validação de data no sistema MV, a implementação seria feita até que o teste confirmasse a rejeição esperada.'
      },
      {
        title: 'Refactor: melhorar sem quebrar o teste',
        text: 'Quando o teste passa, melhora-se, ajusta-se ou otimiza-se o código existente. A cada alteração, o teste deve continuar passando para assegurar que o comportamento planejado não foi quebrado. Pode-se buscar a mesma saída com código mais descritivo ou mais rápido.',
        example: 'Depois de validar a regra de data no sistema MV, seria possível reorganizar sua implementação e executar novamente o teste para confirmar que a regra continua funcionando.'
      },
      {
        title: 'Exemplo sortArray e observação sobre MC-FIRE',
        text: 'No exemplo sortArray, a solução apresentada percorre o array com um loop e move o número atual se for maior que o número à direita. Há um loop dentro de outro até que os valores estejam ordenados, como em [3, 4, 5, 6, 2, 1]. Na refatoração, a aula identifica a solução como bubble sort e observa que não é um método particularmente rápido. Para refatorar um conjunto de testes, recomenda considerar as características de um bom teste, chamadas MC-FIRE, mas não explica os componentes dessa sigla.'
      },
      {
        title: 'Benefícios do TDD apresentados na aula',
        text: 'Segurança para realizar modificações e feedback rápido sobre problemas durante refatorações; menos bugs, reduzindo o tempo de depuração e correção; correção mais completa dos bugs encontrados; código mais simples e melhor escrito; e documentação atualizada sobre cada parte do sistema.',
        example: 'Se uma alteração em uma rotina do sistema MV quebrar o comportamento já verificado, a execução do teste pode dar retorno rápido para a equipe.'
      }
    ]
  },
  {
    id: 'manual-automatizado',
    title: 'Testes manuais e automatizados',
    intro: 'Os dois modos ajudam a verificar o software, mas têm usos, vantagens e limitações diferentes. A escolha depende do tipo de avaliação e do contexto.',
    topics: [
      {
        title: 'Teste manual: definição e indicações',
        text: 'Uma pessoa executa o teste e verifica se o aplicativo funciona segundo as condições descritas nos casos de teste. O testador avalia design, funcionalidade e desempenho. O material o recomenda para testes exploratórios, de usabilidade e de aceite, e quando não é possível implementar um teste automatizado.',
        example: 'Um testador poderia percorrer manualmente uma rotina do sistema MV, observar a aparência das telas e perceber dificuldades que surgem durante o uso.'
      },
      {
        title: 'Vantagens e limitações do teste manual',
        text: 'Vantagens: pode reproduzir condições semelhantes às de produção; pode identificar problemas visuais e de usabilidade que testes automatizados não identificam; exige baixo investimento e não depende de ferramentas caras ou habilidades de alto nível. Limitações: é lento, existe maior possibilidade de um bug passar despercebido devido à interação humana, e não é adequado para carga e desempenho.'
      },
      {
        title: 'Teste automatizado: definição e indicações',
        text: 'São testes programados para execução automática. Ferramentas, scripts e softwares comparam os resultados reais com os esperados e ajudam a verificar se o software apresenta o desempenho esperado. São recomendados para testes de regressão, carga e performance.',
        example: 'Depois de alterar um campo no sistema MV, um script poderia repetir a conferência de que uma entrada inválida continua sendo recusada.'
      },
      {
        title: 'Vantagens e limitações do teste automatizado',
        text: 'Vantagens: execução mais rápida e considerada mais confiável por ser realizada com ferramentas ou scripts; boa adequação a testes de carga e desempenho. Limitações: desenvolver os testes pode levar mais tempo; cada tipo e fase pode exigir uma ferramenta e conhecimento próprios; o custo pode ser maior dependendo da automação e da infraestrutura necessária; não identifica problemas de usabilidade.'
      },
      {
        title: 'Como escolher entre os dois',
        text: 'O teste manual atende bem à exploração, usabilidade, aceite e à avaliação de aspectos visuais. A automação atende bem a verificações repetidas, regressão, carga e desempenho. A automação não elimina o teste manual, pois não substitui a observação e o julgamento humano.'
      }
    ]
  },
  {
    id: 'automacao',
    title: 'Automação de testes',
    intro: 'Automatizar é atribuir a um dispositivo autonomia para controlar o próprio funcionamento com mínima interferência humana. Em testes de software, uma ferramenta imita a interação do testador com a aplicação.',
    diagram: 'automation',
    topics: [
      {
        title: 'Motivações gerenciais',
        text: 'Na visão gerencial, a automação pode tornar mais independentes entre si as variáveis do triângulo das restrições — escopo, tempo e custo — sem afetar a qualidade do produto a ser entregue.',
        example: 'Em um projeto de sistema MV, a gestão consideraria escopo, tempo e custo ao decidir o que automatizar, sem deixar a qualidade do produto de lado.'
      },
      {
        title: 'Motivações operacionais',
        text: 'Na visão operacional, os testes podem ser executados com a mesma eficiência em menos tempo; tarefas repetitivas podem apresentar uma redução drástica de falhas humanas; e os testadores ficam mais disponíveis para atividades estratégicas.',
        example: 'Uma rotina repetitiva de conferência de campos no sistema MV poderia ser executada por script, enquanto o testador dedica atenção a outras atividades.'
      },
      {
        title: 'O papel humano continua necessário',
        text: 'O teste manual não deve ser eliminado; deve ser reduzido e focado em casos nos quais automatizar seja muito caro ou em que seja necessário julgamento humano. Mesmo que a empresa automatize 99% dos testes, ainda são necessárias pessoas para tarefas inviáveis aos robôs, como manutenção do projeto de teste, pesquisa e documentação de novas estratégias. A apresentação afirma que o robô jamais substituirá um testador.'
      },
      {
        title: 'Princípios para automatizar',
        text: 'Projete os casos de teste antes de automatizá-los. Não tente automatizar 100%: concentre-se nas prioridades. Proteja e organize os scripts para facilitar a revisão. Inicie a automação o mais cedo possível no projeto.',
        example: 'Em uma rotina do sistema MV, primeiro seriam definidos os casos importantes e depois automatizados os prioritários; os scripts seriam mantidos de forma que pudessem ser revisados.'
      }
    ]
  },
  {
    id: 'ferramentas-complementos',
    title: 'Ferramentas e tópicos complementares',
    intro: 'A apresentação sugere ferramentas com diferentes plataformas e finalidades. Esta categoria também registra os assuntos e as leituras que aparecem nos slides finais.',
    topics: [
      {
        title: 'Selenium',
        text: 'Ferramenta gratuita e open source para testes automatizados de aplicações web pelo navegador, incluindo testes de regressão. Oferece recursos de gravação e reprodução. O material cita Java, Perl, JavaScript, PHP, Python, C#, Ruby e Groovy como linguagens que os testadores podem usar.',
        example: 'Se uma tela do sistema MV for acessada pelo navegador, Selenium é apresentado nos slides como ferramenta voltada a testes automatizados de aplicações web.'
      },
      {
        title: 'Ranorex',
        text: 'Ferramenta de automação apresentada como completa, ajustável e fácil de usar para iniciantes, com IDE completo e APIs abertas para especialistas. Suporta testes de ponta a ponta em desktop, web e dispositivos móveis. Possui versão paga e oferece versão de avaliação gratuita.'
      },
      {
        title: 'Robotium',
        text: 'Framework gratuito e popular para automação de testes Android, compatível com aplicações nativas e híbridas. Sua função principal é simular procedimentos normalmente executados por um analista de teste. A aula destaca que facilita a escrita de testes de caixa preta.'
      },
      {
        title: 'Telerik Test Studio',
        text: 'Ferramenta abrangente de automação que também pode ser usada manualmente. Oferece testes funcionais de interface (UI), testes exploratórios e de performance, testes mobile e de carregamento, além de testes no Visual Studio.'
      },
      {
        title: 'Metodologia 5W2H e exemplo com Robotium',
        text: 'A apresentação inclui um slide intitulado “Exemplo de teste com o Robotium” e outro intitulado “Metodologia 5W2H”, mas não descreve o exemplo nem explica os elementos da metodologia no texto dos slides. Para preservar a fidelidade ao material, essas menções são registradas sem acrescentar explicações externas.'
      },
      {
        title: 'Leituras complementares e referências',
        text: 'Para TDD, os slides listam “Test Driven Development”, da Codecademy (codecademy.com/article/tdd-red-green-refactor), e um artigo da OneDayTesting (blog.onedaytesting.com.br/test-driven-development). Como leituras complementares, indicam “Testes Automatizados”, da Auditeste (auditeste.com.br/testes-automatizados), e “5 ferramentas para gestão de testes de software”, da Vericode (blog.vericode.com.br/5-ferramentas-testes-de-software). A apresentação termina com agradecimento e votos de bons estudos.'
      }
    ]
  }
];
