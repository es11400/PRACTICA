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
    list: function(categoria,successCallback, errorCallback) {

        var url = "/api/entradas/";
        if (categoria == "Fotos") {
            url = "/api/entradas/?_order=categoria";
        } else if (categoria == "Videos") {
            url = "/api/entradas/?_order=-categoria";
        }
        console.log("URL" + url);
        console.log("Categoria : " + categoria);
        $.ajax({
            url: url,
            method: "get",
            success: successCallback,
            error: errorCallback
        });
    }

};
