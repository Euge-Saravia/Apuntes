# JavaScript

## Functions

Una función es un bloque de código que realiza una acción o devuelve un valor. 
Las funciones se definen con la palabra reservada **function**

Su sintaxis es la siguiente:
```
function nameOfFunction(){
    //code to be executed;
} 
````
*Nota: los nombres de las funciones siguen las mismas reglas que los nombres de las variables.*

### Declaración de funciones. 

````
function greet(){
    console.log("Hello, World!");
}

greet(); // Hello, world!
````

### Parametros de funciones

Usando los parámetros de las funciones podemosm agregarle más flexibilidad al código. Los parámetros son entradas que reciben las funciones como nombres y se comportan cómo variables locales. 

````
function greet(name){
    console.log("Hello, ${name}!");
}
greet("Euge"); // Hello, Euge!
````
### Expresiones de funciones 

Se puede crear una expresión de función asignando una función a una variable. 

````
const sum = function add (x, y){
    return x + y;
}

add (20, 5); // 25
````
Ahora la constante **sum** es una funcion. Podemos hacer esta expresión mas concisa convirtiendola en una función anónima, una función sin nombre. Actualmente nuestra función tiene el nombre add, pero con las expresiones de función no es necesario nombrar la función y generalmente este se omite. 

````
const sum = function (x, y){
    return x + y; 
}
sum (100, 3); // 103
````


