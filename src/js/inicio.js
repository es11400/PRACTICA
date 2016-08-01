var cargarEntradas = require('./cargarEntradas');
var cargarDatosPrueba = require("./cargarDatosPrueba");

if (typeof(Storage) !== "undefined") {
    
    if(localStorage.getItem("DatosInicialesCuentame") == "1") {
        console.log("Tiene datos demo - cargamos los que tenemos");
        cargarEntradas.cargar("all");
    } else {
        console.log("No tenemos datos cargamos algunos y almacenamos la variable.")
        localStorage.setItem("DatosInicialesCuentame", "1");       
        cargarDatosPrueba.cargar();
        cargarDatosPrueba.cargarComentarios();
        cargarEntradas.cargar("all");
    }
} else { 
    console.error("El navegador no soporta Web Storage");
}