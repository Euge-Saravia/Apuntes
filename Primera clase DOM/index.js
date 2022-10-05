// Crear un nuevo elemento Li

var node = document.createElement("li");
node.appendChild(document.createTextNode("Quiénes somos?"));
document.querySelector("ul").appendChild(node);

//Cambia el título a negrita y cambia tamaño de letra

let parQuery = document.querySelector("#titulo");
parQuery.style.fontSize = "50px";
parQuery.style.fontWeight = "bolder";

// Itera entre dos imágenes

var imagenes = [
  "./Fuentes/Images/Productivity.jpg",
  "./Fuentes/Images/Do something great.jpg",
];

let i = 0;

function slider() {
  if (i > imagenes.length - 1) {
    i = 0;
  }

  let img = document.getElementById("img");
  img.src = imagenes[i];
  i++;
}
setInterval(slider, 5000);

//Clone las dos imagenes y después las intercambie de lugar
let clonedImg1 = document.getElementById("img1").cloneNode(true);
let clonedImg2 = document.getElementById("img2").cloneNode(true);

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

img1.replaceWith(clonedImg2);
img2.replaceWith(clonedImg1);

//Mover los titulos con su imagen correspondientes
let boss = document.getElementById("girlBoss").cloneNode(true);
let office = document.getElementById("homeOffice").cloneNode(true);

let girlBoss = document.getElementById("girlBoss");
let homeOffice = document.getElementById("homeOffice");

girlBoss.replaceWith(office);
homeOffice.replaceWith(boss);

//Pone un borde con el click

// let logo = document.getElementById("logo");

// function addBorder(){
//     logo.classList.toggle("fluir");
// }

// logo.addEventListener("click", addBorder);

//Forma con la función dentro del addEventListener
// let logo = document.getElementById("logo");

// logo.addEventListener("mouseover", function (event) {
//   //highlight the mouseover target
//   event.target.classList.toggle("fluir");
// }, false);

// logo.addEventListener("mouseout", function (event) {
//   // highlight the mouseout target
//   event.target.classList.toggle("fluir")
// }, false);

//Forma de hacer lo de arriba con la funcion por fuera del addEventListener

let logo = document.getElementById("logo");

function addBorder(event) {
  console.log(event);
  event.target.classList.toggle("fluir");
}

// logo.addEventListener("click", addBorder);

logo.addEventListener("mouseover", addBorder);
logo.addEventListener("mouseout", addBorder);

//PEDIRLE AL USUARIO QUE INGRESE UN NUEVO TÍTULO A TREVES DEL PROMPT
//GUARDARLO EN EL LOCAL STORAGE

let titulo = document.getElementById("titulo");

function changeText(params) {
  let newTitle = prompt("ingrese un nuevo título");
  localStorage.setItem("New Title", newTitle);
  titulo.textContent = newTitle;
}

titulo.addEventListener("click", changeText);

//TOMARL EL TITULO DEL LOCAL STORAGE PARA QUE CUANDO LA PÁGINA SE REFRESQUE 
//QUEDE EL ÚLTIMO QUE INGRESO EL USUARIO

const localStorageTitle = localStorage.getItem("New Title");
if (localStorageTitle != null) {
  titulo.textContent = localStorageTitle;
} else {
    // Aaca el local storage es null. se mantiene el html
}

//OTRA FORMA DE HACERLO
// let titulo = document.getElementById("titulo");

// titulo.addEventListener("click", () => {
//     let newTitle = prompt("ingrese un nuevo título");
//     localStorage.setItem("New Title", newTitle);
//     titulo.innerHTML = newTitle
// })


// AGREGA DOS ARTÍCULOS MÁS CON EL BOTON 

let button = document.getElementById("button");

function loadMore(event) {
    console.log(event);
    let newArticles = document.getElementById("newarticles");
    newArticles.classList.toggle("articles");
  }

  button.addEventListener("click", loadMore);


