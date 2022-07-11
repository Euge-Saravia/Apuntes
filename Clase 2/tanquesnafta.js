
var modeloAuto = prompt("Ingrese el modelo: ");
var cantidadKm = parseInt(prompt("Ingrese la cantidad de kilómetros: "));

var tanque = 50;
var total = 0;
if(modeloAuto == "Motor 1.6"){
    total = Math.ceil(cantidadKm/(tanque*15));
    alert("La cantidad de tanques es: " + total);
}
else if(modeloAuto == "Motor 1.8"){
    total = Math.ceil(cantidadKm/(tanque*12));
    alert("La cantidad de tanques es: " + total);
}else{
    total = Math.ceil(cantidadKm/(tanque*10));
    alert("La cantidad de tanques es: " + total);
}
