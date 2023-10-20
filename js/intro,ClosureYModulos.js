//El intérprete de JS hace un doble barrido para captar todas las declaraciones de variables y reservar los lugares en memoria, y otro para captar todas las funciones. Todo lo cuelga hasta arriba.

console.log(num);

var num = 10;
//El console.log va a mostar 'undefined', ya que reconoce la variable 'num', pero no reconoce que tenga ningún valor. Ya que el barrido 'colgó' la declaración de la variable num hasta arriba del código, pero lo que no puede interpretar es la asignación = 10. Por eso console.log muestra 'num', pero con un valor 'undefined', como si no la hubieramos inicializado.


saludar();
//despedir();
//Saludar va a funcionar correctamente. Pero despedir no. Ya que 'despedir' sólo es una variable sin inicializar. Por lo  tanto no podemos hacerle () como si fuera o apuntara a alguna función.
//¿Por qué? Porque el barrido solo va a colgar la declaración de la variable 'despedir'. Pero NO capta la asignación. Por lo tanto, la variable 'despedir' se va a convertir en un puntero a función recién en la línea 20. No antes.

//Función declarada
function saludar() {
    console.log("Hola mundo"); 
}

//Función expresada
var despedir = function() {
    console.log("Chau mundo")
}


function miFuncion(){
	console.log("Hola, estoy funcionando");
}

var pepe  = miFuncion;
//'pepe' es una variable puntero a función, ya que le estamos asignando la DDM de una función. (Porque le asignamos 'miFuncion' sin los paréntesis)

miFuncion();  //Mostrará "Hola, estoy funcionando"
pepe(); //Mostrará "Hola, estoy funcionando"
//'pepe();' al tener los paréntesis, 'pepe' invoca la función a la que está apuntando (miFuncion)

despedir();

const vec1 = [1, 2, 3, 4, 5];
const vec2 = [...vec1]; //Operador de propagación (clonar/addRange)
//vec1 y vec2 al ser arrays, guardan la dirección de memoria de tal array. Por lo tanto, son const. Ya que todas las variables que contengan una referencia tendran que ser const y no let.
//En este caso, tenemos 2 arrays distintos (ya que les hice una distinta asignación). Además, use el '...', que simplemente sirve para copiar lo que contiene un array y pegarlo en otro array distinto. Por lo tanto, en este momento, vec2 contiene los mismos elementos que vec1 (pero sin ser el mismo array, obviamente).


const vec3 = ["A", "B", "C"];
const vec4 = vec3;
//Ojo con esto: este caso es distinto al anterior. Aca estamos trabajando con UN solo array. Creamos la variable vec3, la cual guarda la referencia de un array. Después creamos la variable vec4, la cual guarda; la referencia de vec3. Es decir, al igualar vec4 = vec3, lo que estoy haciendo es que tanto vec3 como vec4 sean dos variables (punteros) que apuntan a exactamente el mismo array. Por lo tanto, si modifico algún elemento de vec3, también se modifica en vec4. Ya que el array es UNO SOLO. vec3 y vec4 sólo son punteros que apuntan a ese array.


const persona ={
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}
//Creo una variable la cual va a guardar la referencia de un objeto. Un objeto el cual va a tener esas propiedades. Esa  forma de hacer el objeto (con las llaves {}) es una forma de hacer un objeto 'on the fly'.

/*let nombre = persona.nombre;
let apellido = persona.apellido;
let edad = persona.edad;*/
//Lo desestructuro de forma clásica

let {edad, apellido, nombre} = persona;
//Lo desestructuro con el desestructurador de JS (no es necesario respetar orden ni cantidad)

console.log(nombre, apellido, edad);

const lista = [23, 56, 43]; 
let [a, b, c] = lista;
//Asi se desestructura un vector (es lo mismo pero con corchetes [])

console.log(a, b, c);



/*console.log("Usando el closure de matematicas...");
console.log(matematicas.sumar(4, 5));
console.log(matematicas.multiplicar(2, 2));
console.log(matematicas.dividir(3, 0));*/
//matematicas es un objeto con 4 propiedades. Cada propiedad tiene como valor un puntero a función el cual apunta a una función en específico. En este caso tiene sumar, restar, multiplicar y dividir.

console.log("\nUsando el módulo de matematicas:")
import { sumar, restar, multiplicar, dividir } from "./matematicas.js";
//Importo desde el archivo matematicas.js

//import matematicas from "./matematicas.js";
//Esta forma de importar serviría si la exportación es por default (lo hice pero está comentado)
//Obviamente si lo hacemos asi, tendríamos que hacer 'matematicas.sumar, matematicas.restar ... etc'

console.log(sumar(2, 7));
console.log(restar(10, 4));
console.log(multiplicar(2, 4));
console.log(dividir(15, 3));
//Uso las funciones que importé del archivo matematicas.js