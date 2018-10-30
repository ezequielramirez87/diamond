$(document).ready(function(){
    //codigo que utiliza javascrip con jquery
    marcar();
    $(".myicon").click(function(){
        $("#navbar ul").toggleClass("lista-small");
    });
    //Esta funcion hace que la barra de navegacion cambie de color dependiendo de en que seccion de la
    //pagina se encuentre.
    function marcar(){
        //muestra la ruta de pagina en donde estamos
        let ruta=window.location.pathname;
        $("nav a").each(function(){
            let href=$(this).attr("href");
            let indice=ruta.length-href.length;
           //substring toma los caracteres de un string hata el caracter que yo le diga en este caso es
           //indice que de donde comienza el nombre de la pagina
            if(ruta.substring(indice)===href){
                console.log("bien")
               //Element.closest() devuelve el ascendiente más cercano al elemento actual (o el propio
               //elemento actual) que coincida con el selector proporcionado por parámetro.
               $(this).closest("li").addClass("activar");
            };
       });
    }
});