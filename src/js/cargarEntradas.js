var $ = require('jquery');
var utils = require('./utils');
var apiClient = require('./api-client');

module.exports = {

    cargar: function(cat){
    	apiClient.list(cat,function(response) {
    		$('.inicio').html("");
    		var html  = '<section>';
			    html += ' <div class="container">';
			    html += '    <h1>Cuentame</h1>';
			    html += '    <h5 class="flow-text">¿Tienes una historia? Pues cuéntanosla.</h5>';
			    html += '    <h5 class="flow-text">¿No tienes nada que contar? Pues valora la de los demás.</h5>';
			    html += ' </div>';
			    html += '</section>';
			    html += '<section class="container listado-entradas"></section>';
			    html += '<section>';
			    html += ' <div class="container center-align">';
			    html += '    <ul class="pagination">';
			    html += '        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>';
			    html += '        <li class="active"><a href="#!">1</a></li>';
			    html += '        <li class="waves-effect"><a href="#!">2</a></li>';
			    html += '        <li class="waves-effect"><a href="#!">3</a></li>';
			    html += '        <li class="waves-effect"><a href="#!">4</a></li>';
			    html += '        <li class="waves-effect"><a href="#!">5</a></li>';
			    html += '        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>';
			    html += '    </ul>';
			    html += ' </div>';
			    html += '</section>';
			    
			    $('.inicio').append(html);
		    	$('.listado-entradas').html(''); // vaciamos la lista
			    for (var i in response) {
			    
			        var entrada = response[i];
			        var posicion = 0;

			        var id           = entrada.id || "";
			        var autor        = entrada.autor || "";
			        var imagen_autor = entrada.imagen_autor || "";
			        var fecha        = entrada.fecha || "";
			        var titulo       = entrada.titulo || "";
			        var texto_corto  = entrada.texto_corto || "";
			        var texto_largo  = entrada.texto_largo || ""; 
			        var nComentarios = entrada.nComentarios || "";
			        var nFavoritos   = entrada.nFavoritos || "";   
			        var categoria    = entrada.categoria || "";
			        var imagen       = entrada.imagen_video || "";
			        
			        if (categoria == 'Videos' && imagen != "") {
			            imagen_video = '<video class="responsive-video" width="100%" controls>';
			            imagen_video += '<source src="' + imagen + '" type="video/mp4"></video>';
			        } else if (imagen != "" ) {
			            imagen_video = '<img class="activator" src="dist/img/' + imagen + '">';
			        } else {
			            imagen_video = '<img class="activator" src="dist/img/noFoto.png">';
			        }
			        
			        if (typeof(Storage) !== "undefined") {
			        	misFavoritos = JSON.parse(localStorage.getItem("misFavoritos"));
	        			posicion = $.inArray(id, misFavoritos); // Utilizamos JQuery por que .indexOf no es compatible con IE
	    														//posicion = misFavoritos.indexOf(id);
	    				if (posicion == -1) {
	    					var favorito = '<i data-id="' + id + '" class="material-icons md-48 favorito no-fav white">thumb_up</i>';
	    				} else {
	    					var favorito = '<i data-id="' + id + '" class="material-icons md-48 favorito white">thumb_up</i>';
	    				}
			        }


			        
			        
			        var html =  '<article class="entrada"><div class="card hoverable"><div class="card-image waves-effect waves-block waves-light">';
			            html += imagen_video;
			            html += '</div><div class="card-content">';
			            html += '<span class="card-title activator grey-text text-darken-4" data-id="' + id + '">' + titulo +'<i class="material-icons right">more_vert</i></span>';
			            html += '<p class="justify-align">' + texto_corto + '</p></div>';
			            //html += '<div class="card-reveal"><span class="card-title grey-text text-darken-4">' + titulo + '<i class="material-icons right">close</i></span></div>';
			            html += '<div class="card-action"><div class="row"><div class="col s12 m12 l12 left-align"><div class="chip">';
			            html += '<img src="dist/img/' + imagen_autor + '" alt="Contact Person">' + autor + '</div>';
			            html += '<p class="fecha-articulo">' + utils.calcularTiempoDosFechas(fecha, new Date()) + '</p>';
			            //html += '<time class="timeago" datetime="2011-12-17T09:24:17Z" title="December 17, 2011">about 1 day ago</time>';
			            html += '</div></div><div class="row"><div class="col s6 m6 l6 right-align">';
			            html += '<div class="chip comentarios">' + nComentarios + '</div></div>';
			            html += '<div class="col s6 m6 l6 right-align">';
			            html += favorito;
			            html += '</div></div></div></div></article>';
			        $('.listado-entradas').append(html);
			    }
		}, function(response){
		        console.error("ERROR", response);
		});

    }
}