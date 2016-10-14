var $ = require('jquery');
var utils = require('./utils');
var apiClient = require('./api-client');



module.exports = {

    cargar: function(entradaId){
    	apiClient.listComentarios(entradaId,function(response) {
    		
    		$('.ver-comentarios').html("");
    		var html  = '<div class="col s12 m12 l12">';
    			html += '	<h2>Comentarios</h2><a id="anadirComentario" href="#">Añadir comentario</a>';
    			html += '	<div class="listado-comentarios"></div>';
    			html += '</div>';
    		$('.ver-comentarios').append(html);
    		if ( response.length > 0 ) {
    			for (var i in response) {
			    
			    var comentario = response[i];
		        var posicion = 0;
                var fechaAMostrar = utils.calcularTiempoDosFechas(comentario.fecha, new Date());    
                    
		        var html  = '<div class="row">';
		        	html += '	<div class="col s12 m8 l8">';
		        	html += '		<p>' + comentario.texto + '</p>';
		        	html += '	</div>';
		        	html += '	<div class="col s12 m8 l8">';
		        	html += '		<p>' + comentario.nombre + ' ' + comentario.apellidos + '</p>';
		        	html += '		<p>' + comentario.email + '</p>';
		        	html += '		<p class="fecha-articulo"><time datatime="' + comentario.fecha + '">' + fechaAMostrar + '</time></p>';
		        	html += '	</div>';
		        	html += '</div>';
		        	html += '<div class="divider"></div>';
		        	
		        $('.listado-comentarios').append(html);
			    }
    		} else {
    			var html  = '<div class="row">';
		        	html += '	<div class="col s12 m8 l8">';
		        	html += '		<h6>La entrada no tiene comentarios. ¿ Quieres ser el primero ?</h6>';
		        	html += '	</div>';
		        	html += '</div>';
		        	
    			$('.listado-comentarios').append(html);
    		}
    	}, function(response){
    		var html  = '<div class="row">';
	        	html += '	<div class="col s12 m8 l8">';
	        	html += '		<h6>Ha ocurrido un error con el servidor, intentelo más tarde</h6>';
	        	html += '	</div>';
	        	html += '</div>';
		        	
    			$('.listado-comentarios').append(html);
	        console.error("ERROR", response);
		}, function(response){ 
			$('.progress').show();
		}, function(response){
			$('.progress').hide();
		});
    }
 }