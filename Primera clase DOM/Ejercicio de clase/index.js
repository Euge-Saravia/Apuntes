//Atrapamos los tres elementos en tres variables

let value = document.getElementById("input_text");
let btn = document.getElementById("btn");
let lista = document.getElementById("lista");
let reiniciar = document.getElementById("delete");


function addList(params) {
    //Creamos un nuevo Li 
    let li = document.createElement("li");
    //Agregamos al li el contenido del imput
    li.textContent = input_text.value;
    //Agremamos el li a la lista ul
    lista.appendChild(li);
    //Es para borra el contenido del input
    input_text.value = ""
}

function removeList(params) {
    lista.remove();
}

btn.addEventListener("click", addList);

reiniciar.addEventListener("click", removeList);
