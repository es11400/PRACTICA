var $ = require('jquery');
require('./form');
var utils = require('./utils');
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
				html += 				imagen_video;
				html += '			</div>';
				html += '			<div class="card-stacked">';
				html += '				<div class="card-content">';
				html += '					<div class="row">';
				html += '						<div class="col s12 m12 l12 left-align">';
				html += '							<div class="chip">';
	            html += '								<img src="dist/img/' + response.imagen_autor + '" alt="Autor">' + response.autor;
	            html += '							</div>';
	            html += '						</div>';
	            html += '					</div>';
	            html += '					<div class="row">';
	            html += '						<p class="fecha-articulo">' + utils.calcularTiempoDosFechas(response.fecha, new Date()) + '</p>';
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
				html += 		response.texto_largo;
				html += '	</div>';
				html += '		<div class="progress">';
      			html += '			<div class="indeterminate"></div>';
  				html += '		</div>';
				html += '		<div class="ver-comentarios card-action">';
				html += '		</div>';
				html += '</div>';
    			html += '</section>';
				html += '<div id="modalAnadirComentario" class="modal bottom-sheet modalAñadirComentario">';
				html += '	<div class="modal-content">';
				html += '		<h4>Añadir comentario</h4>';
				//html += '		<hr>		';
				html += '		<div class="row">';
    			html += '			<form class="nuevo-comentario-form col s12">';
      			html += '				<div class="row">';
        		html += '					<div class="input-field col s12 m6 l4">';
	          	html += '						<input id="input_nombre" type="text" class="validate">';
	          	html += '						<label for="input_nombre">Nombre</label>';
        		html += '					</div>';
        		html += '					<div class="input-field col s12 m6 l4">';
          		html += '						<input id="input_apellidos" type="text" class="validate">';
	          	html += '						<label for="input_apellidos">Apellidos</label>';
	        	html += '					</div>';
	        	html += '					<div class="input-field col s12 m12 l4">';
	          	html += '						<input id="input_email" type="email" class="validate">';
	          	html += '						<label for="input_email">Email</label>';
        		html += '					</div>';
        		html += '					<div class="input-field col s12">';
	          	html += '						<textarea id="input_mensaje" length="120" class="materialize-textarea"></textarea>';
	          	html += '						<label for="input_mensaje">Mensaje</label>';
        		html += '					</div>';
	      		html += '				</div>';
	      		html += '				<button id="enviar" class="btn waves-effect blue">Enviar';
    			html += '					<i class="material-icons right">send</i>';
  				html += '				</button>';
	    		html += '			</form>';
	  			html += '		</div>';
				html += '	</div>';
				html += '</div>';


    		$('.pag_entrada').append(html);

    	}, function(response){
	        console.error("ERROR", response);
		}, function(response){
			console.log("Completo");
		});

    }

 }