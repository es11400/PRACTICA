var $ = require('jquery');
var apiClient = require('./api-client');

module.exports = {

    cargar: function(){
		var fechaActual = new Date();

			// Entrada 1 
		    var entrada = {
		    	autor 			: 'Carlos Castaño',
			    imagen_autor	: 'avatar_11400es.png',
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título primera entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '3',
			    nFavoritos 		: '2',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto1.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 2
		    var entrada = {
		    	autor 			: "Bugs",
			    imagen_autor	: "",
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds()-30,
			    titulo 			: "Un Pedazo de Conejo",
			    texto_corto 	: "Esta es la historia de un conejo del que no tendriamos cazerola pa guisarlo con arroz...",
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: "2",
			    nFavoritos 		: "0",
			    categoria 		: "Videos",
			    imagen_video 	: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 3 
		    var entrada = {
		    	autor 			: 'Carlos Castaño',
			    imagen_autor	: 'avatar_11400es.png',
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes()-2 + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título tercera entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto2.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 4
		    var entrada = {
		    	autor 			: 'Arturo Perez',
			    imagen_autor	: 'avatar.png',
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes()-10 + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título cuarta entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '3',
			    nFavoritos 		: '2',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto3.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 5 
		    var entrada = {
		    	autor 			: 'Mercedes Fernández',
			    imagen_autor	: '',
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() - 1 + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título quinta entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto5.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 6 
		    var entrada = {
		    	autor 			: 'Carlos Castaño',
			    imagen_autor	: 'avatar_11400es.png',
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() - 2 + ":" + fechaActual.getMinutes() - 23 + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Mecano',
			    texto_corto 	: 'y no los que cantaban...',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Videos',
			    imagen_video 	: 'http://techslides.com/demos/sample-videos/small.mp4'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 7 
		    var entrada = {
		    	autor 			: 'Arturo Fernández',
			    imagen_autor	: '',
			    fecha 			: fechaActual.getDate() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() - 2 + ":" + fechaActual.getMinutes() - 35 + ":" + fechaActual.getSeconds() - 10,
			    titulo 			: 'Título septima entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto6.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 8
		    var entrada = {
		    	autor 			: 'Mercedes Fernández',
			    imagen_autor	: '',
			    fecha 			: fechaActual.getDate() - 1 + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título octava entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto1.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 9 
		    var entrada = {
		    	autor 			: 'Ignacio Castaño',
			    imagen_autor	: '',
			    fecha 			: fechaActual.getDate() - 1 + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() - 10 + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título novena entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto2.jpg'
		    };

		    apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });

		    // Entrada 10 
		    var entrada = {
		    	autor 			: 'Pepito Pérez',
			    imagen_autor	: '',
			    fecha 			: fechaActual.getDate() - 10 + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds(),
			    titulo 			: 'Título decima entrada',
			    texto_corto 	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsam esse rerum impedit, consectetur dolores maiores cumque eius soluta veritatis numquam tenetur natus harum provident voluptatum debitis? Mollitia perspiciatis, numquam?',
			    texto_largo 	: '<p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p><p class="justify-align flow-text"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ad, reprehenderit omnis accusantium sunt voluptatem, necessitatibus eaque totam, esse libero dolor minima maxime. Magnam doloribus, est consequatur explicabo accusamus similique, ipsa.</p>',
			    nComentarios 	: '0',
			    nFavoritos 		: '0',
			    categoria 		: 'Fotos',
			    imagen_video 	: 'Foto3.jpg'
		    };

			apiClient.save(entrada, function(response) {
		        console.log("Insertada");
		    }, function() {
		        console.error("ERROR", arguments);
		    });
	   }
	}
    