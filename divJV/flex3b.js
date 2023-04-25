'use strict'
//nos ayuda a no dejar pasar ninguun error
// opcion 1: fabricamos el selector

//defino variables globales
var color ='white';
//pedimo solamente el color
function eligeColor() {
    var color=prompt("Diga de qué color quiere el saludo")
    switch (color) {
    case'rojo':
        color='red';
        break;
    case'azul':
        color='blue';
        break;
    case'amarillo':
        color='yellow';
        break;
    default:
        color='black'; //lo pongo en negro para saber que es un color erroneo
        break;
    }
}
function saludar(identificador){
id="cuadro"+identificador;
let cuadro=document.getElemenBy("id");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}


eligeColor();