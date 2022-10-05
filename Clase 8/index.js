// 1. Buscamos el boton enviar y lo asignamos a la variable btn
var btn = document.getElementById("btn");

// 2. Asociamos el evento click a que ejecute el metodo hi()
btn.addEventListener("click", hi);

function hi() {
    // 3. Buscamos la caja de texto y tomamos su valor para poder utilizarlo 
    var text = document.getElementById("enter");
    alert("Hola" + " " + text.value);
}