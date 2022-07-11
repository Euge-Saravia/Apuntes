
// var cantidadKm = parseInt(prompt("Ingrese la cantidad de kilómetros: "));
// var tanque = 45;
// var kmPorLitro = 15;
// if(cantidadKm < (tanque * kmPorLitro)){
//     alert("Le alcanzará");
// }else{
//     alert("Deberá recargar nafta");
// }

let cantidadKm = parseInt(prompt("Ingrese Km a recorrer"));
let autonomia = (45 * 15);

if (cantidadKm <= autonomia){
    alert("Le alcanza");
}else{
    alert("debera cargar");
}
