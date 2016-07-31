var cargarEntradas = require('./cargarEntradas');
if (typeof(Storage) !== "undefined") {
	if(localStorage.getItem("misFavoritos") === null ){
		var misFavoritos = new Array();		
	} else {
		misFavoritos = JSON.parse(localStorage.getItem("misFavoritos"));
	}
}

/* PARA MOSTRAR EL MENU EN MODO MOVIL */
$(".button-collapse").sideNav();
/* SMOOTHSCROL Y BOTON PARA SUBIR CON EFECTO FADE AL BAJAR */
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.subir').fadeIn();
	} else {
		$('.subir').fadeOut();
	}
	}); 

	$('.subir').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

/* PARA MOSTRAR EL MODAL DE LOGIN */
$('#Acceso, #Acceso_sidenav').on('click', function(){
	$('#modalAcceso').openModal();	
});

/* PARA MOSTRAR EL MODAL DEL REGISTRO */
$('#Registro, #Registro_sidenav').on('click', function(){
	$('#modalRegistro').openModal();	
});

/* MOSTRAMOS LISTADO DE ENTRADAS SEGUN CATEGORIA SELECCIONADA */
$('#categoria_fotos, #categoria_fotos_sidenav').on('click', function(){
	cargarEntradas.cargar("Fotos");
});

$('#categoria_videos, #categoria_videos_sidenav').on('click', function(){
	cargarEntradas.cargar("Videos");
});
/* MARCAMOS/DESMARCAMOS COMO FAVORITOS Y LO ALMACENAMOS O QUITAMOS EN LA LOCALSTORAGE */
$(".listado-entradas").on("click", ".favorito", function(){
    var self = this;
    var EntradaId = $(this).data("id");   
    var posicion = 0;

    if ($(this).hasClass('no-fav')){
    	$(this).removeClass("no-fav");
    	siFavorito = true;
    } else {
    	$(this).addClass("no-fav");	
    	siFavorito = false;
    }

    if (typeof(Storage) !== "undefined") {
    	if (siFavorito) { 
    		console.log("Favorito -> " + EntradaId)
   			misFavoritos.push(EntradaId);
   			localStorage.setItem("misFavoritos", JSON.stringify(misFavoritos));
    	} else {
    		misFavoritos = JSON.parse(localStorage.getItem("misFavoritos"));
    		posicion = misFavoritos.indexOf(EntradaId);
    		if (posicion == -1) {
    			console.log("La entrada no esta en misFavoritos");
    		} else {
    			misFavoritos.splice(posicion,1);
    			localStorage.setItem("misFavoritos", JSON.stringify(misFavoritos));
    		}
    	}
    } else {
    	console.log("Su navegador no soporta WebStorage")
    }

});










