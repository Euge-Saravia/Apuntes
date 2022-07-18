# JavaScript

## Functions

Una función es un bloque de código que realiza una acción o devuelve un valor. 

Las funciones se definen con la palabra reservada **function.**

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
Las declaraciones de función se cargan en el contexto de ejecución antes de que se ejecute cualquier código. Esto se conoce como elevación (**Hoisting**), lo que significa que puedes usar la función antes de declararla.


Puede ejecutar la función de suma antes de declarar la función debido a la elevación (hoisting):
````
sum(1, 2); // 3

function sum(a, b) {
  return a + b
}
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
Las expresiones de funciones no pueden ejecutarse antes de ser declaradas, como si pueden hacerlo la declaración de funciones. 

Intentar ejecutar la función antes de que se declare dará lugar a un error:

`````
sum(1, 2)

const sum = function (a, b) {
  return a + b
}
`````
Ejecutar esto dará:
`````
//Uncaught ReferenceError: Cannot access 'sum' before initialization
`````
## Arrow Functions 

Una expresión de función de flecha es una expresión de función anónima escrita con la sintaxis de "flecha" (=>).

Vamos a reescribir la función sum en forma de arrow function: 

`````
const sum = (a, b) => {
  return a + b
}
`````

### Devolución implícita 

Las funciones de flecha introducen una sintaxis de cuerpo concisa o un retorno implícito. Esto permite omisión de los corchetes y la palabra clave de return.

`````
const sum = (a, b) => a + b
``````

### Omitir paréntesis alrededor de un solo parámetro

Se pueden omitir los paréntesis alrededor de los párametros si este es uno solo. 

`````
const square = x => x * x

square(10)// 100
``````
En este ejemplo la X no necesita estar rodeada de paréntesis. 

Por último hay que tener en cuenta que si la función no lleva parámetros, de igual forma deben ir los paréntesis. 

``````
const greet = () => 'Hello!'

greet()// Hello!
```````
## Scope







