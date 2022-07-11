/* var titulo = document.getElementById("titulo");

titulo.addEventListener("click", change); */

let title = document.getElementById("titulo");
title.addEventListener("click", () => {
    let newtext = prompt("Ingrese nuevo titulo");
    localStorage.setItem("newtitle", newtext);
    title.innerHTML = newtext;
});
//guardar el nuevo titulo en el local cuando refrescamos la pagina 

if (localStorage.getItem("newtitle") !== null) {
    let nuevo = localStorage.getItem("newtitle");
    title.innerHTML = nuevo;
}

//agregar un item a la lista 
const navBar = document.querySelector("ul");
const newBar = document.createElement("li");
newBar.textContent = "Historia";
navBar.appendChild(newBar);

/*otra forma de hacerlo con getElementById
const navBar = document.getElementById("navegador");
const newBar = document.createElement("li");
newBar.textContent = "Historia";
navBar.appendChild(newBar);*/

//iteracion de imagenes cada 10 segundos 

var imagenes = ["Imagenes/Productivity.jpg", "Imagenes/Do something great.jpg"];

let i = 0;

//let img1 = "Imagenes/Productivity.jpg";
//let img2 = "Imagenes/Do something great.jpg";

function slider() {
    if (i > imagenes.length - 1) {
        i = 0;
    }
    let img = document.getElementById("img");
    img.src = imagenes[i];
    i++;

   /* if (img.src === "http://127.0.0.1:5501/Clase%206/" + img1) {
        img.src = img2;
    } else {
        img.src = img1;
    }*/
}

setInterval(slider, 10000);
/*let img = document.getElementById("img");
     img.src = img.src === `http://127.0.0.1:5501/Clase%206/${img1}` ? img2 : img1;*/


     //cambia de lugar de forma permanente las 2 primeras imagenes 

     /*let rotar = document.querySelector("#sections");
     rotar.style.flexDirection ="row-reverse";*/


    
    //le agrega al logo un recuadro rojo cuando pasas por el con el mouse 
     let logo = document.getElementById("logo");

    function over() {
        logo.classList.add("frame");
    }
    function pepito() {
        logo.classList.remove("frame");
    }
    logo.addEventListener("mouseover", over);
    logo.addEventListener("mouseout", pepito);

    //aparecen mas articulos cuando tocas en btn ver mas 

   let more = document.querySelector(".button")

   //hacerlo con una funcion normal 
  /* more.addEventListener("click", agrega);*/

  /*  function agrega() {
        let articles = document.querySelectorAll(".imagecontainer.ladyboss");
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            article.classList.toggle("show");
        }
        

    }*/
   //hacerlo con una arrow function
    more.addEventListener("click", () => {
        let articles = document.querySelectorAll(".imagecontainer.ladyboss");
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            article.classList.toggle("show");
        }
     });


   