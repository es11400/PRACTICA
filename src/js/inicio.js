var cargarEntradas = require('./cargarEntradas');
var cargarDatosEntrada = require("./cargarDatosPrueba");

if (typeof(Storage) !== "undefined") {
    
    if(localStorage.getItem("DatosInicialesCuentame") == "1") {
        console.log("Tiene datos demo - cargamos los que tenemos");
        cargarEntradas.cargar("");
    } else {
        console.log("No tenemos datos cargamos algunos y almacenamos la variable.")
        localStorage.setItem("DatosInicialesCuentame", "1");       
        cargarDatosEntrada.cargar();
        cargarEntradas.cargar("");
    }
    

//var size = Number(localStorage.getItem("pageSize"));
} else { 
    console.error("El navegador no soporta Web Storage");
}