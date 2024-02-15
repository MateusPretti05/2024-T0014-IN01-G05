<img src="../assets/logointeli.png">


# GDD - Game Design Document - Módulo 1 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final_**

## Metamorfose

#### [Davi Abreu da Silveira](https://www.linkedin.com/in/davi-abreu-da-silveira-706323290/)
#### [Fernando Soares de Oliveira](https://www.linkedin.com/in/fernando-soares-de-oliveira-081092292/)
#### Leonardo Ogata Pedrosa
#### Mateus Martins Silveira Pretti
#### Murilo Couto Oliveira
#### Renan Sabino dos Reis
#### Vinicius Gomes Ibiapina




## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução (sprints 1 e 4)

## 1.1. Escopo do Projeto

### 1.1.1. Contexto da indústria (sprints 1 e 4)

  A Meta, anteriormente conhecida como Facebook, é uma das gigantes do setor de tecnologia. Sua operação eficaz e contínua inovação dependem de uma rede de fornecedores, parceiros e colaboradores. Os fornecedores são vitais para o funcionamento diário da Meta, fornecendo desde hardware e software até serviços de infraestrutura de data center. A colaboração com fornecedores confiáveis garante que as operações da Meta sejam executadas de maneira suave e eficiente.
  A empresa também mantém uma variedade de parcerias com empresas e organizações. Por exemplo, associa-se a empresas de publicidade para gerar receita, a desenvolvedores de aplicativos para expandir a funcionalidade de suas plataformas e a organizações sem fins lucrativos para apoiar diversas causas sociais, inclusive apoiando a diversidade de funcionários em empresas. Essas parcerias com organizações sem fins lucrativos e iniciativas de responsabilidade social contribuem para melhorar a imagem da marca da Meta e estabelecer uma reputação positiva. Desse modo, a Meta vem possuindo  vários parceiros em diversas áreas, incluindo empresas de tecnologia, mídia, publicidade e organizações sem fins lucrativos. Alguns exemplos incluem Microsoft, Spotify, Netflix, Visa, Mastercard, entre Projeções e Perspectivas Futurasmuitos outros em diferentes setores e regiões ao redor do mundo.
  Os fornecedores e parceiros agregam valor à Meta de várias maneiras. Eles ajudam a melhorar a eficiência operacional, permitindo que a Meta opere de maneira eficiente e eficaz, minimizando interrupções e maximizando a produtividade.Os parceiros de publicidade e mídia ajudam a Meta a alcançar um público mais amplo e aumentar sua base de usuários. Em troca, a Meta oferece a esses fornecedores e parceiros a oportunidade de trabalhar com uma das empresas de tecnologia mais influentes e de maior porte do mundo. Trata-se de uma relação mutuamente benéfica que impulsiona a inovação e o crescimento em todo o setor de tecnologia.
### Concorrentes
  A Meta, enfrenta uma concorrência acirrada em vários mercados globais. No mercado chinês, por exemplo, o WeChat tem uma presença dominante, principalmente devido às restrições governamentais à entrada de outros aplicativos. No Japão, a plataforma de comunicação Line é uma força a ser reconhecida.
Nos Estados Unidos, a situação é um pouco diferente. A maioria da população possui planos de telefonia móvel que incluem SMS gratuitos, o que limita a predominância da Meta nesse segmento específico.
  O Snapchat é outro concorrente notável, com uma base de usuários substancial espalhada pelo mundo. Nos Estados Unidos, o aplicativo tem 100 milhões de usuários, na Índia 99,8 milhões, na França 23,4 milhões, no Reino Unido 19,8 milhões e na Arábia Saudita 19,1 milhões.
O Telegram, com mais de 800 milhões de usuários, é o aplicativo de comunicação mais popular na Rússia. O Discord, por outro lado, tem uma presença global significativa, com 150 milhões de usuários.
  Finalmente, o TikTok, com mais de 1 bilhão de usuários ativos por mês em todo o mundo, é um dos principais concorrentes da Meta. Essa diversidade de plataformas e aplicativos destaca a dinâmica e a competitividade do mercado de tecnologia e comunicação digital.
### Projeções e Perspectivas Futuras
  A Meta, está em constante busca por inovação em seus produtos. Realiza frequentemente atualizações em seu aplicativo para torná-lo mais atraente aos consumidores e para solucionar problemas comuns enfrentados pelos usuários. Essa abordagem tem fortalecido a posição da Meta no mercado, e é certo que a empresa continuará a inovar em seus produtos.Operando em um mercado em constante evolução, acompanhar as tendências globais é essencial para a Meta. A empresa busca expandir sua atuação para mercados ainda pouco explorados, como Estados Unidos, Japão e China. No entanto, também é fundamental para a Meta consolidar sua posição nos setores onde já é dominante. Dessa forma, a empresa pode manter sua relevância e continuar a crescer.
  A interação entre pessoas e tecnologia, com o objetivo de gerar valor e aumentar a produtividade, é uma tendência que persiste e se fortalece a cada ano. A Meta está comprometida em trazer novas soluções inovadoras para o mercado, contribuindo positivamente para o avanço tecnológico e o bem-estar das pessoas.
  A inclusão e a diversidade no mercado de trabalho são temas de grande relevância e estão se tornando cada vez mais centrais nos negócios. A Meta está comprometida em ampliar a participação de pessoas no mercado de trabalho, buscando colaboradores e fornecedores que compartilhem dessa mesma iniciativa. Esta é uma visão geral da estratégia e dos compromissos da Meta em relação à inovação, expansão de mercado, interação tecnológica e diversidade no local de trabalho.

### 1.1.2. Análise SWOT (sprints 1 e 4)

## FORÇAS (S): 
	Grande base de usuários: A Meta possui uma enorme base de usuários que usam suas redes sociais. No Brasil, cerca de 93,4% da população com idade entre 16 e 64 anos utilizam o WhatsApp, plataforma adquirida pela Meta em 2014, o que equivale a aproximadamente 169 milhões de usuários. Além disso, o app contou com mais de 541 milhões de downloads, sendo o quarto 'app' mais baixado do mundo. A posição parece não ser tão boa, mas o que surpreende é que dos três apps que aparecem à sua frente, dois são da Meta. Em terceiro lugar está o Facebook, que mesmo após tantos anos de sua ascensão continua atraindo muitos novos usuários. No final do ano de 2023, a equipe da Meta tornou pública a informação de que o Facebook contava diariamente com cerca de 2,11 bilhões de usuários ativos. Logo depois do Facebook temos o Instagram, ocupando o segundo lugar dos apps mais baixados em 2023. O Instagram contou com cerca de 829 milhões de downloads, e com mais de dois bilhões de usuários ativos diariamente. Com isso, sua base de usuários é sem dúvidas uma das maiores da internet, ganhando até mesmo do gigante TikTok que aparece em ascensão, porém conquistando 'apenas' cerca de 1 bilhão de usuários ativos diariamente. 

	Grande capacidade de inovação: A Meta, antes mesmo de ser Meta, já foi capaz de revolucionar a maneira como enxergávamos as redes sociais. Antes do Facebook, as redes sociais tinham um conceito muito diferente do que imaginamos hoje. Anos depois eles revolucionaram novamente com a compra do Instagram, por aproximadamente 1 bilhão de dólares. Recentemente nos foi apresentado o Metaverso, sem dúvidas a maior inovação da empresa desde então. Sua capacidade de inovação pode ser observada também pelo sucesso de todas as suas novas funcionalidades que são implementadas em seus apps. 

	Vantagem competitiva: A Meta oferece uma variedade de serviços integrados que atendem às diferentes necessidades e preferências dos usuários. Uma mesma empresa se tornou capaz de oferecer: redes sociais, mensagens, realidade virtual e aumentada, negócios e publicidade. Alguns desses elementos, como as redes sociais e os negócios e publicidade, são apresentados em conjunto.

	Boa cultura organizacional: A cultura organizacional da Meta estimula a criatividade, a colaboração e a experimentação, atraindo talentos de diversas áreas e origens. No caso da Meta, essa cultura parece ser baseada em cinco princípios: dar voz às pessoas, construir conexões e comunidade, atender a todos, promover oportunidades e proteger seus usuários. 

	Forte presença no mercado publicitário: A Meta tem um forte nome no mercado publicitário. Espera-se que o Instagram seja responsável por movimentar cerca de 9,1 bilhões de dólares em anúncios no ano de 2024. O conhecido tráfego pago é acessível, você pode anunciar a sua marca por apenas U$1,00 (R$4,95 no dia em que escrevo isso), o que aumenta ainda mais a gama de personas que podem anunciar.

## FRAQUEZAS:
	Problemas legais: A Meta enfrenta diversos problemas legais, regulatórios e éticos em diversos países, relacionados à privacidade, segurança, concorrência, conteúdo nocivo, desinformação e manipulação de dados dos usuários. Em dezembro de 2022 a Meta concordou em pagar cerca de US$ 725 milhões para encerrar um processo que acusava a empresa de permitir que a Cambridge Analytica e outras empresas de análise de dados tivessem acesso aos dados privados de seus usuários.

	Má reputação: Para muitos usuários a Meta é uma empresa que abusa de seu poder de mercado. Grande parte dessa má reputação da empresa é proveniente dos problemas legais, citados anteriormente, mas recentemente o seu algoritmo passou a também ser alvo de críticas. A Meta foi acusada de fornecer um algoritmo nocivo para a saúde mental de seus usuários, divulgando de maneira desproporcional a padronização da beleza.

	Curto ciclo de vida de seus produtos: A tecnologia está em constante evolução, e os produtos se tornam obsoletos muito rapidamente. A empresa já sofreu com esse curto ciclo de vida de seus produtos. O Facebook, embora ainda conte com muitos usuários, deixou de atrair o público mais jovem, tornando-se um produto nichado, consequentemente perdendo um grande público.

	Desafios na moderação de seus anúncios: Com o sucesso crescente do tráfego pago, as redes sociais se mostraram uma enorme oportunidade para aumentar as vendas. No entanto, essa visibilidade também se mostrou uma grande oportunidade para golpistas. A moderação dos anúncios do Instagram parece não funcionar, e cada vez mais os anúncios maliciosos tomam conta das redes sociais da Meta. Um grande exemplo disso são as casas de apostas virtuais, que, embora ainda sejam contra as leis brasileiras, continuam operando a todo vapor com milhares de promessas falsas. Além das propagandas pagas ao próprio Instagram, algumas dessas propagandas são pagas aos influencers, que são visitados diariamente por milhares de usuários.

	Dependência de publicidade: A Meta depende fortemente da publicidade em suas plataformas, já que seus aplicativos são gratuitos e não possuem muitas opções de compras integradas ao app. 

## AMEAÇAS:
	Maior regulamentação e fiscalização: Os aplicativos da Meta possuem um enorme banco de dados com inúmeras informações de seus usuários. Essas informações são sensíveis e alguns governos podem enxergar isso como uma ameaça aos seus cidadãos. Em caso de qualquer alteração nessas regulamentações, as plataformas da Meta podem sofrer restrições e deixarem de circular em determinadas regiões até que adequem suas diretrizes para a região.

	Forte concorrência: Embora tenha plataformas consolidadas no mercado, a concorrência aumenta a cada dia e novas tendências começam a surgir. É importante mencionar que tudo aquilo que rouba a atenção do usuário pode ser uma concorrente para as redes sociais em geral, mas algo ainda mais perigoso parece se aproximar: novas tendências de redes sociais. Em 2020, a Meta viu suas plataformas serem deixadas de lado, enquanto milhares de novos usuários passavam a gastar seus tempos de ócio no TikTok. Com um modelo de vídeos curtos, o TikTok passou a ditar um novo segmento dentro das plataformas. Como o TikTok a cada dia se tornava uma ameaça mais real, a Meta decidiu integrar o modelo de vídeos curtos no Instagram, com o Reels. Embora a adição seja um sucesso, o TikTok continua assombrando a empresa. 

	Boicotes: Diante desses escândalos de privacidade, a Meta pode virar alvo de boicote e perder grande parte de seus usuários para outras plataformas. Mas há algo ainda mais suscetível a boicotes do que essa questão de privacidade: o Metaverso. Algo muito semelhante vem acontecendo recentemente com as inteligências artificiais de texto e imagens, que foram alvo de diversos protestos importantes.  

	Bloqueador de anúncios: Com grande parte de sua renda tendo origem em propagandas, os bloqueadores de anúncio surgem como uma grande ameaça para a Meta. Em geral, os anunciantes só anunciam se tiverem certeza de que há chances de converter aqueles anúncios em vendas. Essa conversão de anúncios em vendas se torna ineficaz com o uso dos bloqueadores de anúncio.

	Flutuações econômicas: A Meta é sensível a flutuações econômicas globais que podem afetar os orçamentos de publicidade, o poder de compra dos usuários e a estabilidade financeira das empresas que anunciam em suas plataformas. Por depender de publicidade para gerar receita, qualquer grande alteração na economia de um país pode resultar em prejuízo para a Meta. 

## OPORTUNIDADES: 
	Educação online e trabalho remoto: Com o aumento do ensino à distância e do trabalho remoto, a Meta poderia explorar oportunidades para desenvolver ou adquirir plataformas de aprendizado online e ferramentas de colaboração remota, alinhando as mudanças nas tendências de trabalho e educação com suas ofertas de produtos. Vale mencionar que, desde o surto global de COVID-19 em meados de 2020, o mundo passou por uma enorme revolução. Mesmo com as salas de aula presenciais novamente cheias de alunos, muitos professores continuam utilizando plataformas online para a organização de suas tarefas. 

	Mercados emergentes: A Meta pode explorar oportunidades de crescimento em mercados emergentes, onde o acesso à internet ainda está em estágios iniciais e, consequentemente, a adoção das redes sociais está crescendo. Implementar os idiomas desses países pode significar uma disparada à frente dos concorrentes, e captar esses novos usuários pode impulsionar de forma significativa a base de usuários da empresa.

	Expandir suas plataformas: Com tantos novos segmentos surgindo, a Meta poderia expandir suas marcas já consolidadas no mercado e integrar alguns desses segmentos dentro de suas plataformas. Por exemplo: o Tinder é um aplicativo muito forte de namoro, por que não integrar algo semelhante ao Facebook? 

	Parcerias: Com tanta expectativa no futuro do Metaverso, a Meta pode propor parcerias com empresas de diferentes segmentos e trazê-las não apenas para o Metaverso, mas também integrá-las às demais plataformas da Meta. Essas colaborações estratégicas com outras empresas podem abrir novas oportunidades para a Meta. Parcerias em áreas como entretenimento, educação ou saúde digital podem ampliar seu alcance e oferecer experiências mais abrangentes aos usuários.

	Integração de Pagamentos P2P: Facilitar transações financeiras entre usuários em suas plataformas pode ser uma excelente oportunidade. A Meta pode explorar a integração de sistemas de pagamento P2P e tornar o envio de dinheiro mais simples e conveniente. Essa funcionalidade inclusive já foi implementada no WhatsApp, mas ainda necessita de muita burocracia para ser realizada.


### 1.1.3. Descrição da Solução Desenvolvida (sprints 1 e 4)

### Problema a ser resolvido
Necessidade de uma ferramenta que oriente e facilite a  compreensão de todos os passos da jornada de contratação de um  fornecedor META para colaboradores META. Desde o Sourcing  (Primeiro Contato) até o Payment (Pagamento).

 ### Dados disponíveis
● Tecnologias a serem usadas no desenvolvimento do game: CSS; HTML5; JS; GitHub; VS Code; Phaser.

● Macro do game: Decisões que afetam o final; Senso de progressão; Fazer parte de um time; Relação entre causa e efeito da ação em pouco tempo; Menos elementos, mais o essencial; Mais de uma fase; Sem banco de dados; Conteúdo restrito entre grupo e meta; Duração de + ou - 20 minutos; Celular como plataforma de uso; Inglês e Português; Podemos utilizar recursos da META no game (personagens, suas redes sociais, etc.); Recompensa pra aqueles que finalizaram o game.

● Pontos de destaque das reuniões: Inclusão social; Perfil de fornecedor meta; SEEDS: Relacionamento com fornecedores; Engajamento; Diversidade; Sustentabilidade; Game deve ter algum recurso que ajude a engajar a equipe da Meta, UX e UI devem ser um foco no desenvolvimento do game.

### Solução proposta 
A solução proposta é um jogo que simula o procedimento de seleção de  fornecedores para a META. Nele, o jogador passará por cada etapa do processo  de contratação de um parceiro e avalia se o potencial parceiro atende aos  critérios da META, com base nas suas estatísticas como diversidade, ética,  receita entre outros. Com o objetivo de guiar o funcionário por esse processo de uma forma dinâmica e simplificada.
    
### Como a solução proposta deve ser utilizada?
Os colaboradores deverão empregar o jogo como uma ferramenta de orientação acerca do procedimento de contratação de fornecedores para a META, visando  desmistificar a concepção de que se trata de um processo complexo e de difícil  aprendizagem. Durante o jogo, os colaboradores serão conduzidos e fornecidos  com dicas sobre como devem lidar com esse processo, proporcionando, assim, uma maior facilidade no seu aprendizado.

### Benefícios esperados:
 Aumentar engajamento dos funcionários com a empresa e suas 
mecânicas; 
 Facilitar entendimento do processo da contratação;
 Oportunidades de contratação de fornecedor sob o contexto de 
Diversidade;
 Treinamento divertido e ágil;
 Exterminar as dúvidas referentes ao processo de contratação.

### Qual será o critério de sucesso?
 O usuário ter uma experiência satisfatória ao que foi proposto pela Meta além de ficar interessado, e logo, engajado no assunto de contratação de fornecedores ao concluir o jogo. Além disso o jogo deve cumprir seu papel de facilitador divertido e ágil na compreensão do processo de contratação de fornecedores, trazendo a tona a questão das diversidades de forna que não apresentar erros ou o mais próximo possível disso.
 Para avaliar esse sucesso os feedbacks que receberemos  pós lançamento do game, tanto vindos da META, quanto também  vindos da equipe de especialistas do INTELI devem ser positivos e construtivos. Dessa forma, poderemos comparar as experiências do usuário com as suas expectativas e também com as nossas.

### 1.1.4. Proposta de Valor (sprints 1 e 4)
![value proposition.pdf](https://github.com/Inteli-College/2024-T0014-IN01-G05/files/14300608/value.proposition.pdf)

### 1.1.5. Matriz de Riscos (sprints 1 e 4)
![matriz de riscos](https://github.com/Inteli-College/2024-T0014-IN01-G05/assets/158570773/02e8932e-ee7b-4846-8033-9ffe65c82c20)

## 1.2. Requisitos do Projeto (sprints 1 e 2)

*Posicione aqui a lista de requisitos levantados para o projeto, sejam pedidos do parceiro ou invenções do grupo. Descreva-os de forma objetiva, de modo que seja possível entender claramente como implementá-los tecnicamente.*

*ATUALIZE ESTA SEÇÃO SEMPRE QUE ALGUM REQUISITO MUDAR EM SEU PROJETO*

*Exemplo de tabela de requisitos*
\# | Requisito  
--- | ---
1 | O controle do personagem será realizado usando as teclas WASD para navegação pelas fases
2 | O personagem perde uma vida toda vez que tocar em um inimigo ou em algum projétil inimigo
3 | O jogo deve possuir uma tela de abertura para o jogador selecionar se quer jogar sozinho ou em dupla
4 | ...

## 1.3. Público-alvo do Projeto (sprint 2)

*Posicione aqui uma descrição justificada do público-alvo do jogo, em termos demográficos e de preferências/gostos pessoais.*

# <a name="c2"></a>2. Visão Geral do Jogo (sprint 2)

## 2.1. Objetivos do Jogo (sprint 2)

*Descreva o que o jogador deve cumprir para avançar ou concluir o jogo*

## 2.2. Características do Jogo (sprint 2)

### 2.2.1. Gênero do Jogo (sprint 2)

*simulação, RPG, corrida, estratégia, esportes, ação, aventura etc.*  

### 2.2.2. Plataforma do Jogo (sprint 2)

*quanto ao dispositivo: desktop, smartphones, tablets, TV etc.*

*quanto ao sistema: Web, Windows, MacOS, Android, IOS etc.*

### 2.2.3. Número de jogadores (sprint 2)

*1 jogador, 2 jogadores versus, 2 jogadores cooperação, multiplayer etc.*

### 2.2.4. Títulos semelhantes e inspirações (sprint 2)

*Liste e descreva títulos semelhantes e jogos que inspiram e são usados como referência do projeto*

### 2.2.5. Tempo estimado de jogo (sprint 5)

*Ex. O jogo pode ser concluído em 3 horas passando por todas as fases.*

*Ex. cada partida dura até 15 minutos*

# <a name="c3"></a>3. Game Design (sprints 2 e 3)

## 3.1. Enredo do Jogo (sprints 2 e 3)

*Descreva o enredo/história do jogo, criando contexto para os personagens (seção 3.2) e o mundo do jogo (seção 3.3). Uma boa história costuma ter um arco narrativo de contexto, conflito e resolução. Utilize etapas sequenciais para descrever esta história.* 

*Caso seu jogo não possua enredo/história (ex. jogo Tetris), mencione os motivos de não existir e como o jogador pode se contextualizar com o ambiente do jogo.*

## 3.2. Personagens (sprints 2 e 3)

### 3.2.1. Controláveis

*Descreva os personagens controláveis pelo jogador. Mencione nome, objetivos, características, habilidades, diferenciais etc. Utilize figuras (character art, sprite sheets etc.) para ilustrá-los. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Caso não existam personagens (ex. jogo Tetris), mencione os motivos de não existirem e como o jogador pode interpretar tal fato.*

### 3.2.2. Non-Playable Characters (NPC)

*\<opcional\> Se existirem coadjuvantes ou vilões, aqui é o local para descrevê-los e ilustrá-los. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes. Caso não existam NPCs, remova esta seção.*

### 3.2.3. Diversidade e Representatividade dos Personagens

Considerando as personagens do game, analise se estas estão alinhadas ao público-alvo do jogo (seção 1.3), e compare-as dentro da realidade da sociedade brasileira. Por fim, discorra sobre qual é o impacto esperado da escolha dessas personagens.

## 3.3. Mundo do jogo (sprints 2 e 3)

### 3.3.1. Locações Principais e/ou Mapas (sprints 2 e 3)

*Descreva o ambiente do jogo, em que locais ele ocorre. Ilustre com imagens. Se houverem mapas, posicione-os aqui, descrevendo as áreas em acordo com o enredo. Se houverem fases, descreva-as também em acordo com o enredo (pode ser um jogo de uma fase só). Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

### 3.3.2. Navegação pelo mundo (sprints 2 e 3)

*Descreva como os personagens se movem no mundo criado e as relações entre as locações – como as áreas/fases são acessadas ou desbloqueadas, o que é necessário para serem acessadas etc. Utilize listas ou tabelas para organizar esta seção.*

### 3.3.3. Condições climáticas e temporais (sprints 2 e 3)

*\<opcional\> Descreva diferentes condições de clima que podem afetar o mundo e as fases, se aplicável*

*Caso seja relevante, descreva como o tempo passa, se ele é um fator limitante ao jogo (ex. contagem de tempo para terminar uma fase)*

### 3.3.4. Concept Art (sprint 2)

*Inclua imagens de Concept Art do jogo que ainda não foram demonstradas em outras seções deste documento. Para cada imagem, coloque legendas, como no exemplo abaixo.*

<img src="../assets/concept1.jpg">

Figura 1: detalhe da cena da partida do herói para a missão, usando sua nave

### 3.3.5. Trilha sonora (sprint 3)

*Descreva a trilha sonora do jogo, indicando quais músicas serão utilizadas no mundo e nas fases. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

*Exemplo de tabela*
\# | titulo | ocorrência | autoria
--- | --- | --- | ---
1 | tema de abertura | tela de início | própria
2 | tema de combate | cena de combate com inimigos comuns | Hans Zimmer
3 | ... 

## 3.4. Inventário e Bestiário (sprint 3)

### 3.4.1. Inventário

*\<opcional\> Caso seu jogo utilize itens ou poderes para os personagens obterem, descreva-os aqui, indicando títulos, imagens, meios de obtenção e funções no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | item |  | como obter | função | efeito sonoro
--- | --- | --- | --- | --- | ---
1 | moeda | <img src="../assets/coin.png"> | há muitas espalhadas em todas as fases | acumula dinheiro para comprar outros itens | som de moeda
2 | madeira | <img src="../assets/wood.png"> | há muitas espalhadas em todas as fases | acumula madeira para construir casas | som de madeiras
3 | ... 

### 3.4.2. Bestiário

*\<opcional\> Caso seu jogo tenha inimigos, descreva-os aqui, indicando nomes, imagens, momentos de aparição, funções e impactos no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | inimigo |  | ocorrências | função | impacto | efeito sonoro
--- | --- | --- | --- | --- | --- | ---
1 | robô terrestre | <img src="../assets/inimigo2.PNG"> |  a partir da fase 1 | ataca o personagem vindo pelo chão em sua direção, com velocidade constante, atirando parafusos | se encostar no inimigo ou no parafuso arremessado, o personagem perde 1 ponto de vida | sons de tiros e engrenagens girando
2 | robô voador | <img src="../assets/inimigo1.PNG"> | a partir da fase 2 | ataca o personagem vindo pelo ar, fazendo movimento em 'V' quando se aproxima | se encostar, o personagem perde 3 pontos de vida | som de hélice
3 | ... 

## 3.5. Gameflow (Diagrama de cenas) (sprint 2)

*Posicione aqui seu "storyboard de programação" - o diagrama de cenas do jogo. Indique, por exemplo, como o jogo começa, quais opções o jogador tem, como ele avança nas fases, quais as condições de 'game over', como o jogo reinicia. Seu diagrama deve representar as classes, atributos e métodos usados no jogo.*

## 3.6. Regras do jogo (sprint 3)

*Descreva aqui as regras do seu jogo: objetivos/desafios, meios para se conseguir alcançar*

*Ex. O jogador deve pilotar o carro e conseguir terminar a corrida dentro de um minuto sem bater em nenhum obstáculo.*

*Ex. O jogador deve concluir a fase dentro do tempo, para obter uma estrela. Se além disso ele coletar todas as moedas, ganha mais uma estrela. E se além disso ele coletar os três medalhões espalhados, ganha mais uma estrela, totalizando três. Ao final do jogo, obtendo três estrelas em todas as fases, desbloqueia o mundo secreto.*  

## 3.7. Mecânicas do jogo (sprint 3)

*Descreva aqui as formas de controle e interação que o jogador tem sobre o jogo: quais os comandos disponíveis, quais combinações de comandos, e quais as ações consequentes desses comandos. Utilize listas ou tabelas para organizar esta seção.*

*Ex. Em um jogo de plataforma 2D para desktop, o jogador pode usar as teclas WASD para mecânicas de andar, mirar para cima, agachar, e as teclas JKL para atacar, correr, arremesar etc.*

*Ex. Em um jogo de puzzle para celular, o jogador pode tocar e arrastar sobre uma peça para movê-la sobre o tabuleiro, ou fazer um toque simples para rotacioná-la*

# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo (sprint 1)

*Descreva e ilustre aqui o desenvolvimento da sua primeira versão do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.2. Desenvolvimento básico do jogo (sprint 2)

*Descreva e ilustre aqui o desenvolvimento da versão básica do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.3. Desenvolvimento intermediário do jogo (sprint 3)

*Descreva e ilustre aqui o desenvolvimento da versão intermediária do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.4. Desenvolvimento final do MVP (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e planos futuros.*

## 4.5. Revisão do MVP (sprint 5)

*Descreva e ilustre aqui o desenvolvimento dos refinamentos e revisões da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar.*

# <a name="c5"></a>5. Testes (sprint 4)

## 5.1. Casos de Teste

*Descreva nesta seção os casos de teste comuns que podem ser executados a qualquer momento para testar o funcionamento e integração das partes do jogo. Utilize tabelas para facilitar a organização.*

*Exemplo de tabela*
\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | posicionar o jogo na tela de abertura | iniciar o jogo desde seu início | o jogo deve iniciar da fase 1
2 | posicionar o personagem em local seguro de inimigos | aguardar o tempo passar até o final da contagem | o personagem deve perder uma vida e reiniciar a fase
3 | ...

## 5.2. Testes de jogabilidade (playtests) (sprint 4)

### 5.2.1 Registros de testes

*Descreva nesta seção as sessões de teste/entrevista com diferentes jogadores. Registre cada teste conforme o template a seguir.*

Nome | João Jonas (use nomes fictícios)
--- | ---
Já possuía experiência prévia com games? | sim, é um jogador casual
Conseguiu iniciar o jogo? | sim
Entendeu as regras e mecânicas do jogo? | entendeu as regras, mas sobre as mecânicas, apenas as essenciais, não explorou os comandos complexos
Conseguiu progredir no jogo? | sim, sem dificuldades  
Apresentou dificuldades? | Não, conseguiu jogar com facilidade e afirmou ser fácil
Que nota deu ao jogo? | 9.0
O que gostou no jogo? | Gostou  de como o jogo vai ficando mais difícil ao longo do tempo sem deixar de ser divertido
O que poderia melhorar no jogo? | A responsividade do personagem aos controles, disse que havia um pouco de atraso desde o momento do comando até a resposta do personagem

### 5.2.2 Melhorias

*Descreva nesta seção um plano de melhorias sobre o jogo, com base nos resultados dos testes de jogabilidade*

# <a name="c6"></a>6. Conclusões e trabalhos futuros (sprint 5)

*Escreva de que formas a solução do jogo atingiu os objetivos descritos na seção 1 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com plano de ações para serem implementadas no jogo. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para futuros desenvolvimentos.*

*Relacione também quaisquer ideias que o grupo tenha para melhorias futuras*

# <a name="c7"></a>7. Referências (sprint 5)

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

LUCK, Heloisa. Liderança em gestão escolar. 4. ed. Petrópolis: Vozes, 2010. <br>
SOBRENOME, Nome. Título do livro: subtítulo do livro. Edição. Cidade de publicação: Nome da editora, Ano de publicação. <br>

INTELI. Adalove. Disponível em: https://adalove.inteli.edu.br/feed. Acesso em: 1 out. 2023 <br>
SOBRENOME, Nome. Título do site. Disponível em: link do site. Acesso em: Dia Mês Ano

# <a name="c8"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*
