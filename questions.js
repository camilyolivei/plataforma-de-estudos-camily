// Banco modular da Aula 01 — baseado exclusivamente no PDF AULA 6 - Tipos de teste.pdf.
const QUESTION_BANK = {
  "lessons": [
    {
      "id": "aula-01",
      "number": "01",
      "title": "Tipos de teste",
      "subtitle": "Análise de Sistemas · Aula 6",
      "source": "AULA 6 - Tipos de teste.pdf",
      "questions": [
        {
          "question": "1. Uma equipe precisa investigar por que determinadas combinações de condições e ciclos produzem um comportamento incorreto. Ela dispõe do código-fonte e pretende selecionar partes específicas de um componente. Qual abordagem corresponde mais diretamente a esse objetivo?",
          "options": [
            "A. Caixa preta, porque a seleção de trechos internos decorre da comparação entre entradas e saídas.",
            "B. Usabilidade, porque dificuldades em condições e ciclos devem ser observadas pelos usuários.",
            "C. Caixa branca, porque permite examinar a estrutura interna e localizar precisamente comportamentos.",
            "D. Beta, porque pessoas externas podem identificar os caminhos internos mais críticos.",
            "E. Carga, porque qualquer investigação de ciclos exige aumentar o volume de informações."
          ],
          "answer": "C",
          "explanation": "A caixa branca utiliza o código-fonte e permite selecionar partes específicas de um componente para avaliar sua estrutura. Condições, ciclos e fluxo de dados são exemplos de elementos analisáveis. A caixa preta verifica funções e resultados externos, sem investigar o modo interno de funcionamento.",
          "topic": "Transparência — Caixa branca"
        },
        {
          "question": "2. Um avaliador informa uma data de nascimento futura e verifica se o sistema a rejeita conforme a especificação, sem consultar o código. Qual classificação é sustentada pelo procedimento descrito?",
          "options": [
            "A. Caixa preta, pois compara o comportamento externo com os requisitos.",
            "B. Caixa branca, pois datas obrigatoriamente exigem análise de condições internas.",
            "C. Caixa cinza, pois qualquer comparação com requisitos inclui análise estrutural.",
            "D. Teste estático, pois uma data futura não exige execução.",
            "E. Refatoração, pois rejeitar uma entrada melhora a implementação existente."
          ],
          "answer": "A",
          "explanation": "O material apresenta a data de nascimento futura como exemplo de problema rastreável por caixa preta. O critério decisivo é avaliar entrada e saída diante da especificação, sem observar a implementação. A existência provável de condições no código não transforma essa avaliação em caixa branca.",
          "topic": "Transparência — Caixa preta"
        },
        {
          "question": "3. Uma investigação compara entradas e saídas com a especificação e também examina a lógica interna, podendo recorrer à engenharia reversa. Qual técnica representa essa combinação?",
          "options": [
            "A. Caixa preta, porque toda comparação com a especificação exclui análise interna.",
            "B. Caixa branca, porque a análise externa deixa de ter relevância quando há acesso à lógica.",
            "C. Regressão, porque combinar perspectivas implica testar versões anteriores.",
            "D. Aceitação externa, porque a engenharia reversa depende de usuários desconhecidos.",
            "E. Caixa cinza, porque reúne avaliação lógica e funcional."
          ],
          "answer": "E",
          "explanation": "A caixa cinza combina as perspectivas de caixa branca e caixa preta, analisando lógica e funcionalidade. A aula também admite o uso de engenharia reversa nessa técnica. Regressão e aceitação externa dizem respeito a outros objetivos, não à combinação de transparências.",
          "topic": "Transparência — Caixa cinza"
        },
        {
          "question": "4. Antes de implementar testes estruturais, uma equipe decide considerar apenas a quantidade de entradas, ignorando criticidade, complexidade e qualidade pretendida. Qual revisão é mais fiel ao material?",
          "options": [
            "A. Substituir os testes estruturais por beta, pois criticidade só importa na aceitação externa.",
            "B. Considerar criticidade, complexidade, estrutura e nível de qualidade, incluindo confiança e segurança.",
            "C. Manter a decisão, pois caixa branca se limita a contar entradas e saídas.",
            "D. Considerar apenas a aparência visual, pois ela determina a estrutura do programa.",
            "E. Adiar toda avaliação de qualidade para a entrega e o arquivamento."
          ],
          "answer": "B",
          "explanation": "A implementação de caixa branca deve considerar criticidade, complexidade, estrutura e qualidade desejada, envolvendo confiança e segurança. Reduzir a decisão à quantidade de entradas ignora os critérios explicitamente apresentados. A análise estrutural não equivale à inspeção visual ou à aceitação externa.",
          "topic": "Transparência — Critérios da caixa branca"
        },
        {
          "question": "5. Uma empresa deseja reproduzir exatamente a associação entre transparências e níveis apresentada na aula, sem substituí-la por outra classificação. Qual associação está correta?",
          "options": [
            "A. Caixa branca: integração e sistema; caixa preta: unidade e estático.",
            "B. Caixa branca: alfa e beta; caixa preta: unidade e integração.",
            "C. Caixa branca: aceitação e estático; caixa preta: unidade e sistema.",
            "D. Caixa branca: unidade e estático; caixa preta: integração, sistema, aceitação, alfa e beta.",
            "E. Caixa branca: carga e stress; caixa preta: refatoração e preparação."
          ],
          "answer": "D",
          "explanation": "A aula associa caixa branca a testes de unidade e teste estático. Para caixa preta, enumera integração, sistema, aceitação, alfa e beta. A questão exige reproduzir essa associação específica, sem recorrer a classificações externas.",
          "topic": "Transparência — Níveis apresentados"
        },
        {
          "question": "6. Um testador verifica um campo obrigatório vazio, um valor a pagar negativo e um botão que não executa a ação prevista. Que elemento comum justifica tratar essas verificações como caixa preta?",
          "options": [
            "A. A avaliação das ações esperadas da aplicação a partir de entradas e resultados observáveis.",
            "B. A necessidade de percorrer todos os ciclos presentes no código-fonte.",
            "C. A participação obrigatória de um grande grupo externo à empresa.",
            "D. A procura do ponto em que o sistema deixa de funcionar sob condições extremas.",
            "E. A comparação entre diferentes implementações internas do mesmo componente."
          ],
          "answer": "A",
          "explanation": "Os três casos aparecem entre os exemplos de problemas identificáveis por caixa preta. Eles verificam funções, validações e ações esperadas segundo os requisitos. Não dependem de examinar ciclos, envolver participantes externos ou levar o sistema a limites de funcionamento.",
          "topic": "Transparência — Aplicações da caixa preta"
        },
        {
          "question": "7. Uma equipe chama seu teste de caixa cinza apenas porque usa uma ferramenta automatizada. Entretanto, o teste considera exclusivamente entradas e saídas. Qual conclusão é adequada?",
          "options": [
            "A. A classificação está correta, pois toda automação combina lógica e funcionalidade.",
            "B. O teste é necessariamente caixa branca, pois ferramentas são implementadas em código.",
            "C. A automação não basta para caracterizar caixa cinza; faltou analisar também aspectos internos.",
            "D. O teste deve ser beta, pois ferramentas automatizadas representam usuários desconhecidos.",
            "E. Não é possível realizar caixa preta com automação."
          ],
          "answer": "C",
          "explanation": "A transparência depende dos aspectos avaliados, enquanto a automação descreve a forma de execução. Caixa cinza exige combinar análise interna e externa. Executar automaticamente verificações de entrada e saída não demonstra, por si só, análise da lógica interna.",
          "topic": "Transparência — Distinção entre técnica e execução"
        },
        {
          "question": "8. Um relatório usa as expressões 'orientado à lógica', 'estrutural' e 'funcional' como se fossem sinônimas. Qual correção corresponde à aula?",
          "options": [
            "A. As três expressões designam caixa cinza, pois combinam requisitos e implementação.",
            "B. Estrutural designa caixa preta, e funcional designa caixa branca.",
            "C. Orientado à lógica designa stress, e estrutural designa carga.",
            "D. Orientado à lógica e estrutural designam caixa branca; funcional designa caixa preta.",
            "E. Funcional designa exclusivamente teste manual, e estrutural exclusivamente automação."
          ],
          "answer": "D",
          "explanation": "A caixa branca também é denominada teste orientado à lógica ou estrutural. A caixa preta é apresentada como técnica funcional. Esses nomes não determinam execução manual ou automática e não são equivalentes a carga ou stress.",
          "topic": "Transparência — Terminologia"
        },
        {
          "question": "9. Dois testes recebem os mesmos dados. O primeiro compara apenas a saída com a especificação; o segundo inspeciona condições e fluxo de dados do componente. Qual distinção é correta?",
          "options": [
            "A. Ambos são caixa preta, porque utilizam os mesmos dados.",
            "B. O primeiro é caixa preta; o segundo utiliza a perspectiva de caixa branca.",
            "C. O primeiro é caixa branca; o segundo é caixa preta.",
            "D. Ambos são caixa cinza, porque qualquer teste possui entrada e saída.",
            "E. O primeiro é carga; o segundo é stress."
          ],
          "answer": "B",
          "explanation": "Usar os mesmos dados não determina a transparência. O primeiro teste verifica comportamento externo conforme a especificação; o segundo examina elementos internos, característicos da caixa branca. Caixa cinza exigiria reunir as duas perspectivas na avaliação descrita.",
          "topic": "Transparência — Critério de classificação"
        },
        {
          "question": "10. Uma organização possui acesso ao código, mas um avaliador deliberadamente verifica apenas se os botões realizam as funções especificadas. Qual interpretação evita confundir disponibilidade de informação com técnica efetivamente empregada?",
          "options": [
            "A. O teste é caixa branca porque a organização possui o código, ainda que ele não seja analisado.",
            "B. O teste é caixa cinza porque a disponibilidade do código já constitui análise lógica.",
            "C. O teste é estático porque o avaliador não modifica a implementação.",
            "D. O teste é alfa porque avalia funções do produto.",
            "E. O procedimento descrito é caixa preta, pois o foco efetivo está nas funções externas."
          ],
          "answer": "E",
          "explanation": "A caixa preta é definida pelo foco nos requisitos funcionais e nos resultados externos, sem observar o funcionamento interno. A mera disponibilidade do código não significa que ele foi utilizado na avaliação. O procedimento descrito não reúne os dois aspectos exigidos para caixa cinza.",
          "topic": "Transparência — Foco da avaliação"
        },
        {
          "question": "11. Após um botão produzir uma saída incorreta, a equipe decide analisar tanto a ação especificada quanto as condições internas responsáveis por ela. Qual mudança ocorreu na perspectiva da investigação?",
          "options": [
            "A. De caixa preta para exclusivamente teste estático.",
            "B. De uma avaliação externa para uma avaliação combinada de caixa cinza.",
            "C. De caixa branca para beta, pois o resultado passou a ser conhecido.",
            "D. De teste funcional para carga, pois condições representam volume.",
            "E. De execução para entrega, pois a causa será documentada."
          ],
          "answer": "B",
          "explanation": "A investigação deixa de considerar apenas o resultado externo e passa a reunir funcionalidade e lógica interna. Essa mescla caracteriza caixa cinza. Documentar uma causa ou observar uma saída incorreta não transforma a atividade em entrega, beta ou carga.",
          "topic": "Transparência — Combinação de perspectivas"
        },
        {
          "question": "12. Um gerente afirma que caixa preta exige entender como cada método implementa a função antes de conferir o resultado. Qual contestação é mais consistente?",
          "options": [
            "A. A afirmação é correta, pois caixa preta prioriza a estrutura interna.",
            "B. Caixa preta dispensa requisitos e se baseia somente na opinião do testador.",
            "C. Caixa preta exige engenharia reversa para todas as funções.",
            "D. Caixa preta avalia funções e resultados conforme a especificação, sem observar o modo interno de funcionamento.",
            "E. Caixa preta só pode ser usada em testes de stress."
          ],
          "answer": "D",
          "explanation": "A descrição central da caixa preta enfatiza os aspectos externos e os requisitos funcionais. A avaliação verifica se entradas produzem as saídas pretendidas, não como os métodos implementam esse resultado. Exigir inspeção interna altera a perspectiva definida no material.",
          "topic": "Transparência — Requisitos funcionais"
        },
        {
          "question": "13. Um componente crítico demanda busca precisa de comportamentos em trechos selecionados. Qual justificativa sustenta a escolha de caixa branca, sem prometer resultados que a aula não garante?",
          "options": [
            "A. O acesso à estrutura interna permite selecionar partes específicas, considerando criticidade e qualidade pretendida.",
            "B. A técnica elimina integralmente todos os erros antes da execução.",
            "C. A técnica substitui qualquer necessidade de verificar requisitos externos.",
            "D. A técnica permite dispensar confiança e segurança na implementação dos testes.",
            "E. A técnica requer exclusivamente usuários desconhecidos da equipe."
          ],
          "answer": "A",
          "explanation": "A aula atribui à caixa branca acesso à estrutura e possibilidade de selecionar partes específicas de componentes. Também exige considerar criticidade e qualidade desejada. Não afirma eliminação total de erros nem dispensa de outras avaliações.",
          "topic": "Transparência — Seleção estrutural"
        },
        {
          "question": "14. Um avaliador não conhece a implementação de um cadastro. Ele dispõe das regras de preenchimento e quer verificar validações obrigatórias. Qual informação é diretamente suficiente para orientar a técnica indicada?",
          "options": [
            "A. A lista de ciclos internos, para executar exclusivamente caixa branca.",
            "B. O ponto de falha sob tráfego extremo, para executar stress.",
            "C. A origem dos participantes, para distinguir alfa de beta.",
            "D. O plano de arquivamento, para executar entrega.",
            "E. A especificação das funções e resultados esperados, para orientar caixa preta."
          ],
          "answer": "E",
          "explanation": "A caixa preta se baseia nos requisitos da aplicação e compara entradas e saídas com a especificação. Assim, conhecer as regras de preenchimento orienta as validações externas. Informações estruturais ou de participantes responderiam a outras necessidades.",
          "topic": "Transparência — Base da caixa preta"
        },
        {
          "question": "15. Uma equipe realiza três avaliações: I, fluxo de dados no código; II, resposta a valores negativos; III, comparação funcional acompanhada de análise lógica. Qual associação é correta?",
          "options": [
            "A. I: caixa preta; II: caixa cinza; III: caixa branca.",
            "B. I: caixa cinza; II: caixa branca; III: caixa preta.",
            "C. I: caixa branca; II: caixa preta; III: caixa cinza.",
            "D. I: caixa branca; II: caixa cinza; III: caixa preta.",
            "E. I: caixa preta; II: caixa branca; III: caixa cinza."
          ],
          "answer": "C",
          "explanation": "Fluxo de dados é exemplo de aspecto interno analisável por caixa branca. A resposta a valores negativos pode ser verificada externamente por caixa preta. Quando análise lógica e funcional são reunidas, a técnica corresponde à caixa cinza.",
          "topic": "Transparência — Comparação entre técnicas"
        },
        {
          "question": "16. Ao justificar caixa cinza, um analista afirma que a engenharia reversa é obrigatória. Qual ajuste preserva exatamente o alcance apresentado na aula?",
          "options": [
            "A. Engenharia reversa é proibida, pois caixa cinza só avalia entradas.",
            "B. Engenharia reversa substitui necessariamente toda comparação funcional.",
            "C. Engenharia reversa é obrigatória somente quando há testes manuais.",
            "D. Caixa cinza pode utilizar engenharia reversa, mas é definida pela combinação de aspectos internos e externos.",
            "E. Caixa cinza é definida exclusivamente pelo uso de engenharia reversa."
          ],
          "answer": "D",
          "explanation": "O material diz que caixa cinza pode utilizar engenharia reversa, não que precise fazê-lo. Seu traço definidor é unir as perspectivas interna e externa, comparando lógica e funcionalidade com o especificado. Transformar uma possibilidade em obrigação excede o conteúdo.",
          "topic": "Transparência — Caixa cinza e engenharia reversa"
        },
        {
          "question": "17. Uma equipe escolhe testar integração, sistema e aceitação usando a classificação de transparência ensinada. Em qual grupo esses níveis foram explicitamente colocados?",
          "options": [
            "A. Caixa branca, junto a unidade e estático.",
            "B. Caixa preta, junto a alfa e beta.",
            "C. Caixa cinza, exclusivamente quando houver engenharia reversa.",
            "D. Stress, junto aos limites máximos e mínimos.",
            "E. Refatoração, depois da fase verde."
          ],
          "answer": "B",
          "explanation": "Na classificação da aula, integração, sistema e aceitação aparecem como níveis de caixa preta, ao lado de alfa e beta. Unidade e estático aparecem sob caixa branca. As outras alternativas confundem transparência com objetivos de teste ou etapas do TDD.",
          "topic": "Transparência — Associação de níveis"
        },
        {
          "question": "18. Um caso verifica a rejeição de um pagamento negativo. Depois, o avaliador examina a condição interna que deveria impedir esse pagamento e confronta ambos com a regra especificada. Como classificar o conjunto da avaliação?",
          "options": [
            "A. Exclusivamente caixa preta, porque a presença de uma entrada impede análise estrutural.",
            "B. Exclusivamente carga, porque valores financeiros constituem volume de informações.",
            "C. Caixa cinza, pela combinação de comportamento externo e lógica interna.",
            "D. Beta, porque pagamentos devem ser avaliados por pessoas externas.",
            "E. Entrega, porque a regra especificada já está disponível."
          ],
          "answer": "C",
          "explanation": "A avaliação inclui uma verificação funcional e uma inspeção da condição interna, ambas confrontadas com a especificação. Isso corresponde à mescla característica da caixa cinza. O valor negativo é um exemplo funcional, mas não impede que a investigação também analise a estrutura.",
          "topic": "Transparência — Situação integrada"
        },
        {
          "question": "19. Um gerente pede que se diferencie 'o que o software deve fazer' de 'como sua estrutura se comporta'. Qual formulação atende melhor ao pedido?",
          "options": [
            "A. A primeira expressão define caixa branca; a segunda, caixa preta.",
            "B. Ambas definem somente testes de usabilidade.",
            "C. Ambas definem exclusivamente testes de regressão.",
            "D. A primeira define preparação; a segunda, entrega.",
            "E. A primeira orienta caixa preta; a segunda orienta caixa branca."
          ],
          "answer": "E",
          "explanation": "A caixa preta se concentra nas funções previstas e nas saídas esperadas, isto é, no que o software deve fazer. A caixa branca avalia a estrutura interna e seu comportamento. A distinção é de perspectiva, não de fase do ciclo de testes.",
          "topic": "Transparência — Função versus estrutura"
        },
        {
          "question": "20. Um plano afirma: 'Avaliaremos condições e ciclos sem consultar o código, apenas observando saídas, e chamaremos isso de caixa branca'. Qual correção é mais adequada?",
          "options": [
            "A. Observar apenas saídas caracteriza a perspectiva externa; caixa branca exige utilizar aspectos internos do programa.",
            "B. A classificação está correta porque toda saída revela integralmente a estrutura interna.",
            "C. O procedimento é necessariamente caixa cinza, independentemente da análise realizada.",
            "D. O procedimento é necessariamente estático porque menciona condições.",
            "E. A técnica deve ser chamada beta porque não consulta código."
          ],
          "answer": "A",
          "explanation": "A caixa branca utiliza aspectos internos, incluindo código, condições e ciclos. Apenas mencionar esses elementos não demonstra que foram analisados estruturalmente. Se a avaliação efetiva se limita a entradas e saídas, sua perspectiva é externa, característica da caixa preta.",
          "topic": "Transparência — Coerência da classificação"
        },
        {
          "question": "21. Uma equipe aumenta o volume de informações e o tráfego para verificar quanto o sistema suporta sem apresentar erros. Não pretende localizar deliberadamente o ponto de funcionamento inadequado. Qual teste melhor representa seu objetivo?",
          "options": [
            "A. Alfa, porque o uso deve ocorrer de forma não planejada.",
            "B. Usabilidade, porque o volume revela dificuldades subjetivas.",
            "C. Regressão, porque o tráfego substitui a comparação entre versões.",
            "D. Stress, porque qualquer aumento de volume exige encontrar uma falha.",
            "E. Carga, porque avalia limites de uso suportados sem erros."
          ],
          "answer": "E",
          "explanation": "O teste de carga avalia quanto o software suporta em volume de informações e tráfego sem apresentar erros. O stress enfatiza levar o sistema aos limites e descobrir onde deixa de funcionar adequadamente. O objetivo declarado corresponde diretamente à primeira descrição.",
          "topic": "Outros tipos — Carga"
        },
        {
          "question": "22. Um experimento leva o sistema a condições extremas, tanto acima quanto abaixo das condições usuais, para verificar a correção das especificações máximas e mínimas de uso. Qual teste é mais adequado?",
          "options": [
            "A. Carga, pois se limita a medir o volume sem erros.",
            "B. Alfa, pois extremos exigem participantes do projeto.",
            "C. Stress, pois procura o ponto de funcionamento inadequado para mais ou para menos.",
            "D. Usabilidade, pois especificações mínimas equivalem a preferências dos usuários.",
            "E. Regressão, pois extremos necessariamente reproduzem erros já corrigidos."
          ],
          "answer": "C",
          "explanation": "O stress leva o software ao limite de potência e funcionamento, para mais ou para menos. A finalidade é identificar quando o funcionamento deixa de ser adequado e verificar especificações máximas ou mínimas. Isso é mais específico que apenas medir capacidade suportada sem erros.",
          "topic": "Outros tipos — Stress"
        },
        {
          "question": "23. Um pequeno grupo afirma que um sistema é fácil de usar, mas o avaliador observa dificuldades frequentes na realização das tarefas. Qual procedimento segue a orientação da aula?",
          "options": [
            "A. Aceitar exclusivamente as impressões, pois observações não fazem parte da usabilidade.",
            "B. Confrontar as impressões dos usuários com as observações do avaliador.",
            "C. Descartar as impressões, pois usabilidade analisa somente tráfego.",
            "D. Substituir o teste por stress, pois dificuldade implica limite de potência.",
            "E. Classificar automaticamente a atividade como beta."
          ],
          "answer": "B",
          "explanation": "O teste de usabilidade examina como o usuário utiliza o sistema e onde encontra dificuldades. A aula orienta ouvir suas impressões e confrontá-las com as observações do avaliador. Nem o relato nem a observação devem ser tratados isoladamente como toda a avaliação.",
          "topic": "Outros tipos — Usabilidade"
        },
        {
          "question": "24. Um software de prateleira é disponibilizado a um pequeno grupo de pessoas que participam do projeto. O uso é não planejado, com feedback sobre seu estado atual, como aceitação interna. Qual teste foi descrito?",
          "options": [
            "A. Alfa.",
            "B. Beta.",
            "C. Carga.",
            "D. Regressão.",
            "E. Teste estático."
          ],
          "answer": "A",
          "explanation": "O teste alfa envolve um pequeno grupo ligado ao projeto, que utiliza o sistema de forma não planejada e fornece feedback. A aula o apresenta como forma frequente de aceitação interna para sistemas de prateleira. Beta envolve muitas pessoas desconhecidas e sem relação com a equipe.",
          "topic": "Outros tipos — Alfa"
        },
        {
          "question": "25. Uma empresa entrega um software de prateleira a muitas pessoas desconhecidas, sem relação com a organização, para uso não planejado e coleta de feedback do mercado. Qual classificação corresponde ao cenário?",
          "options": [
            "A. Alfa, por envolver feedback sobre o produto.",
            "B. Usabilidade, porque qualquer grupo grande mede dificuldades.",
            "C. Caixa branca, porque usuários externos inspecionam a implementação.",
            "D. Beta, como forma de aceitação externa.",
            "E. Preparação, porque disponibilizar o sistema não envolve execução."
          ],
          "answer": "D",
          "explanation": "Beta é realizado por um grande número de pessoas desconhecidas e sem relação com a equipe ou empresa desenvolvedora. Seu uso não planejado pode fornecer feedback do mercado e servir como aceitação externa. O vínculo e o tamanho do grupo distinguem esse cenário do alfa.",
          "topic": "Outros tipos — Beta"
        },
        {
          "question": "26. Uma nova versão acrescentou uma funcionalidade e fez reaparecer um erro anteriormente corrigido. Qual prática do material visa diretamente reduzir esse risco?",
          "options": [
            "A. Executar apenas beta antes da primeira versão.",
            "B. Observar dificuldades visuais de um pequeno grupo.",
            "C. Realizar testes de regressão a cada versão com modificações de funcionalidades.",
            "D. Arquivar toda a documentação sem repetir os testes.",
            "E. Medir somente o limite mínimo de potência."
          ],
          "answer": "C",
          "explanation": "Regressão consiste em realizar testes a cada versão na qual funcionalidades são modificadas. Seu objetivo apresentado é evitar o reaparecimento de erros já corrigidos quando algo novo é incrementado. As outras práticas não abordam diretamente esse risco entre versões.",
          "topic": "Outros tipos — Regressão"
        },
        {
          "question": "27. Dois projetos usam o sistema de modo não planejado. No primeiro, participam poucas pessoas ligadas ao projeto; no segundo, muitas pessoas desconhecidas e sem vínculo com a empresa. Qual diferença é decisiva?",
          "options": [
            "A. O primeiro é beta e o segundo alfa, devido ao tamanho dos grupos.",
            "B. Ambos são alfa, pois o uso é não planejado.",
            "C. Ambos são beta, pois qualquer feedback representa o mercado.",
            "D. O primeiro é carga e o segundo stress, devido ao número de usuários.",
            "E. O primeiro corresponde a alfa; o segundo, a beta."
          ],
          "answer": "E",
          "explanation": "O uso não planejado é comum aos dois testes e, sozinho, não os distingue. Alfa envolve pequeno grupo participante do projeto e é associado à aceitação interna. Beta envolve grande grupo desconhecido, sem vínculo com a empresa, e é associado à aceitação externa.",
          "topic": "Outros tipos — Alfa versus beta"
        },
        {
          "question": "28. Uma equipe chama de usabilidade um teste cujo único objetivo é descobrir o volume de tráfego suportado sem erros. Qual correção é sustentada pelo material?",
          "options": [
            "A. Manter a classificação, pois usabilidade se define pela quantidade de tráfego.",
            "B. Reclassificar como alfa, independentemente dos participantes.",
            "C. Reclassificar como regressão, independentemente de versões.",
            "D. Reclassificar como carga; usabilidade observa necessidades e dificuldades dos usuários.",
            "E. Reclassificar como caixa branca, pois tráfego sempre revela ciclos internos."
          ],
          "answer": "D",
          "explanation": "Avaliar volume de informações ou tráfego suportado sem erros caracteriza carga. Usabilidade exige analisar como usuários utilizam o sistema, suas dificuldades e necessidades, além de confrontar impressões com observações. Os objetivos não são intercambiáveis.",
          "topic": "Outros tipos — Carga versus usabilidade"
        },
        {
          "question": "29. Um avaliador precisa escolher entre dois objetivos: I, identificar capacidade de uso sem erros; II, encontrar o ponto de funcionamento inadequado e verificar extremos máximos e mínimos. Qual associação é correta?",
          "options": [
            "A. I: carga; II: stress.",
            "B. I: stress; II: carga.",
            "C. I: usabilidade; II: beta.",
            "D. I: regressão; II: alfa.",
            "E. I: caixa cinza; II: teste estático."
          ],
          "answer": "A",
          "explanation": "Carga enfatiza a capacidade suportada em volume e tráfego sem erros. Stress enfatiza os limites de funcionamento e o ponto em que o software deixa de funcionar adequadamente, incluindo extremos para mais ou para menos. A diferença está na finalidade da avaliação.",
          "topic": "Outros tipos — Carga versus stress"
        },
        {
          "question": "30. Um gestor decide executar regressão apenas quando houver um erro conhecido ainda não corrigido. Qual problema existe nessa política?",
          "options": [
            "A. Regressão é destinada exclusivamente a avaliar aparência visual.",
            "B. Ela ignora a finalidade de verificar versões modificadas para evitar o retorno de erros já corrigidos.",
            "C. Regressão exige somente pessoas desconhecidas da empresa.",
            "D. Regressão é uma fase de arquivamento, não uma prática de teste.",
            "E. Regressão deve ocorrer somente antes de escrever qualquer funcionalidade."
          ],
          "answer": "B",
          "explanation": "A regressão não se restringe a erros ainda abertos. A aula destaca a repetição dos testes a cada versão com funcionalidades modificadas para evitar que correções anteriores sejam desfeitas. Limitar a prática a defeitos conhecidos deixa de atender esse objetivo preventivo.",
          "topic": "Outros tipos — Finalidade da regressão"
        },
        {
          "question": "31. Um pequeno grupo ligado ao projeto fornece feedback, mas o objetivo central do avaliador é observar dificuldades de uso e confrontar relatos com sua observação. Qual elemento sustenta identificar uma avaliação de usabilidade, mesmo sem negar possíveis outras classificações?",
          "options": [
            "A. Apenas o vínculo dos participantes com o projeto.",
            "B. Apenas o tamanho pequeno do grupo.",
            "C. Apenas a existência de feedback.",
            "D. O foco em necessidades, modo de uso e dificuldades, com confronto entre impressões e observações.",
            "E. A procura de erros corrigidos em versões anteriores."
          ],
          "answer": "D",
          "explanation": "O pequeno grupo e o feedback, isoladamente, não bastam para distinguir usabilidade de alfa. O foco em como o sistema é usado, nas dificuldades e no confronto entre relatos e observações corresponde à definição de usabilidade. A questão destaca o objetivo, não apenas os participantes.",
          "topic": "Outros tipos — Critério de usabilidade"
        },
        {
          "question": "32. Uma empresa afirma que todo teste com usuários externos é beta. Qual conjunto de características reproduz mais precisamente a descrição da aula?",
          "options": [
            "A. Um único avaliador, uso planejado e inspeção do código.",
            "B. Grande número de pessoas desconhecidas, sem relação com a desenvolvedora, usando o sistema de forma não planejada.",
            "C. Pequeno grupo participante do projeto, aceitação interna e inspeção de ciclos.",
            "D. Qualquer grupo, desde que sejam repetidos testes de erros corrigidos.",
            "E. Somente usuários que medem o limite mínimo de funcionamento."
          ],
          "answer": "B",
          "explanation": "A definição de beta reúne quantidade elevada de participantes, ausência de vínculo com a equipe ou empresa e uso não planejado. A mera externalidade não reproduz todos os elementos da descrição. O teste é frequentemente associado à aceitação externa e ao feedback do mercado.",
          "topic": "Outros tipos — Caracterização de beta"
        },
        {
          "question": "33. Após três incrementos funcionais, uma equipe quer avaliar tanto o retorno de erros antigos quanto a capacidade de tráfego sem erros. Qual combinação atende aos dois objetivos?",
          "options": [
            "A. Alfa e beta.",
            "B. Caixa branca e entrega.",
            "C. Usabilidade e especificação.",
            "D. Stress e refatoração.",
            "E. Regressão e carga."
          ],
          "answer": "E",
          "explanation": "Regressão trata do risco de reaparecimento de erros corrigidos após modificações entre versões. Carga avalia capacidade de uso em volume de informações e tráfego sem erros. Nenhum dos dois objetivos exige, por si só, grupos de aceitação ou análise de dificuldades de uso.",
          "topic": "Outros tipos — Seleção por objetivos"
        },
        {
          "question": "34. Um plano de stress prevê somente aumentar a exigência do sistema e declara que condições inferiores nunca podem fazer parte desse teste. Qual avaliação é correta?",
          "options": [
            "A. A exclusão é obrigatória, pois a aula restringe stress a tráfego crescente.",
            "B. Condições inferiores pertencem exclusivamente à usabilidade.",
            "C. A exclusão não é sustentada: stress pode levar o software ao limite para mais ou para menos.",
            "D. Stress só considera versões com erros antigos.",
            "E. Condições inferiores transformam o teste automaticamente em beta."
          ],
          "answer": "C",
          "explanation": "A aula descreve stress como levar o software ao limite de potência e funcionamento para mais ou para menos. Também menciona verificar especificações máximas ou mínimas. Portanto, não sustenta excluir genericamente condições inferiores dessa avaliação.",
          "topic": "Outros tipos — Limites no stress"
        },
        {
          "question": "35. Uma empresa quer feedback sobre o estado atual de um software de prateleira como aceitação interna, usando poucas pessoas participantes do projeto. Qual escolha evita confundir a finalidade com feedback do mercado?",
          "options": [
            "A. Alfa, e não beta.",
            "B. Beta, e não alfa.",
            "C. Carga, e não regressão.",
            "D. Stress, e não usabilidade.",
            "E. Teste estático, e não integração."
          ],
          "answer": "A",
          "explanation": "O cenário reúne os elementos do alfa: pequeno grupo participante do projeto, feedback e aceitação interna frequente de sistemas de prateleira. Beta envolve muitas pessoas desconhecidas e sem vínculo, permitindo feedback do mercado como aceitação externa.",
          "topic": "Outros tipos — Aceitação interna e externa"
        },
        {
          "question": "36. Uma equipe está definindo a Estratégia de Teste e o Plano de Teste com base nos requisitos. Em qual fase do ciclo de vida essa atividade se enquadra?",
          "options": [
            "A. Preparação.",
            "B. Planejamento.",
            "C. Especificação.",
            "D. Execução.",
            "E. Entrega."
          ],
          "answer": "B",
          "explanation": "Planejamento é a fase em que se elaboram Estratégia de Teste e Plano de Teste a partir dos requisitos. Preparação organiza o ambiente; especificação elabora ou revisa casos e roteiros. A distinção depende do produto da atividade, não apenas de ocorrer antes da execução.",
          "topic": "Ciclo de vida — Planejamento"
        },
        {
          "question": "37. A estratégia já foi definida. Agora a equipe organiza equipamentos, pessoal, ferramentas de automação e massa de testes para viabilizar a execução planejada. Qual fase está sendo realizada?",
          "options": [
            "A. Planejamento, porque qualquer atividade anterior ao teste pertence a essa fase.",
            "B. Especificação, porque equipamentos equivalem a casos de teste.",
            "C. Entrega, porque o ambiente deve ser arquivado.",
            "D. Preparação, porque se estrutura o Ambiente de Teste.",
            "E. Execução, porque disponibilizar ferramentas já registra resultados."
          ],
          "answer": "D",
          "explanation": "Preparação tem como objetivo preparar o Ambiente de Teste, incluindo equipamentos, pessoas, ferramentas de automação e massa de testes. Estar antes da execução não torna a atividade automaticamente planejamento. O material separa claramente essas responsabilidades.",
          "topic": "Ciclo de vida — Preparação"
        },
        {
          "question": "38. Um ambiente está disponível, mas os casos e roteiros precisam ser elaborados e revisados. Qual fase corresponde a essa responsabilidade?",
          "options": [
            "A. Especificação.",
            "B. Planejamento.",
            "C. Preparação.",
            "D. Entrega.",
            "E. Execução."
          ],
          "answer": "A",
          "explanation": "Especificação compreende elaborar ou revisar casos de testes e roteiros de testes. A preparação trata do ambiente, enquanto a execução aplica os testes e registra resultados. A disponibilidade do ambiente não substitui a definição dos casos e roteiros.",
          "topic": "Ciclo de vida — Especificação"
        },
        {
          "question": "39. Uma equipe executou os testes, mas não registrou os resultados obtidos. Qual obrigação da fase ficou incompleta?",
          "options": [
            "A. Definir a estratégia baseada nos requisitos.",
            "B. Selecionar o grupo de beta.",
            "C. Registrar os resultados na fase de execução.",
            "D. Refatorar o código antes de escrever testes.",
            "E. Arquivar a documentação antes de executar."
          ],
          "answer": "C",
          "explanation": "A fase de execução inclui tanto executar os testes quanto registrar os resultados obtidos. Realizar apenas a primeira atividade não cumpre toda a descrição da fase. Finalização e arquivamento são atribuídos à entrega, não substituem o registro durante a execução.",
          "topic": "Ciclo de vida — Execução"
        },
        {
          "question": "40. O projeto de testes será encerrado e toda a documentação precisa ser finalizada e arquivada. Qual fase realiza esse fechamento?",
          "options": [
            "A. Planejamento.",
            "B. Preparação.",
            "C. Especificação.",
            "D. Execução.",
            "E. Entrega."
          ],
          "answer": "E",
          "explanation": "Entrega é a última fase do ciclo apresentado. Nela o projeto é finalizado e toda a documentação é finalizada e arquivada. Isso a diferencia da execução, cujo foco é executar testes e registrar os resultados.",
          "topic": "Ciclo de vida — Entrega"
        },
        {
          "question": "41. Um auditor precisa ordenar as fases conforme a apresentação da aula. Qual sequência está correta?",
          "options": [
            "A. Planejamento → Preparação → Especificação → Execução → Entrega.",
            "B. Preparação → Planejamento → Execução → Especificação → Entrega.",
            "C. Especificação → Planejamento → Preparação → Entrega → Execução.",
            "D. Planejamento → Execução → Preparação → Especificação → Entrega.",
            "E. Planejamento → Preparação → Entrega → Especificação → Execução."
          ],
          "answer": "A",
          "explanation": "O ciclo apresentado enumera planejamento, preparação, especificação, execução e entrega, nessa ordem. Seus produtos também são distintos: estratégia e plano, ambiente, casos e roteiros, resultados, e documentação final arquivada. A resposta reproduz a sequência da aula.",
          "topic": "Ciclo de vida — Sequência das fases"
        },
        {
          "question": "42. Um relatório classifica a seleção de equipamentos como especificação e a revisão de roteiros como preparação. Qual ajuste deve ser feito?",
          "options": [
            "A. Transferir ambas para entrega.",
            "B. Transferir ambas para execução.",
            "C. Manter a classificação, pois ambiente e roteiros são equivalentes.",
            "D. Classificar equipamentos como planejamento e roteiros como entrega.",
            "E. Classificar equipamentos em preparação e revisão de roteiros em especificação."
          ],
          "answer": "E",
          "explanation": "Equipamentos integram o Ambiente de Teste, preparado na fase de preparação. Elaborar ou revisar roteiros integra a especificação. A inversão confunde recursos necessários para executar os testes com a definição dos próprios procedimentos de teste.",
          "topic": "Ciclo de vida — Preparação versus especificação"
        },
        {
          "question": "43. Um gerente considera suficiente arquivar resultados brutos para declarar cumprida a entrega, mesmo deixando documentação do projeto inacabada. Qual objeção corresponde ao material?",
          "options": [
            "A. Entrega exige somente executar testes novamente.",
            "B. Entrega se limita a preparar ferramentas de automação.",
            "C. Documentação é finalizada exclusivamente na fase vermelha do TDD.",
            "D. Entrega inclui finalizar o projeto e toda a documentação, além de arquivá-la.",
            "E. Arquivamento pertence somente ao planejamento."
          ],
          "answer": "D",
          "explanation": "A entrega não se resume a armazenar resultados brutos. A aula exige finalizar o projeto e finalizar e arquivar toda a documentação. Resultados registrados na execução são parte do trabalho, mas não substituem esse fechamento documental.",
          "topic": "Ciclo de vida — Encerramento documental"
        },
        {
          "question": "44. Duas tarefas foram atribuídas: I, produzir plano e estratégia com base nos requisitos; II, elaborar e revisar casos de teste. Qual associação evita tratá-las como uma única fase?",
          "options": [
            "A. I: especificação; II: planejamento.",
            "B. I: planejamento; II: especificação.",
            "C. I: preparação; II: execução.",
            "D. I: entrega; II: preparação.",
            "E. I: execução; II: entrega."
          ],
          "answer": "B",
          "explanation": "Plano e estratégia baseados nos requisitos são produtos do planejamento. Casos de teste são elaborados ou revisados na especificação. Embora ambas orientem o trabalho futuro, a aula separa a definição da abordagem geral da definição dos casos e roteiros.",
          "topic": "Ciclo de vida — Planejamento versus especificação"
        },
        {
          "question": "45. Uma equipe comprou ferramentas e reuniu pessoal, mas ainda não criou casos nem roteiros. Qual avaliação descreve corretamente o que foi atendido e o que permanece pendente?",
          "options": [
            "A. Atendeu à entrega; permanece pendente apenas o arquivamento.",
            "B. Atendeu à execução; permanece pendente apenas registrar resultados.",
            "C. Atendeu a elementos da preparação; permanecem atividades da especificação.",
            "D. Atendeu à especificação; permanece pendente somente definir equipamentos.",
            "E. Atendeu ao planejamento completo, pois ferramentas substituem plano e estratégia."
          ],
          "answer": "C",
          "explanation": "Ferramentas e pessoal são elementos do ambiente previstos na preparação. Criar casos e roteiros pertence à especificação e não é substituído pela disponibilidade de recursos. Tampouco a aquisição de ferramentas demonstra elaboração da estratégia ou execução dos testes.",
          "topic": "Ciclo de vida — Diagnóstico de pendências"
        },
        {
          "question": "46. Uma equipe implementa integralmente cada funcionalidade e somente depois escreve seus testes, alegando seguir TDD. Qual mudança é necessária segundo a definição da aula?",
          "options": [
            "A. Eliminar a refatoração, mantendo apenas a implementação.",
            "B. Escrever testes somente quando usuários beta relatarem erros.",
            "C. Executar testes exclusivamente no encerramento do projeto.",
            "D. Substituir todos os testes por observação visual.",
            "E. Criar os testes antes do código de cada funcionalidade e iniciar o ciclo com sua falha."
          ],
          "answer": "E",
          "explanation": "No TDD, os testes são criados antes do código de cada funcionalidade. O ciclo começa escrevendo e executando um teste para que falhe, depois implementando código para fazê-lo passar e, por fim, refatorando. Testar apenas após a implementação não reproduz essa ordem.",
          "topic": "TDD — Definição e ordem"
        },
        {
          "question": "47. Um desenvolvedor quer começar o ciclo TDD de uma função de ordenação. Qual ação representa a fase vermelha descrita?",
          "options": [
            "A. Escrever e executar um teste que expresse a ordenação desejada, esperando inicialmente sua falha.",
            "B. Otimizar uma implementação já aprovada sem verificar seus resultados.",
            "C. Arquivar os casos e declarar o projeto concluído.",
            "D. Implementar a solução completa e só depois definir a saída esperada.",
            "E. Coletar exclusivamente feedback de um grande grupo externo."
          ],
          "answer": "A",
          "explanation": "A fase vermelha é o ponto inicial e busca escrever um teste que informe a implementação desejada. Sua aprovação depende de atender às expectativas definidas. Antes de implementar a funcionalidade, o teste é executado com o objetivo de falhar.",
          "topic": "TDD — Fase vermelha"
        },
        {
          "question": "48. O teste de uma funcionalidade está falhando porque ela ainda não foi implementada. Qual prioridade corresponde à fase verde?",
          "options": [
            "A. Tornar a implementação a mais rápida possível antes de fazê-la funcionar.",
            "B. Reescrever a expectativa para aceitar qualquer resultado.",
            "C. Implementar uma solução que faça o teste passar, sem priorizar a otimização nesse momento.",
            "D. Finalizar e arquivar a documentação do projeto.",
            "E. Suspender os testes até uma versão beta."
          ],
          "answer": "C",
          "explanation": "Na fase verde, o objetivo é implementar código para passar no teste. A aula ressalta encontrar uma solução sem se preocupar em otimizar a implementação nessa etapa. Melhorias de clareza ou eficiência são discutidas na refatoração, mantendo os testes aprovados.",
          "topic": "TDD — Fase verde"
        },
        {
          "question": "49. Uma função já passa no teste. O desenvolvedor melhora sua descrição e eficiência, mas a alteração faz o teste falhar. Como interpretar a situação segundo a aula?",
          "options": [
            "A. É o resultado esperado da refatoração, pois essa fase deve terminar no vermelho.",
            "B. A refatoração deixou de preservar o estado verde e exige atenção à quebra do comportamento planejado.",
            "C. O teste deve ser removido, pois testes aprovados não são úteis após melhorias.",
            "D. A falha comprova que a versão anterior estava necessariamente incorreta.",
            "E. A refatoração dispensa qualquer garantia sobre a saída."
          ],
          "answer": "B",
          "explanation": "Na refatoração, o código é melhorado, ajustado e otimizado, mas o teste deve continuar passando. A aula relaciona essa aprovação à garantia de que o planejado para a funcionalidade não foi quebrado. Uma falha após a mudança contradiz essa condição.",
          "topic": "TDD — Preservação na refatoração"
        },
        {
          "question": "50. Qual associação reproduz as perguntas orientadoras das três etapas do TDD?",
          "options": [
            "A. Red: como otimizar; Green: o que desenvolver; Refactor: como falhar.",
            "B. Red: como arquivar; Green: como planejar; Refactor: como preparar o ambiente.",
            "C. Red: como passar; Green: como melhorar; Refactor: o que desenvolver.",
            "D. Red: o que desenvolver; Green: como passar no teste; Refactor: como melhorar a implementação existente.",
            "E. Red: quem usará; Green: qual mercado; Refactor: quantos usuários externos."
          ],
          "answer": "D",
          "explanation": "A aula associa Red a pensar sobre o que desenvolver, Green a pensar sobre como passar no teste e Refactor a pensar em melhorar a implementação existente. Essa sequência liga expectativa, solução funcional e melhoria. Não corresponde às fases documentais do ciclo de testes.",
          "topic": "TDD — Red, Green, Refactor"
        },
        {
          "question": "51. Para a função sortArray, um teste usa a entrada [2, 4, 1]. Qual expectativa corresponde ao exemplo da fase vermelha?",
          "options": [
            "A. Retornar [4, 2, 1], pois o objetivo é ordem decrescente.",
            "B. Retornar [2, 4, 1], pois a fase vermelha preserva qualquer entrada.",
            "C. Retornar [1, 2, 4], expressando a ordenação numérica crescente desejada.",
            "D. Retornar apenas [1], pois o teste verifica somente o menor valor.",
            "E. Retornar [1, 4, 2], pois qualquer mudança representa ordenação."
          ],
          "answer": "C",
          "explanation": "O exemplo define sortArray como uma função que ordena valores numéricos em ordem crescente. Para [2, 4, 1], a saída esperada é [1, 2, 4]. A expectativa descreve o comportamento que orientará a implementação, não uma saída arbitrária para facilitar aprovação.",
          "topic": "TDD — Exemplo sortArray"
        },
        {
          "question": "52. Um desenvolvedor afirma que a falha inicial do teste torna o TDD inválido. Qual resposta é coerente com o processo apresentado?",
          "options": [
            "A. A falha inicial é proibida, pois todos os testes devem nascer aprovados.",
            "B. A falha inicial é buscada antes da implementação; depois o código deve atender às expectativas para o teste passar.",
            "C. A falha inicial deve ser resolvida arquivando o teste sem implementar a função.",
            "D. A falha inicial indica obrigatoriamente um problema de usabilidade.",
            "E. A falha inicial exige começar pelo beta, não pela implementação."
          ],
          "answer": "B",
          "explanation": "O TDD começa com um teste executado para falhar antes da criação do código correspondente. Em seguida, a implementação deve fazê-lo passar. Portanto, a falha inicial tem uma função no ciclo e não é, isoladamente, evidência de invalidade do processo.",
          "topic": "TDD — Papel da falha inicial"
        },
        {
          "question": "53. A implementação inicial de sortArray usa laços e atende ao teste, mas não é particularmente rápida. Qual decisão corresponde à separação entre verde e refatoração?",
          "options": [
            "A. Considerar a fase verde inválida, pois ela exige a solução mais eficiente.",
            "B. Apagar a expectativa e aceitar a entrada sem ordenar.",
            "C. Impedir qualquer melhoria depois que o teste passa.",
            "D. Reconhecer que a solução atende à fase verde e buscar eficiência na refatoração, preservando a saída.",
            "E. Transferir a otimização para um grupo beta sem manter testes."
          ],
          "answer": "D",
          "explanation": "A fase verde busca uma solução que passe no teste, sem preocupação prioritária com otimização. A refatoração permite melhorar eficiência e descrição do código, obtendo a mesma saída e permanecendo no verde. O exemplo de ordenação ilustra justamente essa distinção.",
          "topic": "TDD — Solução funcional versus otimização"
        },
        {
          "question": "54. Uma equipe pretende refatorar seu conjunto de testes e pergunta quais características compõem MC-FIRE. Qual resposta respeita o limite do material fornecido?",
          "options": [
            "A. Apresentar uma expansão completa da sigla, pois seus termos foram enumerados na aula.",
            "B. Afirmar que MC-FIRE define as cinco fases do ciclo de vida dos testes.",
            "C. Afirmar que MC-FIRE significa automatizar integralmente o sistema.",
            "D. Afirmar que a sigla se refere exclusivamente às ferramentas Android.",
            "E. Informar que a aula recomenda considerar MC-FIRE, mas não detalha seus componentes no texto fornecido."
          ],
          "answer": "E",
          "explanation": "A aula menciona MC-FIRE ao recomendar considerar características de um bom teste durante a refatoração dos testes. Entretanto, o material fornecido não explica a composição da sigla. Detalhá-la exigiria acrescentar conteúdo externo, o que não é sustentado pela fonte.",
          "topic": "TDD — Refatoração dos testes e limite do material"
        },
        {
          "question": "55. Durante uma refatoração, o time recebe feedback rápido de que uma mudança comprometeu a funcionalidade. Qual benefício do TDD é diretamente ilustrado?",
          "options": [
            "A. Segurança para modificar o código e rápido feedback sobre problemas durante refatorações.",
            "B. Eliminação de toda participação humana na manutenção.",
            "C. Garantia de que nunca será necessário depurar o produto.",
            "D. Substituição da documentação por feedback de mercado.",
            "E. Dispensa de casos de teste depois da fase verde."
          ],
          "answer": "A",
          "explanation": "A aula lista segurança para realizar modificações e rápido feedback sobre problemas durante refatorações como benefícios do TDD. Isso não implica ausência absoluta de defeitos ou dispensa de depuração. O benefício está em apoiar mudanças e revelar problemas rapidamente.",
          "topic": "TDD — Benefícios nas modificações"
        },
        {
          "question": "56. Um gestor converte o benefício 'menos bugs' em promessa de 'nenhum bug e nenhuma correção futura'. Qual leitura é mais fiel?",
          "options": [
            "A. A promessa é literal, pois TDD elimina qualquer defeito.",
            "B. O benefício implica dispensar testes depois da primeira versão.",
            "C. O benefício se limita à aparência visual do aplicativo.",
            "D. O material fala em menos bugs e menor tempo de depuração e correção, não em ausência absoluta de defeitos.",
            "E. O material afirma que TDD aumenta necessariamente o tempo de correção."
          ],
          "answer": "D",
          "explanation": "O benefício apresentado é reduzir bugs e, com isso, o tempo de depuração e correção, liberando o foco da equipe. A aula não promete um produto sem defeitos ou sem correções futuras. A distinção evita transformar uma redução esperada em garantia absoluta.",
          "topic": "TDD — Alcance dos benefícios"
        },
        {
          "question": "57. Uma equipe busca código mais simples e melhor escrito, correções mais completas e documentação atualizada de cada parte do sistema. Qual prática tem esse conjunto de benefícios explicitamente associado na aula?",
          "options": [
            "A. Exclusivamente beta.",
            "B. Exclusivamente stress.",
            "C. TDD.",
            "D. Exclusivamente arquivamento na entrega.",
            "E. Exclusivamente inspeção visual manual."
          ],
          "answer": "C",
          "explanation": "A aula associa ao TDD código mais simples e melhor escrito, correção mais completa dos bugs encontrados e viabilização de documentação atualizada sobre cada parte do sistema. Esses benefícios complementam a segurança nas modificações e a redução de bugs. Não são apresentados como resultado exclusivo das outras práticas.",
          "topic": "TDD — Qualidade e documentação"
        },
        {
          "question": "58. Um time altera a saída esperada do teste apenas para aprovar uma implementação que não realiza a funcionalidade planejada. Qual crítica decorre da lógica do TDD descrita?",
          "options": [
            "A. A aprovação deve decorrer do atendimento às expectativas da funcionalidade, não de abandonar o comportamento planejado.",
            "B. A fase verde exige que qualquer implementação seja aceita.",
            "C. O teste deve sempre reproduzir o resultado atual, independentemente do que se quer desenvolver.",
            "D. A fase vermelha tem como objetivo impedir a definição de expectativas.",
            "E. Na refatoração, a saída deve obrigatoriamente mudar."
          ],
          "answer": "A",
          "explanation": "O teste da fase vermelha informa a implementação e só é aprovado quando suas expectativas são atendidas. A fase verde busca código que passe nesse teste, e a refatoração deve preservar o planejado. Alterar a expectativa para aceitar uma função inadequada rompe essa orientação.",
          "topic": "TDD — Expectativas e comportamento planejado"
        },
        {
          "question": "59. Um projeto confunde Red, Green e Refactor com preparação, execução e entrega. Qual distinção é correta?",
          "options": [
            "A. São apenas nomes diferentes para as mesmas três fases.",
            "B. Red corresponde ao arquivamento e Green à elaboração do plano.",
            "C. Refactor elimina a necessidade de registrar resultados em qualquer ciclo.",
            "D. Preparação só existe quando o desenvolvimento não utiliza testes.",
            "E. Red, Green e Refactor descrevem o ciclo TDD; o ciclo de vida de testes possui cinco fases próprias."
          ],
          "answer": "E",
          "explanation": "O TDD organiza o desenvolvimento em teste inicialmente falho, implementação para aprovação e refatoração. O ciclo de vida dos testes é apresentado separadamente com planejamento, preparação, especificação, execução e entrega. Os dois conjuntos não são definidos como equivalentes na aula.",
          "topic": "TDD — Distinção entre ciclos"
        },
        {
          "question": "60. Para uma nova funcionalidade, qual sequência respeita integralmente o ciclo TDD apresentado?",
          "options": [
            "A. Implementar → otimizar → escrever teste → arquivar.",
            "B. Escrever e executar teste para falhar → implementar para passar → refatorar mantendo aprovação.",
            "C. Refatorar → coletar feedback beta → escrever teste → implementar.",
            "D. Escrever teste aprovado sem implementação → remover teste → otimizar.",
            "E. Implementar → alterar expectativas para aceitar a saída → encerrar sem refatoração."
          ],
          "answer": "B",
          "explanation": "A sequência combina os três momentos descritos: Red, Green e Refactor. O teste antecede o código, a implementação atende à expectativa e a melhoria preserva a aprovação. As outras alternativas invertem etapas ou abandonam a função orientadora dos testes.",
          "topic": "TDD — Aplicação do ciclo completo"
        },
        {
          "question": "61. Após passar no teste, sortArray é reescrita com código mais descritivo que produz a mesma saída. Qual classificação é adequada?",
          "options": [
            "A. Fase vermelha, porque qualquer reescrita exige falha como objetivo.",
            "B. Refatoração, pois melhora a implementação existente preservando o comportamento aprovado.",
            "C. Beta, porque descrições melhores dependem de feedback externo.",
            "D. Preparação, porque o código equivale à massa de testes.",
            "E. Stress, porque reescrever leva o programa ao limite mínimo."
          ],
          "answer": "B",
          "explanation": "A refatoração permite obter a mesma saída com código mais descritivo ou mais rápido. Como a funcionalidade já passou no teste, a melhoria deve manter esse estado. Isso difere da fase vermelha, que define uma expectativa inicialmente não atendida.",
          "topic": "TDD — Melhoria descritiva"
        },
        {
          "question": "62. Um desenvolvedor inicia a otimização antes de conseguir fazer o teste passar. Qual orientação da aula foi antecipada indevidamente?",
          "options": [
            "A. A busca de melhoria da implementação, própria da refatoração após alcançar o verde.",
            "B. A escrita da expectativa, que deveria ocorrer somente na entrega.",
            "C. A escolha de participantes beta, obrigatória na fase verde.",
            "D. O arquivamento dos resultados, obrigatório antes do teste inicial.",
            "E. A eliminação dos testes manuais, objetivo da fase vermelha."
          ],
          "answer": "A",
          "explanation": "Na fase verde, a prioridade é encontrar uma solução que faça o teste passar, sem se preocupar em otimizar. A melhoria da implementação é tratada na refatoração, quando o teste já está aprovado. A antecipação confunde funcionamento suficiente com aperfeiçoamento.",
          "topic": "TDD — Prioridade das etapas"
        },
        {
          "question": "63. Uma equipe usa testes aprovados para verificar continuamente se uma refatoração não quebrou o planejado. Qual relação com os benefícios do TDD é correta?",
          "options": [
            "A. Demonstra que os testes deixam de ser necessários quando o código melhora.",
            "B. Demonstra que feedback rápido só existe em teste beta.",
            "C. Relaciona a permanência no verde à segurança para modificar e ao feedback rápido durante refatorações.",
            "D. Demonstra que a refatoração deve alterar as expectativas funcionais.",
            "E. Relaciona TDD exclusivamente ao aumento de tráfego."
          ],
          "answer": "C",
          "explanation": "A exigência de manter os testes passando durante refatorações preserva o comportamento planejado. Isso sustenta os benefícios apresentados de segurança para modificar código e feedback rápido quando surgem problemas. Não significa que os testes possam ser descartados após a primeira aprovação.",
          "topic": "TDD — Testes como apoio à refatoração"
        },
        {
          "question": "64. No exemplo sortArray, a solução inicial usa laços e depois é reconhecida como bubble sort, descrito como não particularmente rápido. Qual conclusão se limita ao conteúdo da aula?",
          "options": [
            "A. A aula demonstra uma complexidade matemática específica para todos os algoritmos de ordenação.",
            "B. A aula determina obrigatoriamente um algoritmo substituto.",
            "C. A solução inicial não pode ser considerada verde mesmo passando no teste.",
            "D. O exemplo motiva buscar uma implementação melhor ou mais eficiente durante a refatoração.",
            "E. O exemplo prova que testes de ordenação devem ser exclusivamente manuais."
          ],
          "answer": "D",
          "explanation": "O exemplo identifica a solução inicial como bubble sort e comenta que ela não é particularmente rápida. Isso serve para motivar a melhoria na refatoração, mantendo a mesma saída. O material não fornece análise matemática nem impõe um algoritmo substituto.",
          "topic": "TDD — Alcance do exemplo de ordenação"
        },
        {
          "question": "65. Um time diz praticar TDD porque possui muitos testes automatizados, embora escreva todos após concluir o código. Qual avaliação é mais precisa?",
          "options": [
            "A. A quantidade de testes demonstra necessariamente TDD.",
            "B. A automação dispensa a ordem Red, Green, Refactor.",
            "C. A prática é TDD sempre que utiliza uma ferramenta gratuita.",
            "D. A prática é TDD se os testes forem de regressão, independentemente da ordem.",
            "E. A existência de automação não demonstra TDD; faltou criar os testes antes do código conforme o ciclo descrito."
          ],
          "answer": "E",
          "explanation": "Automação significa executar testes programados com ferramentas e scripts. TDD acrescenta uma ordem de desenvolvimento: teste antes do código, falha inicial, implementação para aprovação e refatoração. Portanto, ter muitos testes automatizados não comprova que esse processo foi seguido.",
          "topic": "TDD — Distinção em relação à automação"
        },
        {
          "question": "66. Um especialista executa pessoalmente os casos de teste e avalia design, funcionalidade e desempenho. Qual característica define essa execução como manual?",
          "options": [
            "A. A execução por um ser humano seguindo as condições dos casos de teste.",
            "B. A ausência obrigatória de qualquer caso de teste.",
            "C. A comparação automática de resultados por scripts.",
            "D. A participação obrigatória de usuários desconhecidos.",
            "E. A necessidade de inspecionar todo o código-fonte."
          ],
          "answer": "A",
          "explanation": "Teste manual é realizado por um ser humano, e o especialista segue as condições descritas nos casos de teste. A aula menciona avaliação de design, funcionalidade e desempenho. Isso não exige ausência de planejamento, participantes externos ou inspeção integral do código.",
          "topic": "Testes manuais — Definição"
        },
        {
          "question": "67. Um projeto precisa realizar exploração, avaliar usabilidade e executar testes de aceite. Qual recomendação está diretamente alinhada ao material?",
          "options": [
            "A. Utilizar exclusivamente automação, pois esses são seus três usos recomendados.",
            "B. Considerar testes manuais, recomendados para essas modalidades.",
            "C. Utilizar somente stress, pois as três modalidades verificam limites.",
            "D. Eliminar julgamento humano para reduzir custos.",
            "E. Adiar os testes para a entrega documental."
          ],
          "answer": "B",
          "explanation": "A aula recomenda testes manuais para testes exploratórios, de usabilidade e de aceite. Também destaca sua utilidade quando não é possível implementar automação. Para automação, as recomendações explicitadas são regressão, carga e performance.",
          "topic": "Testes manuais — Aplicações recomendadas"
        },
        {
          "question": "68. Uma execução compara automaticamente resultados reais e esperados usando scripts e ferramentas. Qual descrição corresponde à aula?",
          "options": [
            "A. Teste manual, porque todo resultado esperado é definido por uma pessoa.",
            "B. Teste alfa, porque scripts necessariamente simulam participantes do projeto.",
            "C. Teste estático, porque comparar resultados dispensa execução.",
            "D. Usabilidade, porque scripts detectam impressões de usuários.",
            "E. Teste automatizado, desenvolvido para execução automática."
          ],
          "answer": "E",
          "explanation": "Teste automatizado envolve testes programados para execução automática e comparação de resultados reais com esperados. Ferramentas, scripts e softwares apoiam essa execução. A participação humana na criação dos testes não torna sua execução manual.",
          "topic": "Testes automatizados — Definição"
        },
        {
          "question": "69. Uma equipe prioriza regressão frequente, carga e performance. Qual escolha tem recomendação explícita e vantagens de execução compatíveis com esses objetivos?",
          "options": [
            "A. Somente manual, pois é mais rápido e melhor para carga.",
            "B. Somente beta, pois substitui scripts de desempenho.",
            "C. Somente usabilidade, pois mede tráfego automaticamente.",
            "D. Testes automatizados, recomendados para esses usos e executados com maior velocidade.",
            "E. Somente entrega, pois arquivar resultados mede performance."
          ],
          "answer": "D",
          "explanation": "A aula recomenda automação para regressão, carga e performance. Entre suas vantagens estão maior velocidade de execução e adequação a carga e desempenho. Já o teste manual é descrito como lento e inadequado para realizar carga e desempenho.",
          "topic": "Testes automatizados — Aplicações recomendadas"
        },
        {
          "question": "70. Um gerente compara apenas a velocidade de execução e conclui que testes automatizados também são sempre mais rápidos de desenvolver. Qual distinção corrige essa inferência?",
          "options": [
            "A. Testes manuais são sempre mais rápidos de executar que scripts.",
            "B. Velocidade de execução e tempo de desenvolvimento são equivalentes.",
            "C. Automatizados executam mais rapidamente, mas são apontados como mais demorados para desenvolver.",
            "D. Automatizados não precisam ser desenvolvidos.",
            "E. Manuais não envolvem preparação de casos."
          ],
          "answer": "C",
          "explanation": "O material apresenta maior velocidade de execução como vantagem da automação e maior demora para desenvolver como desvantagem. São momentos distintos do trabalho. Ganhar tempo nas execuções não implica que criar os testes automatizados seja mais rápido.",
          "topic": "Comparação — Desenvolvimento versus execução"
        },
        {
          "question": "71. Um aplicativo apresenta problemas de aparência visual e dificuldades de uso. Qual estratégia segue as capacidades e limitações descritas?",
          "options": [
            "A. Descartar testes manuais, pois a automação identifica essas lacunas.",
            "B. Utilizar somente testes de carga automatizados.",
            "C. Utilizar somente regressão para medir impressões dos usuários.",
            "D. Substituir avaliação por arquivamento de capturas de tela.",
            "E. Priorizar avaliação manual, pois o material destaca sua capacidade de identificar essas questões."
          ],
          "answer": "E",
          "explanation": "A aula atribui ao teste manual a identificação de problemas de aparência visual e usabilidade. Também declara que testes automatizados não conseguem identificar essas lacunas e são incapazes de detectar problemas de usabilidade. A escolha deve considerar essa limitação apresentada.",
          "topic": "Comparação — Aparência e usabilidade"
        },
        {
          "question": "72. Uma organização evita teste manual para tarefas repetitivas de grande volume porque teme lentidão e erros não percebidos. Qual fundamento corresponde aos contras apresentados?",
          "options": [
            "A. Teste manual exige sempre infraestrutura adicional cara.",
            "B. Teste manual não pode avaliar funcionalidade.",
            "C. Teste manual impede condições semelhantes às de produção.",
            "D. Sua execução é lenta e a interação totalmente humana eleva a possibilidade de um bug passar despercebido.",
            "E. Teste manual não admite seguir casos de teste."
          ],
          "answer": "D",
          "explanation": "Os contras do teste manual incluem lentidão e alta possibilidade de um bug passar despercebido devido à interação totalmente humana. A aula também o considera inadequado para carga e desempenho. Em contrapartida, seguir casos e aproximar condições de produção são características admitidas.",
          "topic": "Testes manuais — Limitações"
        },
        {
          "question": "73. Uma empresa com orçamento restrito precisa avaliar usabilidade. Qual argumento favorece a execução manual sem transformar isso em promessa universal sobre custos?",
          "options": [
            "A. Toda automação exige necessariamente o maior custo possível.",
            "B. O material apresenta baixo investimento como vantagem manual e recomenda essa execução para usabilidade.",
            "C. Testes manuais dispensam qualquer atuação humana especializada.",
            "D. Usabilidade só pode ser avaliada por testes beta automatizados.",
            "E. O custo manual é sempre nulo."
          ],
          "answer": "B",
          "explanation": "A aula apresenta baixo investimento como vantagem dos testes manuais, sem necessidade de ferramentas caras ou habilidades de alto nível para executá-los. Também recomenda testes manuais para usabilidade. Isso não significa custo zero nem superioridade econômica em todas as situações.",
          "topic": "Testes manuais — Investimento e adequação"
        },
        {
          "question": "74. Um fornecedor afirma que testes automatizados nunca exigem infraestrutura adicional e são sempre mais baratos. Qual resposta corresponde às ressalvas da aula?",
          "options": [
            "A. O custo pode ser maior dependendo da automação, inclusive pela necessidade de infraestrutura adicional.",
            "B. A afirmação é correta porque ferramentas e scripts não têm preparação.",
            "C. O custo automatizado é sempre menor, independentemente da ferramenta.",
            "D. Infraestrutura só pode existir em testes manuais.",
            "E. A aula não menciona qualquer limitação de custo."
          ],
          "answer": "A",
          "explanation": "O material qualifica o custo maior com a expressão 'dependendo' e relaciona essa possibilidade à infraestrutura adicional necessária para a execução. Portanto, não sustenta nem custo sempre maior nem custo sempre menor. A avaliação depende da automação considerada.",
          "topic": "Testes automatizados — Custo condicionado"
        },
        {
          "question": "75. Um time escolhe uma única ferramenta e presume que ela atenderá necessariamente a qualquer tipo e fase de teste, sem novos conhecimentos. Qual limitação foi ignorada?",
          "options": [
            "A. A obrigação de executar todos os testes manualmente.",
            "B. A impossibilidade de comparar resultados reais e esperados.",
            "C. A limitação de ferramenta e a necessidade de conhecimento sobre ferramentas apropriadas aos tipos e fases.",
            "D. A exigência de usar somente ferramentas pagas.",
            "E. A impossibilidade de automatizar regressão."
          ],
          "answer": "C",
          "explanation": "A aula apresenta como desvantagem a limitação de ferramenta e a necessidade de um tipo de ferramenta e conhecimento correspondente para cada tipo e fase de teste. Não se pode presumir cobertura universal apenas por ter escolhido uma solução. Isso não impede automação de regressão.",
          "topic": "Testes automatizados — Ferramentas e conhecimento"
        },
        {
          "question": "76. Um gestor interpreta 'mais confiáveis' como 'incapazes de apresentar qualquer limitação'. Qual avaliação preserva o comparativo da aula?",
          "options": [
            "A. Automatizados não são apresentados como mais confiáveis.",
            "B. A maior confiabilidade por ferramentas ou scripts convive com limitações de desenvolvimento, ferramentas, custo e usabilidade.",
            "C. A maior confiabilidade elimina toda necessidade de testadores.",
            "D. A maior confiabilidade implica detectar qualquer dificuldade subjetiva.",
            "E. A maior confiabilidade permite dispensar resultados esperados."
          ],
          "answer": "B",
          "explanation": "A aula atribui maior confiabilidade à execução por ferramentas ou scripts, mas lista várias desvantagens da automação. Entre elas estão tempo de desenvolvimento, limitações de ferramenta, custo condicionado e incapacidade de detectar problemas de usabilidade. Uma vantagem não elimina essas restrições.",
          "topic": "Comparação — Confiabilidade e limites"
        },
        {
          "question": "77. Um cenário não permite implementar um teste automatizado viável. Qual encaminhamento é expressamente apoiado pelo material?",
          "options": [
            "A. Excluir o cenário de qualquer avaliação.",
            "B. Declarar o sistema aprovado por falta de ferramenta.",
            "C. Substituir o cenário por aumento de tráfego, independentemente do objetivo.",
            "D. Arquivar o requisito sem testar.",
            "E. Utilizar teste manual, apontado como útil quando a automação não pode ser implementada."
          ],
          "answer": "E",
          "explanation": "A aula afirma que o teste manual é muito útil quando não é possível implementar o automatizado. A impossibilidade de automatizar não justifica dispensar a avaliação. Esse papel complementar também aparece na discussão sobre situações que exigem julgamento humano.",
          "topic": "Testes manuais — Complementaridade"
        },
        {
          "question": "78. Uma empresa quer simular condições semelhantes às de produção e observar aspectos visuais, mas aceita uma execução mais lenta. Qual conjunto corresponde ao teste manual no material?",
          "options": [
            "A. Execução rápida por scripts e incapacidade de avaliar qualquer funcionalidade.",
            "B. Desenvolvimento sempre instantâneo e execução sem interação humana.",
            "C. Possibilidade de condições semelhantes às de produção e identificação visual, com lentidão como desvantagem.",
            "D. Adequação superior a carga e impossibilidade de avaliar aparência.",
            "E. Obrigatoriedade de infraestrutura adicional e uso exclusivo de robôs."
          ],
          "answer": "C",
          "explanation": "Entre os prós manuais estão condições semelhantes às de produção e identificação de problemas de aparência e usabilidade. Entre os contras está a execução lenta. O conjunto permite comparar vantagens e custos sem confundir teste manual com execução por scripts.",
          "topic": "Testes manuais — Análise de vantagens e desvantagens"
        },
        {
          "question": "79. Dois trabalhos precisam ser distribuídos: I, execução frequente de regressão; II, avaliação de dificuldades de uso. Qual distribuição segue as recomendações da aula?",
          "options": [
            "A. I: automatizado; II: manual.",
            "B. I: manual; II: exclusivamente automatizado.",
            "C. I e II: exclusivamente automatizados.",
            "D. I e II: exclusivamente teste estático.",
            "E. I: entrega; II: planejamento."
          ],
          "answer": "A",
          "explanation": "Regressão é uma das aplicações recomendadas para testes automatizados. Usabilidade é recomendada para testes manuais, e a aula aponta a incapacidade da automação de detectar esses problemas. A distribuição considera a adequação de cada forma de execução.",
          "topic": "Comparação — Distribuição de atividades"
        },
        {
          "question": "80. Um testador manual avalia desempenho em alguns casos, e o gerente conclui que essa é a melhor opção para testes de carga e desempenho em geral. Qual distinção corrige a conclusão?",
          "options": [
            "A. O material proíbe qualquer observação de desempenho por humanos.",
            "B. Avaliar desempenho torna qualquer teste automaticamente caixa branca.",
            "C. A aula recomenda manual exclusivamente para carga.",
            "D. O manual pode avaliar elementos de desempenho, mas é descrito como inadequado para testes de carga e desempenho, favorecendo automação.",
            "E. A automação não pode comparar resultados de desempenho."
          ],
          "answer": "D",
          "explanation": "A definição de teste manual admite avaliar design, funcionalidade e desempenho. Contudo, o comparativo afirma que ele não é bom para realizar carga e desempenho, enquanto a automação é recomendada e vantajosa nesses usos. Possibilidade de observação não equivale a adequação geral.",
          "topic": "Comparação — Capacidade versus recomendação"
        },
        {
          "question": "81. Uma proposta define automação como ausência absoluta de qualquer intervenção humana, inclusive na manutenção. Qual correção corresponde à aula?",
          "options": [
            "A. Automação exige que um humano realize cada interação durante a execução.",
            "B. Automação significa apenas escrever documentação de testes.",
            "C. Automação é sinônimo de teste beta.",
            "D. Automação concede autonomia com mínima interferência humana e, em testes, usa ferramenta que imita a interação do testador.",
            "E. Automação se restringe a consultar código-fonte sem executar a aplicação."
          ],
          "answer": "D",
          "explanation": "A definição fala em autonomia com mínima interferência humana, não em ausência absoluta de pessoas. No teste de software, a ferramenta imita a interação do testador com a aplicação. A própria aula preserva atividades humanas de manutenção, pesquisa e documentação.",
          "topic": "Automação — Conceito"
        },
        {
          "question": "82. Um gerente apresenta como benefício da automação tornar escopo, tempo e custo mais independentes sem afetar a qualidade do produto. A qual perspectiva da aula pertence esse argumento?",
          "options": [
            "A. Exclusivamente à fase vermelha do TDD.",
            "B. À definição de caixa cinza.",
            "C. À visão gerencial da automação.",
            "D. À definição de beta.",
            "E. À fase de entrega."
          ],
          "answer": "C",
          "explanation": "A visão gerencial relaciona automação às variáveis do triângulo das restrições: escopo, tempo e custo. O material diz que elas se tornam mais independentes sem afetar a qualidade do produto entregue. A visão operacional, por sua vez, destaca execução e disponibilidade dos testadores.",
          "topic": "Automação — Visão gerencial"
        },
        {
          "question": "83. Uma equipe busca reduzir falhas humanas de tarefas repetitivas e liberar testadores para atividades estratégicas. Qual fundamento é explicitamente operacional?",
          "options": [
            "A. Executar com a mesma eficiência em menos tempo, reduzir falhas repetitivas e aumentar a disponibilidade dos testadores.",
            "B. Substituir integralmente todos os testadores por robôs.",
            "C. Eliminar a necessidade de casos de teste.",
            "D. Garantir que qualquer ferramenta cubra todos os tipos de teste.",
            "E. Impedir decisões humanas na avaliação."
          ],
          "answer": "A",
          "explanation": "A visão operacional apresenta execução com a mesma eficiência em menos tempo, redução drástica de falhas humanas em tarefas repetitivas e maior disponibilidade dos testadores. O objetivo é permitir foco em atividades estratégicas. Isso não equivale à substituição integral da equipe.",
          "topic": "Automação — Visão operacional"
        },
        {
          "question": "84. Uma organização automatizou 99% dos testes e pretende dispensar todas as pessoas da área. Qual objeção é diretamente apoiada pelo material?",
          "options": [
            "A. A automação acima de 50% é proibida pela aula.",
            "B. Mesmo com 99%, permanecem tarefas humanas, como manutenção do projeto de teste e pesquisa e documentação de estratégias.",
            "C. Toda execução automatizada exige um testador repetindo manualmente cada passo.",
            "D. A automação não pode reduzir atividades repetitivas.",
            "E. A documentação só pode ser produzida por usuários beta."
          ],
          "answer": "B",
          "explanation": "A aula usa o exemplo de 99% de automação para afirmar que pessoas continuam necessárias em tarefas inviáveis aos robôs. Cita manutenção do projeto de teste, pesquisa e documentação de novas estratégias. A automação reduz trabalho manual, mas não substitui o testador.",
          "topic": "Automação — Permanência do papel humano"
        },
        {
          "question": "85. Um caso exige julgamento humano e teria custo de automação muito alto. Qual política é mais coerente com a aula?",
          "options": [
            "A. Automatizar obrigatoriamente para atingir 100%.",
            "B. Excluir o caso porque julgamentos não pertencem aos testes.",
            "C. Transferir o caso para stress, independentemente do requisito.",
            "D. Substituir o julgamento por qualquer saída produzida pelo script.",
            "E. Manter avaliação manual focada nesse caso específico."
          ],
          "answer": "E",
          "explanation": "O material afirma que o teste manual não pode ser eliminado e deve ser focado em situações caras de automatizar ou que demandem decisão humana. Também recomenda não automatizar tudo, mas priorizar. O caso descrito reúne precisamente essas duas justificativas.",
          "topic": "Automação — Casos que permanecem manuais"
        },
        {
          "question": "86. Uma equipe começa a escrever scripts sem antes definir os casos de teste. Qual princípio apresentado foi desrespeitado?",
          "options": [
            "A. Automatizar 100% das funcionalidades antes de priorizar.",
            "B. Iniciar a automação somente depois da entrega.",
            "C. Projetar os casos de teste antes de automatizá-los.",
            "D. Utilizar apenas ferramentas pagas.",
            "E. Evitar revisão dos scripts para manter estabilidade."
          ],
          "answer": "C",
          "explanation": "Um dos princípios é projetar os casos de teste para depois automatizar. A ferramenta executora não substitui a definição do que será testado. O material também recomenda prioridade, facilidade de revisão e início antecipado da automação.",
          "topic": "Princípios da automação — Casos antes dos scripts"
        },
        {
          "question": "87. O patrocinador exige automatizar todos os cenários com o mesmo esforço, sem considerar prioridade. Qual revisão segue os princípios da aula?",
          "options": [
            "A. Aceitar a exigência, pois 100% é o objetivo obrigatório.",
            "B. Automatizar somente os cenários mais fáceis, sem qualquer análise de prioridade.",
            "C. Suspender toda automação para manter os testes humanos.",
            "D. Não buscar automatizar tudo; concentrar o esforço na prioridade.",
            "E. Priorizar exclusivamente o arquivamento e dispensar execução."
          ],
          "answer": "D",
          "explanation": "A aula orienta explicitamente não pensar em automatizar 100% de tudo e focar na prioridade. Essa recomendação se articula com a permanência de casos manuais e com os custos e limitações da automação. Não implica abandonar a automação nem escolher apenas pela facilidade.",
          "topic": "Princípios da automação — Priorização"
        },
        {
          "question": "88. Um projeto adota scripts difíceis de revisar e decide iniciar automação apenas no encerramento. Qual conjunto de mudanças corresponde aos princípios apresentados?",
          "options": [
            "A. Manter scripts opacos e começar somente após arquivar a documentação.",
            "B. Eliminar todos os casos manuais e dispensar manutenção.",
            "C. Automatizar primeiro e projetar os casos apenas quando houver falhas.",
            "D. Adiar mais a automação para reduzir a revisão.",
            "E. Organizar e proteger a automação para facilitar revisão dos scripts e iniciá-la o mais cedo possível."
          ],
          "answer": "E",
          "explanation": "O material recomenda proteger a automação de modo a facilitar sua revisão, com referência aos scripts. Também recomenda iniciá-la o mais cedo possível em um projeto. Isso contrasta com scripts difíceis de revisar e início apenas no encerramento.",
          "topic": "Princípios da automação — Revisão e início antecipado"
        },
        {
          "question": "89. Uma equipe acredita que iniciar automação cedo autoriza pular o projeto dos casos. Qual interpretação concilia corretamente os princípios?",
          "options": [
            "A. Início cedo revoga a necessidade de casos de teste.",
            "B. É possível iniciar cedo o trabalho de automação, preservando a ordem de projetar os casos antes de automatizá-los.",
            "C. Os princípios são incompatíveis e obrigam abandonar a automação.",
            "D. Projetar casos exige esperar a entrega final.",
            "E. Início cedo significa automatizar necessariamente todos os testes."
          ],
          "answer": "B",
          "explanation": "Iniciar automação cedo trata do momento no projeto; projetar casos antes de automatizar trata da ordem das atividades. Os princípios podem ser atendidos conjuntamente começando cedo a definição e posterior automação dos casos. Nenhum deles exige cobertura de 100%.",
          "topic": "Princípios da automação — Coerência entre recomendações"
        },
        {
          "question": "90. A equipe pretende justificar a automação sem prometer substituir testadores ou eliminar decisões humanas. Qual argumento integra corretamente as visões e ressalvas da aula?",
          "options": [
            "A. A automação reduz tempo e falhas repetitivas, libera atuação estratégica e preserva pessoas para tarefas inviáveis aos robôs.",
            "B. A automação elimina manutenção, pesquisa e documentação.",
            "C. A automação torna desnecessário qualquer teste manual.",
            "D. A automação só tem utilidade quando alcança exatamente 100%.",
            "E. A automação dispensa conhecimento das ferramentas."
          ],
          "answer": "A",
          "explanation": "A aula destaca benefícios operacionais de tempo, redução de falhas repetitivas e disponibilidade para atividades estratégicas. Ao mesmo tempo, afirma a permanência de pessoas para manutenção, pesquisa, documentação e julgamentos. A justificativa adequada reconhece benefícios sem apagar esses limites.",
          "topic": "Automação — Benefícios e limites integrados"
        },
        {
          "question": "91. Uma empresa busca ferramenta gratuita e open source para regressão de aplicações web executadas pelo navegador, com gravação e reprodução. Qual sugestão corresponde ao material?",
          "options": [
            "A. Ranorex, porque possui somente distribuição gratuita.",
            "B. Selenium, voltado a aplicações web pelo browser e associado à regressão.",
            "C. Robotium, apresentado como ferramenta genérica de navegador para qualquer plataforma.",
            "D. Telerik Test Studio, cuja gratuidade open source é explicitamente declarada.",
            "E. MC-FIRE, apresentado como ferramenta de gravação para aplicações web."
          ],
          "answer": "B",
          "explanation": "Selenium é descrito como gratuito, open source, voltado a testes de aplicações web pelo navegador e utilizado para regressão. A aula também menciona recursos de gravação e reprodução. Ranorex é pago, e Robotium é apresentado especificamente para Android.",
          "topic": "Ferramentas — Selenium"
        },
        {
          "question": "92. Um projeto precisa de testes de ponta a ponta em desktop, web e dispositivos móveis, com facilidade para iniciantes e recursos para especialistas, aceitando uma licença paga com avaliação gratuita. Qual ferramenta corresponde à descrição?",
          "options": [
            "A. Selenium, descrito como exclusivamente pago e voltado a desktop.",
            "B. Robotium, descrito como IDE completo multiplataforma pago.",
            "C. MC-FIRE, descrito como plataforma móvel comercial.",
            "D. Ranorex, com IDE completo, APIs abertas e suporte aos três ambientes.",
            "E. TDD, descrito como produto com licença de avaliação."
          ],
          "answer": "D",
          "explanation": "Ranorex é descrito como ajustável, fácil de usar e adequado a iniciantes, além de oferecer IDE completo e APIs abertas para especialistas. Suporta testes de ponta a ponta em desktop, web e dispositivos móveis. Possui somente versão paga, mas oferece teste grátis.",
          "topic": "Ferramentas — Ranorex"
        },
        {
          "question": "93. Uma equipe desenvolve aplicações Android nativas e híbridas e quer um framework gratuito que simule procedimentos do analista e facilite automação de caixa preta. Qual opção é adequada?",
          "options": [
            "A. Selenium, pois o material o define como framework específico de Android.",
            "B. Ranorex, pois é descrito como gratuito e exclusivo para Android.",
            "C. Robotium, com as características solicitadas.",
            "D. MC-FIRE, pois simula interações em aplicações híbridas.",
            "E. 5W2H, pois é apresentado como framework Android de caixa preta."
          ],
          "answer": "C",
          "explanation": "Robotium é apresentado como framework gratuito para automação Android, compatível com aplicações nativas e híbridas. Sua função principal é simular procedimentos do analista de teste, e uma vantagem citada é facilitar a escrita de automação de caixa preta.",
          "topic": "Ferramentas — Robotium"
        },
        {
          "question": "94. Uma equipe procura ferramenta abrangente que também possa ser usada manualmente e ofereça teste funcional de UI, exploratório, performance, mobile, carregamento e teste no Visual Studio. Qual ferramenta foi descrita dessa forma?",
          "options": [
            "A. Robotium.",
            "B. Selenium.",
            "C. MC-FIRE.",
            "D. 5W2H.",
            "E. Telerik Test Studio."
          ],
          "answer": "E",
          "explanation": "A descrição corresponde ao Telerik Test Studio, apresentado como ferramenta abrangente de automação que pode ser usada manualmente. A aula enumera testes funcionais de UI, exploratórios, de performance, mobile, de carregamento e no Visual Studio. Não declara sua licença ou preço.",
          "topic": "Ferramentas — Telerik Test Studio"
        },
        {
          "question": "95. Um responsável compara licenças apenas com base na aula. Qual afirmação está explicitamente sustentada?",
          "options": [
            "A. Selenium é gratuito e open source; Robotium é gratuito; Ranorex tem versão paga e oferece teste grátis.",
            "B. Todas as quatro ferramentas citadas são gratuitas e open source.",
            "C. Robotium possui somente versão paga com avaliação gratuita.",
            "D. Ranorex é gratuito e Selenium possui somente versão paga.",
            "E. Telerik Test Studio é declarado gratuito e open source, enquanto Robotium não tem licença informada."
          ],
          "answer": "A",
          "explanation": "A aula informa gratuidade e código aberto para Selenium, gratuidade para Robotium e versão paga com teste grátis para Ranorex. Não especifica a licença do Telerik Test Studio. A resposta evita transferir atributos entre ferramentas ou preencher informações ausentes.",
          "topic": "Ferramentas — Licenciamento apresentado"
        },
        {
          "question": "96. Uma organização quer escrever testes Selenium em uma linguagem mencionada na aula. Qual conjunto contém somente exemplos explicitamente listados?",
          "options": [
            "A. Java, Kotlin, Swift e Rust.",
            "B. Python, Rust, Kotlin e C.",
            "C. C++, Swift, JavaScript e Kotlin.",
            "D. Java, C, Rust e Groovy.",
            "E. Java, Python, C#, Ruby e Groovy."
          ],
          "answer": "E",
          "explanation": "A aula cita Java, Perl, JavaScript, PHP, Python, C#, Ruby e Groovy como exemplos de linguagens para Selenium. Todos os itens da alternativa correta pertencem a essa lista. As demais incluem linguagens que não foram mencionadas, independentemente de possibilidades externas.",
          "topic": "Ferramentas — Linguagens citadas para Selenium"
        },
        {
          "question": "97. Um gestor rejeita Ranorex porque a aula o apresenta como adequado somente a iniciantes. Qual correção é sustentada pelo texto?",
          "options": [
            "A. A ferramenta é fácil para iniciantes, mas também oferece IDE completo e APIs abertas para especialistas em automação.",
            "B. A ferramenta é destinada exclusivamente a especialistas e não é fácil de usar.",
            "C. A ferramenta só oferece testes de navegador e não suporta desktop.",
            "D. A ferramenta é gratuita e não possui versão de avaliação.",
            "E. A ferramenta dispensa conhecimento e manutenção em qualquer cenário."
          ],
          "answer": "A",
          "explanation": "Ranorex é descrito como ideal para iniciantes por sua facilidade, mas a mesma descrição menciona IDE completo e APIs abertas para especialistas. Portanto, a adequação a iniciantes não implica exclusividade desse público. A aula ainda destaca cobertura desktop, web e móvel.",
          "topic": "Ferramentas — Públicos e recursos do Ranorex"
        },
        {
          "question": "98. Uma equipe seleciona Robotium e conclui que seus testes serão necessariamente caixa branca porque o framework automatiza procedimentos. Qual ajuste é mais fiel ao material?",
          "options": [
            "A. A conclusão está correta porque todo framework exige análise de código da aplicação.",
            "B. A automação não determina a transparência; Robotium é citado por facilitar a escrita de testes automatizados de caixa preta.",
            "C. Robotium impede qualquer comparação de entradas e saídas.",
            "D. Robotium é apresentado exclusivamente para testes estáticos.",
            "E. Caixa preta só pode ser realizada por pessoas, sem ferramentas."
          ],
          "answer": "B",
          "explanation": "A aula distingue forma de execução e perspectiva de avaliação, além de citar expressamente a facilidade do Robotium para automação de caixa preta. Automatizar procedimentos não implica inspecionar a estrutura interna da aplicação. Assim, o uso do framework não torna o teste necessariamente caixa branca.",
          "topic": "Ferramentas — Robotium e transparência"
        },
        {
          "question": "99. Um analista precisa registrar três associações sem extrapolar o material: aplicação web pelo navegador, Android nativo ou híbrido e ponta a ponta em desktop, web e móvel. Qual mapeamento está correto?",
          "options": [
            "A. Navegador: Robotium; Android: Selenium; três ambientes: Ranorex.",
            "B. Navegador: Ranorex; Android: MC-FIRE; três ambientes: Robotium.",
            "C. Navegador: Selenium; Android: Ranorex; três ambientes: Robotium.",
            "D. Navegador: Selenium; Android: Robotium; três ambientes: Ranorex.",
            "E. Navegador: 5W2H; Android: Robotium; três ambientes: Selenium."
          ],
          "answer": "D",
          "explanation": "Selenium é associado a aplicações web pelo browser; Robotium, a Android com aplicações nativas e híbridas; Ranorex, a testes de ponta a ponta em desktop, web e dispositivos móveis. O mapeamento reproduz as capacidades descritas sem assumir exclusividades ou capacidades adicionais.",
          "topic": "Ferramentas — Comparação de escopos"
        },
        {
          "question": "100. Um plano cita 'Metodologia 5W2H' e pretende detalhar seus componentes e um procedimento de aplicação usando exclusivamente a aula fornecida. Qual postura é rigorosamente adequada?",
          "options": [
            "A. Detalhar os componentes, pois a aula os apresenta junto aos princípios da automação.",
            "B. Tratar 5W2H como uma ferramenta Android com licença gratuita.",
            "C. Reconhecer que o material apresenta apenas o título, sem conteúdo suficiente para detalhar componentes ou procedimento.",
            "D. Identificar 5W2H com Red, Green e Refactor, pois são a mesma metodologia.",
            "E. Afirmar que 5W2H corresponde às cinco fases do ciclo de vida dos testes."
          ],
          "answer": "C",
          "explanation": "O material fornecido contém o título 'Metodologia 5W2H', mas não explica seus elementos ou aplicação. Portanto, uma descrição detalhada dependeria de informação externa. A postura rigorosa é reconhecer esse limite, sem confundir o título com TDD, ferramentas ou fases do ciclo de testes.",
          "topic": "Limites do material — Menção à metodologia 5W2H"
        }
      ]
    }
  ]
};
