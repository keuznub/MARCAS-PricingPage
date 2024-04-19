const canciones = [];

class Cancion{
    constructor(nombre,imagen,audio,botonPlay,botonStop){
        this.nombre = nombre;
        this.imagen = imagen;
        this.audio = audio;
        this.botonPlay = botonPlay;
        this.botonStop = botonStop;
        this.reproduciendo = false;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    var cancionesDivs = document.querySelectorAll(".cancion");
    var cancionesDivsArray = Array.from(cancionesDivs);

    cancionesDivsArray.forEach(element => {
        var nombre = element.querySelector("h1");
        var imagen = element.querySelector("img");
        var audio = element.querySelector("audio");
        var botonPlay = element.querySelector(".play");
        var botonStop = element.querySelector(".stop");
        var cancionElemento = new Cancion(nombre,imagen,audio,botonPlay,botonStop);
        cancionElemento.botonPlay.addEventListener("click", function (e){
            console.log("Reproduciendo " + cancionElemento.nombre.innerHTML)
            if(!comprobarReproduciendo()){
                cancionElemento.reproduciendo = "true";
                cancionElemento.nombre.innerHTML = "Reproduciendo";
                rotarImagen(cancionElemento);
                cancionElemento.audio.load();
                cancionElemento.audio.play();
            }
        })
        cancionElemento.botonStop.addEventListener("click", function (e){
            console.log("Reproduciendo " + cancionElemento.nombre.innerHTML)
            cancionElemento.reproduciendo = "false";
            cancionElemento.nombre.innerHTML = "Parando";
            cancionElemento.audio.pause();
            
        })
        canciones.push(cancionElemento);
    });

});

function comprobarReproduciendo(){
    for(var i = 0; i<canciones.length; i++){
        if(canciones[i].reproduciendo == "true"){
            return true;
        }
    }
    return false;
}

canciones.forEach(element => {
    if(element.reproduciendo == "true"){
        
    }
});

function rotarImagen(cancion){
    let img = cancion.imagen;
    console.log("le diste click a rotar");
    console.log("imagen " + img);
    var degrees = 0;
    let intervalo = setInterval(() => {   
        img.style.transform = "rotate("+degrees+"deg)";
        //transform: rotate(10deg);
        if (degrees >= 359) { 
            degrees = 0;
        }
        if(cancion.reproduciendo == "false"){
            clearInterval(intervalo);
        }
        degrees += 1; 
    }, 20); 
}


