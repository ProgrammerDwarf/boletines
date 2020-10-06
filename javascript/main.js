// Buscar los elementos de la clase close

let links = document.querySelectorAll(".close");

//Recorrerlos para generar una accion

links.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Vamos a quitarle las clases de animacion de entrada
        content.classList.remove("animate__slideInRight");
        content.classList.remove("animate__animated");

        //Y agregamos las clases que haran que nuestro elemento haga su salida
        content.classList.add("animate__animated");
        content.classList.add("animate__slideOutRight");
        
        setTimeout(function() {
            location.href = "/";
        },600);
    });
});
