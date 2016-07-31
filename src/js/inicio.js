var cargarEntradas = require('./cargarEntradas');
var cargarDatosEntrada = require("./cargarDatosPrueba");

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
} else { 
    console.error("El navegador no soporta Web Storage");
}