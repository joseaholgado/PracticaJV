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
function saludarcuadro1() {
    let cuadro=document.getElemenBy("cuadro1");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";

}
function saludarcuadro2() {
    let cuadro=document.getElemenBy("cuadro2");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarcuadro3() {
    let cuadro=document.getElemenBy("cuadro3");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarcuadro4() {
    let cuadro=document.getElemenBy("cuadro4");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarcuadro5() {
    let cuadro=document.getElemenBy("cuadro5");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}

eligeColor();