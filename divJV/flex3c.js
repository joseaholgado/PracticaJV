'use strict'
//nos ayuda a no dejar pasar ninguun error
// opcion 1: fabricamos el selector

//defino variables globales
var color = 'white';
//pedimo solamente el color

function obtieneColor(identificador) {
    id = "cuadro" + identificador;
    let cuadro = document.getElemenBy("id").style.backgroundColor;
    color=getComputedStyle
}
function saludar(identificador) {
    let id = "cuadro" + identificador;
    let cuadro = document.getElemenBy("id").style.backgroundColor;
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
