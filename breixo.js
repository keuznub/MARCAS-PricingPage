var preciosColeccion = document.querySelectorAll(".card-title.pricing-card-title");
var preciosArray = Array.from(preciosColeccion);
var mesAñoColeccion = document.querySelectorAll(".text-body-secondary.fw-light");
var mesAñoArray = Array.from(preciosColeccion);
console.log(preciosArray.length);


document.addEventListener("DOMContentLoaded", function () {
    preciosArray.forEach((element)=>{
        element.setAttribute("soyMes","true");
    })
});

function cambiarMesAño(){
    console.log("Hice click")
    preciosArray.forEach((element)=>{
        console.log(element.getAttribute("soyMes"));
        console.log(element.innerHTML);
        if(element.getAttribute("soyMes")=="true"){
        element.innerHTML = "$4";
        }else{
            element.innerHTML = "$0";
        }
    })
}
