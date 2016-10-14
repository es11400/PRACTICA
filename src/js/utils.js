//var $ = require('jquery');


module.exports = {

    calcularTiempoDosFechas: function(date1, date2){
    	var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    	var Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        start_actual_time = new Date(date1);
        end_actual_time = new Date(date2);
        //console.log("Date1 -> " + date1 + "(" + start_actual_time + ") - Date2 -> " + date2 + "(" + end_actual_time + ")");
        var diff = end_actual_time - start_actual_time;
        
        var diffSeconds = diff/1000;
        var HH = Math.floor(diffSeconds/3600);
        var MM = Math.floor(diffSeconds%3600)/60;
        //console.log("Horas -> " + HH + " | Minutos -> " + MM + " | Segundos -> " + diffSeconds);
        var Resultado = "";
        //var formatted = ((HH < 10)?("0" + HH):HH) + ":" + ((MM < 10)?("0" + MM):MM)
        //console.log(formatted);
        if (diffSeconds < 60 ) { // Menos de un minuto mostramos X segundos
        	Resultado = Math.round(diffSeconds) + " Segundo/s.";
        } else if(diffSeconds < 3600 ) { // Menos de una hora mostramos X minutos
        	Resultado = Math.round(MM) + " Minuto/s.";
        } else if (diffSeconds < 86400 ) { // Menos de un día mostramos X horas 
    		Resultado = Math.round(HH) + " Hora/s.";
        } else if (diffSeconds < 604800 ) { // Menos de una semana mostramos el día publicado
        	Resultado = dias[start_actual_time.getDay()];
        } else {
        	Resultado = dias[start_actual_time.getDay()] + " " + start_actual_time.getDate() + " de " + Meses[start_actual_time.getMonth()] + " de " + start_actual_time.getFullYear() + " a las " + start_actual_time.getHours() + ":" + start_actual_time.getMinutes() + ":" +start_actual_time.getSeconds();
        }

        return Resultado;
    }
}