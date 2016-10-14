var $ = require('jquery');
var apiClient = require('./api-client');
//var cargarComentarios = require('./cargarComentarios');


module.exports = {

    cargar: function(entradaId){
    	apiClient.entrada(entradaId,function(response) {

    		if (typeof(Storage) !== "undefined") {
	        	misFavoritos = JSON.parse(localStorage.getItem("misFavoritos"));
	        	posicion = $.inArray(entradaId, misFavoritos);// Utilizamos JQuery por que .indexOf no es compatible con IE 
				//posicion = misFavoritos.indexOf(entradaId);
				if (posicion == -1) {
					var favorito = '<i data-id="' + entradaId + '" class="material-icons md-48 favorito no-fav white">thumb_up</i>';
				} else {
					var favorito = '<i data-id="' + entradaId + '" class="material-icons md-48 favorito white">thumb_up</i>';
				}
	        }
		    if (response.categoria == 'Videos' && response.imagen_video != "") {
	            imagen_video = '<img class="activator" src="dist/img/noFoto.png">';
		    } else if (response.imagen_video != "" ) {
	            imagen_video = '<img class="activator" src="dist/img/' + response.imagen_video + '">';
	        } else {
	            imagen_video = '<img class="activator" src="dist/img/noFoto.png">';
	        }

    		var html =  '<section class="container">';
				html += '		<h2 class="header">' + response.titulo + '</h2>';
				html += '		<div class="card">';
				html += '			<div class="card-image">';
				html += imagen_video;
				html += '			</div>';
				html += '			<div class="card-stacked">';
				html += '				<div class="card-content">';
				html += '					<div class="row">';
				html += '						<div class="col s12 m12 l12 left-align">';
				html += '							<div class="chip">';
	            html += '								<img src="dist/img/' + response.imagen_autor + '" alt="Contact Person">' + response.autor;
	            html += '							</div>';
 	           html += '							<p class="fecha-articulo">' + response.fecha + '</p>';
	            html += '						</div>';
	            html += '					</div>';
	            html += '					<div class="row">';
	            html += '						<div class="col s6 m6 l6 right-align">';
	            html += '							<div class="chip comentarios">' + response.nComentarios + '</div>';
	            html += '						</div>';
	            html += '						<div class="col s6 m6 l6 right-align">';
	            html += 								favorito;
	            html += '						</div>';
	            html += '					</div>';
	            html += '				</div>';
				html += '			</div>';
				html += '		</div>';
				html += '	</div>';
				html += '<div class="card">';
				html += '	<div class="card-content ">';
				html += response.texto_largo;
				html += '	</div>';
				html += '	<div class="mostrarcomentarios">';
				html += '		<div class="progress">';
      			html += '			<div class="indeterminate"></div>';
  				html += '		</div>';
				html += '		<div class="ver-comentarios card-action">';
				//html += '		Comentarios';
				html += '		</div>';
				html += '	</div>';
				html += '</div>';
    			
    			html += '</section>'


    		$('.pag_entrada').append(html);

    	}, function(response){
	        console.error("ERROR", response);
		}, function(response){
			console.log("Completo");
			// var options = [ {selector: '.ver-comentarios', offset: 800, callback: function(el) { 
			// console.log("fire");
			// var EntradaId = $('.favorito').data("id");   
			// $('.ver-comentarios').fadeIn(3500);
			// cargarComentarios.cargar(EntradaId); } } ]; 

			// Materialize.scrollFire(options); 
		});

    }

 }