import IPost from '../../posts/interfaces/post.interface';

export const mockedPosts: IPost[] = [
  {
    id: 1,
    title: 'Olímpiada do Conhecimento',
    category: {
      id: 1,
      name: 'Olímpiada do Conhecimento',
      slug: 'olimpiada',
      created_at: new Date(),
      updated_at: new Date(),
    },
    subtitle:
      'O que é a Olimpíada do Conhecimento? Como é o processo de treinamento dos competidores? Isso e muito mais, vamos ver no decorrer deste post, sobre essa competição que tem gerado um impacto na vida de muitos competidores que passam por ela.',
    content:
      '<h3>O que é a Olímpiada do Conhecimento?</h3>  <p>		É uma competição de educação profissional. Estados de todo o Brasil, seleciona um ou mais competidores para cada 		ocupação participante dessa disputa para concorrer a tão sonhada vaga para a competição internacional WorldSkills. 	</p>	<p>		A Olímpiada do Conhecimento é também conhecida como a seletiva nacional para WorldSkills, que é a maior competição		de educação profissional do mundo. Reconhecida por inspirar diversos jovens competidores ao redor do mundo, testando		suas habilidades e conhecimentos de acordo com sua ocupação com um padrão-ouro de excelência.	</p>  <h3>Como é o processo de treinamento dos competidores?</h3>	<p>		 Para cada ocupação dentro da Olímpiada do Conhecimento existe um processo para os treinamentos. Em geral cada 		 competidor(a) tem um período de 2 anos em preparo para a competição, onde passa por um série 		 de treinamentos intensivos, com provas e simulados para testar suas habilidades e conhecimentos na área 		 da sua ocupação. 	</p>	<p>		Todo esse processo não seria possível sem um treinador(a). O treinador é uma parte fundamental para o desenvolvimento		do competidor durante a prepação para a Olímpiada do Conhecimento. Por isso, cada competidor(a) é acompanhado por um treinador(a) que o auxília com métodos, estrátegias, técnicas		para que possa estar capacitado e pronto para a disputa.	</p>  <h3>Curiosidades</h3>	<p>		A 43ª WorldSkills Competition aconteceu no Anhembi Parque, São Paulo, Brasil, de 11 a 16 de agosto de 2015, sendo		a única edição que aconteceu na América Latina.	</p>	<p>	  A Olímpiada do Conhecimento era um evento geral que acontecia durante 1 semana em um local, que reunida os 		competidores de todos os estados participantes.</p>	<p>		Intercâmbios internos entre os estados aconteciam para realização de pequenas disputas em 	  preparação para Olímpiada do Conhecimento, mas com o período da pademia ficou suspenso por um tempo.	</p>	<h3>Conclusão</h3>	<p>		Nesse post conhecemos um pouco sobre a Olímpiada do Conhecimento e o que ela representa para todos que já tiveram		a oportunidade de participar dela. É uma experiência única, que só quem viveu saber o quanto especial se torna 		em nossas vidas.	</p>	<p>		No próximo post vou contar como eu (Leticia) e o Mikael nos tornamos competidores e como foi nossa experiência nessa		competição.	</p>',
    previewContent:
      '<p>O que é a Olimpíada do Conhecimento? Como é o processo de treinamento dos competidores? Isso e muito mais, vamos ver no decorrer deste post, sobre essa competição que tem gerado um impacto na vida de muitos competidores que passam por ela.</p>',
    slug: 'olimpiada-do-conhecimento',
    previewImagePath:
      '../../../../../assets/img/olimpiada-do-conhecimento.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Techknowledge: Ponto Zero',
    category: {
      id: 1,
      name: 'História do Techknowledge',
      slug: 'techknowledge',
      created_at: new Date(),
      updated_at: new Date(),
    },
    subtitle:
      'Como surgiu a ideia de criar esse blog, qual o objetivo dele? Qual a  finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!',
    content:
      '<p>Uma das melhores formas (se não a melhor) de aprender um assunto é ensinando. Transmitindo o conhecimento que nos foi passado. E nos vimos na necessidade de compartilhar nossa experiência, tanto como competidores da Olimpíada do Conhecimento, quanto como desenvolvedores. Demonstrar quais são os problemas que encontramos no dia-a-dia e como os resolvemos. Dessa necessidade, surgiu o Techknowledge!</p><h3>Por que "Techknowledge"?</h3><p>Vamos começar pelo nome, claro…</p><p>"Tech" faz referência ao termo em inglês, que quer dizer "Tecnologia". A outra parte do nome, "Knowledge", que dizer <b>conhecimento</b>. À primeira vista, pode parecer estranho, mas é fácil de se acostumar, prometo ;)</p><p>Eu e a Letícia brincávamos durante o período da competição, nos autoproclamamos "atletas do conhecimento", justamente por todo o contexto da olimpíada e o tempo dos treinos, que, de uma forma ou de outra, nos tornavam atletas. </p> <p>   Logo, a palavra "conhecimento" já era uma certeza nossa em relação ao nome do blog. E como queremos falar sobre tecnologia, programação e afins, um nome "Tech" vem a calhar (além de ser bem legal, convenhamos). </p> <h3>Planejamento</h3> <p>   Nós sabíamos que seria necessário reservar um tempo fixo durante a semana para dedicarmos ao blog. Até porque planejar uma aplicação exige tempo de pesquisa, modelagem, testes e muito estudo. Então, semanalmente, combinamos de nos reunir em uma <i>call</i> no Google Meeting, todo sábado. </p> <p>   A hora podia variar, mas estabelecemos que 3 horas por semana seria um tempo adequado e que encaixaria bem tanto na minha agenda, quanto da Letícia. </p> <p>   Já imaginamos quais seriam as fases do planejamento da aplicação, que incluía levantar os requisitos, buscar referências, modelar banco de dados, escolher tecnologias, fazer protótipos de baixa, média e alta fidelidade, entre outros itens. Isso apenas para estabelecer qual seria o terreno do qual esse blog iria crescer. Pois uma professora nossa, chamada Leyla Carolyne (ainda vamos mencionar ela bastante em outros posts) nos disse uma vez que 80% do tempo de construção de um software é na fase no-code, e os outros de 20% que são, de fato, implementação. </p> <h3>Referências</h3> <p>   Nos dedicamos durante 3 meses para os passos que mencionamos acima. Fizemos todo o design das páginas, nos inspirando na estrutura do <a href="https://stackoverflow.blog/">Blog do Stack Overflow</a> e da <a href="https://blog.rocketseat.com.br/?">Rocketseat</a>, além do    <a href="https://www.joshwcomeau.com/">Blog do Josh</a>, que, em minha humilde opinião, é o mais bonito visualmente. </p> <h3>O que vem a seguir?</h3> <p>   Esta é a versão 1.0.0 de nosso blog, nosso MVP, então a organização de alguns itens do layout e a estilização das páginas não estão <b>ainda</b> em sua forma final, na que modelamos no Figma.   Mas estamos muito orgulhosos de pôr ele no ar, de ver nosso projeto ganhando vida e crescendo cada vez mais! </p> <p>   Esse é apenas um dos muitos posts que vamos documentar nossa experiência durante a criação do blog, explicando o porquê de cada decisão relacionada à negócio, design, tecnologias utilizadas e muito mais! </p>',
    previewContent:
      '<p>Como surgiu a ideia de criar esse blog, qual o objetivo dele? Qual a  finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!</p>',
    slug: 'techknowledge-ponto-zero',
    previewImagePath: '../../../../../assets/img/techknowledge.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Quem somos nós?',
    category: {
      id: 1,
      name: 'História do Techknowledge',
      slug: 'techknowledge',
      created_at: new Date(),
      updated_at: new Date(),
    },
    subtitle:
      'Quem é a Leticia e o Mikael? São dois aventureiros? São dois alíenigenas de outro planeta? Ou são só dois devs 		 que gostam muito de tecnologia? 		 Vem descobrir um pouco sobre a jornada desses dois jovens devs.',
    content:
      "<h3>Quem é você Leticia Dias?</h3>  <p>Meu nome é Leticia Dias, sou desenvolvedora Full Stack no SENAI Alagoas e medalhista de bronze na seletiva nacional WorldSkills Shanghai 2022 		 na ocupação de Tecnologias Web! Também sou uma jovem aventureira apaixonada por tecnologia, astronomia, artes, universo geek, 		 café e chá. Gosto de explorar, aprender e compartilhar minha jornada com as pessoas e em meu tempo livre 		 passar um tempo com os amigos e a família.</p> <p>Para entrar em contato, aqui está meu Linkedin: <a href='https://www.linkedin.com/in/leticia-dia/' target='_blank'>https://www.linkedin.com/in/leticia-dia/</a></p>	<h3>Quem é você Mikael Ribeiro?</h3>  <p>		Meu nome é Mikael Ribeiro Simões, sou de Maceió, Alagoas - um lugar bem quente, inclusive. 		Sou Desenvolvedor Full Stack, medalhista de ouro na Seletiva Nacional da WorldSkills Shanghai 2022 na ocupação 		Soluções de Software para Negócios, Especialista em Desenvolvimento Web e dono de um cachorro vira-lata chamado 		Cadinho :)   	</p>	<p>		Não gosto muito de café, meio que o oposto do que um programador diria né, mas... 		temos que aprender a sobreviver às noites frias mesmo sem cafeína, não é mesmo?	</p>	<p>		Sou fã de astronomia e ainda creio que vamos dominar Marte um dia, inclusive se Elon Musk 		quiser me dar uma carona, não tenho nenhuma objeção!	</p><p>Para mais informações, aqui está meu Linkedin: <a href='https://www.linkedin.com/in/mikael-ribeiro/' target='_blank'>https://www.linkedin.com/in/mikael-ribeiro/</a></p>",
    previewContent:
      '<p class="subtitle">		 Quem é a Leticia e o Mikael? São dois aventureiros? São dois alíenigenas de outro planeta? Ou são só dois devs 		 que gostam muito de tecnologia? 		 Vem descubrir um pouco sobre a jornada desses dois jovens devs.   	</p>',
    slug: 'quem-somos-nos',
    previewImagePath: '../../../../../assets/img/quem-somos-nos.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
