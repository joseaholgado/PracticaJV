'use strict';
// nos ayuda a no dejar pasar ningún error
// opcion 3: usamos switch


// pedimos el numero de cuadro donde escrivir HOLA

var cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);
// cuadro será ahora una varable numérica, supuestamente entre 1 y 5


var estecuadro;



switch (cuadro){
    case 1:
        var estecuadro = document.getElementById("cuadro1");
        break;
    case 2:
        var estecuadro = document.getElementById("cuadro2");
        break;
    case 3:
        var estecuadro = document.getElementById("cuadro3");
        break;
    case 4:
        var estecuadro = document.getElementById("cuadro4");
        break;
    case 5:
        var estecuadro = document.getElementById("cuadro5");
        break;
    default:
            alert ("mal numero has ingresado");
            exit(-1);

}
if (estecuadro!=""){
    estecuadro.innerHTML="----O----<br/>--OOO--<br/>OOOOO<br/>";
}
/*var selector = "cuadro"+cuadro;
var estecuadro = document.getElementById(selector);*/
estecuadro.innerHTML="----O----<br/>--OOO--<br/>OOOOO<br/>";
 for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 5 - i; j++) {
        row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "o";
    }
    document.getElementById("piramide").innerHTML += espacios + row + "\n";
};



