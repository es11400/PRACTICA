var $ = require('jquery');
var apiClient = require('./api-client');
var materialize = require('./materialize/bin/materialize');
var cargarComentarios = require('./cargarComentarios');

function setLoading(inputs){ // antes de enviar la petición
    for (var i = 0; i < inputs.length; i++) {
    	$(inputs[i]).attr("disabled", true);	
    }
}

function unSetLoading(inputs){
	for (var i = 0; i < inputs.length; i++) {
    	$(inputs[i]).attr("disabled", false);	
    }
}

$(".pag_entrada").on("click", "#enviar", function(){
	var EntradaId = $('.favorito').data("id");     
	
	// Validación de inputs
    var inputs = $(".pag_entrada").find("input, textarea");
    //console.log(inputs.length);
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        //console.log(i + " -> " + input);
        if (input.checkValidity() == false || input.value == "") {
            input.focus();
            return false;
        }
    }
	setLoading(inputs);
	var fechaActual = new Date();
	// Creamos el comentario con los datos del formulario.
    var comentario = {
	   			entrada 	: EntradaId,
	   			fecha 		: (fechaActual.getMonth()+1) + "/" + fechaActual.getDate() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds(),
	   			nombre 		: $('#input_nombre').val(),
	   			apellidos 	: $('#input_apellidos').val(),
	   			email		: $('#input_email').val(),
	   			texto 		: $('#input_mensaje').val()
	   		}

    apiClient.saveComentario(comentario, function(response) {
		        console.log("Comentario Insertado");
		        unSetLoading(inputs);
				cargarComentarios.cargar(EntradaId);
				$('.nuevo-comentario-form')[0].reset();
			    $('#modalAnadirComentario').closeModal();
		    }, function() {
		        console.error("ERROR", arguments);
		        unSetLoading(inputs);
		    });
    
});

