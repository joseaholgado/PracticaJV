'use strict'
//nos ayuda a no dejar pasar ninguun error
// opcion 1: fabricamos el selector

//trarbajamos con los colores globales
var color='white';
//trabajamos con arrays


var colrFr =new array ['grrenyellow','pink','lightskyblue','gray','goldenrod']
var colorFn=[];
colorFn[0]='white';
colorFn[1]='blue';
colorFn[2]='black';
colorFn[3]='yellow';
colorFn[4]='red';
   


function pinturaInicial() {
    for (i=0;i<6;i++){
        let identificador="cuadro"+(i+1);
    elemento=document.getElementById("cuadro"+i)
    elemento.style.backgroundColor=colorFn[i];
    elemento.style.color=colorFr[i];
    }
}

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
