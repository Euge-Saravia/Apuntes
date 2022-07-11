let input_text = document.getElementById("input");
let btn = document.getElementById("boton");
let lista = document.getElementById("lista");
let borrar = document.getElementById("delete");

function addList() {
    let li = document.createElement("li");
    // agregamos al li el contenido del input 
    li.textContent = input_text.value;
    lista.appendChild(li);
    //borra lo que esta en el input despues de hacer click
    input_text.value = "";
}

//el remove no funciona no esta bien hecho, hay que encontrar la forma 
function reiniciar() {
    lista.removeChild()
}

btn.addEventListener("click", addList);
borrar.addEventListener("click", reiniciar)