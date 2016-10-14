var $ = require('jquery');

module.exports = {

    save: function(entrada, successCallback, errorCallback) {

        var formData = new FormData();
        formData.append("autor", entrada.autor);
        if (entrada.imagen_autor != "")
            formData.append("imagen_autor", entrada.imagen_autor);
        else
            formData.append("imagen_autor", "../img/avatar.png");
            formData.append("fecha", entrada.fecha);
            formData.append("titulo", entrada.titulo);
            formData.append("texto_corto", entrada.texto_corto);
            formData.append("texto_largo", entrada.texto_largo);
            formData.append("nComentarios", entrada.nComentarios);
            formData.append("nFavoritos", entrada.nFavoritos);
            formData.append("categoria", entrada.categoria);
            formData.append("imagen_video", entrada.imagen_video);
        
            $.ajax({
                url: "/api/entradas/",
                method: "post",
                data: formData,
                processData: false,
                contentType: false,
                success: successCallback,
                error: errorCallback
            });
    },
    saveComentario: function(comentario, successCallback, errorCallback) {

        var formData = new FormData();
        formData.append("entrada", comentario.entrada);
        formData.append("fecha", comentario.fecha);
        formData.append("nombre", comentario.nombre);
        formData.append("apellidos", comentario.apellidos);
        formData.append("email", comentario.email);
        formData.append("texto", comentario.texto);
    
            $.ajax({
                url: "/api/comentarios/",
                method: "post",
                data: formData,
                processData: false,
                contentType: false,
                success: successCallback,
                error: errorCallback
            });
    },
    list: function(categoria,successCallback, errorCallback) {

        
        
        if (categoria === "all") {
            var url = "/api/entradas/";    
        } else {
            url = "/api/entradas/?categoria=" + categoria;
        }
        
        //console.log("URL" + url);
        //console.log("Categoria : " + categoria);
        $.ajax({
            url: url,
            method: "get",
            success: successCallback,
            error: errorCallback
        });
    },
    listComentarios: function(entrada, successCallback,errorCallback, beforeSendCallBAck, completeCallBack){
        var url = "/api/comentarios/?entrada=" + entrada + "&_order=fecha";
        
        $.ajax({
            url: url,
            method: "get",
            success: successCallback,
            error: errorCallback,
            beforeSend: beforeSendCallBAck,
            complete: completeCallBack
        });
    },
    entrada: function(entradaId,successCallback, errorCallback, completeCallBack) {

        $.ajax({
            url: "/api/entradas/" + entradaId,
            method: "get",
            success: successCallback,
            error: errorCallback,
            complete: completeCallBack
        });
    }

};
