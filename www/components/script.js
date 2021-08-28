// This is a JavaScript file
window.onload = function (){
  const display = document.querySelector("#display");
  
let refrigerante = 600;

let agua = 200;

let bolo = 100;

let doce = 3;

let salgado = 10;

document.querySelector("#igual").addEventListener('click', function(){

    let valor = display.value;

  
    let resultado1 = valor * refrigerante;
    display1.value = resultado1 + " ml";

  
    let resultado2 = valor * agua;
    display2.value = resultado2 + " ml";

    let resultado3 = valor * bolo;
    display3.value = resultado3 + " gramas";

    let resultado4 = valor * doce;
    display4.value = resultado4 + " unidades";

    let resultado5 = valor * salgado;
    display5.value = resultado5 + " unidades";

})

}