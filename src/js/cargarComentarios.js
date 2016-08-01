var $ = require('jquery');
var timeago = require('timeago');
var apiClient = require('./api-client');

$('time.timeago').timeago();

module.exports = {

    cargar: function(entradaId){
    	apiClient.entrada(entradaId,function(response) {
    		console.log(entradaId);
    	}, function(response){
	        console.error("ERROR", response);
		});
    }
 }