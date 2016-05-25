// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			id: 1,
			title: 'Avaliação personalizada',
			text: 'A Avaliação Personalizada Magrass é um instrumento especial que tem praticamente o mesmo valor de um laudo médico. Sendo totalmente baseada em fontes científicas internacionais (O.M.S, Sociedade Brasileira de Cardiologia e o renomado fisiologista Dr. Cooper), ela trás leituras sobre o Índice de Massa Corporal e mostra tecnicamente se existe ou não excesso de peso em relação a estatura, esse dado deve sempre ser analisado em conjunto com a Análise da Composição Corporal, que por sua vez demonstra se existe ou não excesso de gordura corporal. Analisando assim, nossos clientes conseguem compreender que um simples excesso de gordura corporal, muito mais do que atrapalhar sua imagem no espelho, pode afetar a saúde, alterando níveis de colesterol e açúcar sanguíneo.',
			image: 'img/estetica-avaliacao.jpg',
			type: 1
		},{
			id: 2,
			title: 'Consultas nutricionais',
			text: 'Após reconhecer os problemas e traçar os objetivos, é hora de iniciar as ações. O primeiro passo é realizar a Consulta Nutricional Inicial, na qual você irá aprender um pouco mais sobre alimentação saudável e como transformar seu corpo numa máquina de queimar gorduras e calorias. Aqui é importante lembrar que na Magrass ninguém vai pedir para você comer coisas que não gosta. E é justamente aí que vem a melhor parte!',
			image: 'img/estetica-nutricao.jpg',
			type: 1
		},{
			id: 3,
			title: 'Aplicação do Programa Metabólico',
			text: 'Conhecer o Programa Metabólico e nunca mais ter de se preocupar em contar calorias, significa acima de tudo Libertação. Ou seja, na Magrass você irá aprender que para emagrecer você deve comer! Nosso programa vai te ensinar que ingerir os alimentos certos, nas horas certas, jamais passar fome, são alguns dos segredos para conquistar o controle do seu peso, da sua autoestima. E não vá pensando que é só sopa e saladinha, nossos produtos e receitas são de dar água na boca e para todas as ocasiões. E o melhor: são ensinamentos que valem para a vida e para a família toda!',
			image: 'img/estetica-metabolico.jpg',
			type: 2
		},{
			id: 4,
			title: 'Revista do Programa Metabólico',
			text: 'Guardar na memória todos os conceitos e orientações do programa não é muito fácil não! Pois são muitos ensinamentos. Durante a Consulta Nutricional Inicial todos os clientes Magrass recebem gratuitamente da nutricionista da sua unidade um exemplar da Revista do Programa Metabólico. Esse material contém todas as orientações necessárias para lhe ajudar nos momentos mais importantes e prazerosos do dia. A hora de escolher o que comer. Conheça e exija todos os diferenciais que a Magrass tem para te oferecer.',
			image: 'img/estetica-revista.jpg',
			type: 2
		},{
			id: 5,
			title: 'Evolução controlada do tratamento',
			text: 'A cada semana nossa equipe irá cuidar de forma muito especial de você, assim além de poder observar a evolução do seu esforço, receberá durante todo o seu tratamento um apoio integral, aprendendo a enfrentar e resolver as principais dúvidas e dificuldades, fazendo dos ensinamento e mudanças realizadas durante o seu tratamento um presente para o resto da vida.',
			image: 'img/estetica-evolucao.jpg',
			type: 2
		},{
			id: 6,
			title: 'Participação exclusiva no Magrass Clube',
			text: 'Você vai receber uma senha de acesso ao Magrass Clube para navegar à vontade. Todas as receitas de sucesso estão lá e mesmo que você não goste de cozinhar, vai descobrir como são fáceis de fazer. Além disso, o espaço contém outros itens imperdíveis, como vídeos, dicas, sorteios, promoções e programas de pontos.',
			image: 'img/estetica-clube.jpg',
			type: 2
		},{
			id: 7,
			title: 'Cosméticos inteligentes Magrass',
			text: 'Para obter o melhor resultado nas sessões de estética, além de aparelhos de primeira qualidade, a Magrass utiliza também uma linha de cosméticos com alta concentração de ativos. São formulações especiais e inteligentes, feitas para atuar em perfeita sinergia com nossos protocolos e aparelhos.',
			image: 'img/estetica-cosmeticos.jpg',
			type: 2
		},{
			id: 8,
			title: 'Sessões de Termolipo',
			text: 'As sessões de termolipo ajudam na detoxificação corporal, bem como na redução de medidas e na gordura em geral. Quem sofre de retenção de líquido também vai tirar proveito dessas sessões, que além eliminar toxinas, diminuem o inchaço, sendo portanto um poderoso aliado no emagrecimento saudável.',
			image: 'img/estetica-termolipo.jpg',
			type: 2
		},{
			id: 9,
			title: 'Máscaras relaxantes na área dos olhos',
			text: 'Para contribuir com um sono tranquilo e o alívio da ansiedade, durante as sessões de Termolipo nada melhor do que uma máscara para área dos olhos. Ajudam a hidratar a pele e amenizar as marcas de olheiras, além de garantir um momento de relaxamento que você merece desfrutar.',
			image: 'img/estetica-mascara.jpg',
			type: 3
		},{
			id: 10,
			title: 'Sessões de Manthus',
			text: 'O Manthus é um aparelho que mescla Ultra Som com Correntes estéreo dinâmicas. Sua corrente de ultra-som é ótima no tratamento de gordura localizada, pois ela age rompendo as membranas das células de gordura, que depois de liberada, é rapidamente eliminada do corpo por via linfática, com impulso da corrente estéreo dinâmica do aparelho.',
			image: 'img/estetica-manthus.jpg',
			type: 3
		},{
			id: 11,
			title: 'Sessões de Anidro x Medicinal',
			text: 'O anidro x medicinal é uma verdadeira evolução da já conhecida Carboxiterapia. Trata-se de uma técnica muito especial, onde após a aplicação do gás carbônico medicinal, que atua quebrando a gordura, melhorando a circulação e o tônus da pele, são aplicadas manualmente, sem agulhas ou dor, mesclas de ativos naturais, que aceleram ainda mais a quebra e remoção das moléculas de gordura. A sessão também é ótima para quem tem problemas de estria, flacidez e celulite',
			image: '	img/estetica-anidro.jpg',
			type: 3
		}
	];


}