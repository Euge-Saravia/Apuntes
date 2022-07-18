// Crear un nuevo elemento Li 

var node = document.createElement('li');
node.appendChild(document.createTextNode('Quiénes somos?'));
document.querySelector('ul').appendChild(node);

//Cambia el título a negrita y cambia tamaño de letra

let parQuery = document.querySelector('#titulo');
parQuery.style.fontSize = "50px";
parQuery.style.fontWeight = "bolder";

// Itera entre dos imágenes 


var imagenes = ["./Fuentes/Images/Productivity.jpg", ".Fuentes/Images/Do something great.jpg"];

let i = 0;

function slider() {
    if (i > imagenes.length - 1) {
        i = 0;
    }
    
    let img = document.getElementById("img");
    img.src = imagenes[i];
    i++;
}
    setInterval(slider, 10000);
