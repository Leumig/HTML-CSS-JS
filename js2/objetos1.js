console.log("OBJETOS");

/*Cuando se dice que "una función es un ciudadano de primera clase", significa que se puede tratar como cualquier otro valor. Es decir que:*/

//1) Se puede asignar a una variable
const sumar = function (a, b) {
	return a + b;
};
//console.log(sumar(2, 3)); // 5

//2) Se puede pasar como argumento a una función
function operar(a, b, operacion){
	return operacion(a, b);
}
//console.log(operar(2, 3, sumar)); // 5

//3) Se puede retornar como resultado de ejecutar una función
function crearSumador(a) {
	return function (b) {
	return a + b;
	};
}
const sumarDos = crearSumador(2); // sumarDos ahora tiene guardada la function (b) {return 2+b;}
//console.log(sumarDos(3)); // 5 [sumarDos sirve para siempre sumar 2 al valor que reciba]

//Hay 3 formas de declarar un objeto.

//1) Objeto literal (on the fly)
const objeto1 = {};
//console.log(objeto1);
//Esto nos va a mostrar '{}' en la consola. Un objeto vacío. Si lo analizamos, vamos a ver que es un [Prototype].
//Ahí podemos ver que tiene un constructor, entre muchas otras cosas.

const objetoLiteral = {
    cadena: "Palabra",
    numero: "518",
    array: [2, 4, 1, 7, 9],
    objeto: { a:"Juan", b:18, c:false },
    booleano: true,
    funcion: function(){
        console.log("Hola Mundo");
    },
    "3D": true,
    "Una Key": "Algo"
}

let atributo = "objeto";

console.log(objetoLiteral);
console.log(objetoLiteral.cadena);
console.log(objetoLiteral["cadena"]);
console.log(objetoLiteral[atributo]);
//Podemos acceder a sus propiedades con el operador '.' , o con los []. En los [] tenemos que colocar el nombre de la propiedad a la que queremos acceder.

console.log(objetoLiteral["3D"]);
console.log(objetoLiteral["Una Key"]);
//Esta es la única forma de acceder a esas propiedades, con los []. Ya que, no podemos usar el operador '.' para acceder a una propiedad que empieza con un número, y tampoco a una propiedad que tiene un espacio vacío.


//2) Objeto a través de una función constructora (new)
const objeto2 = new Object();
console.log(objeto2);
//Esto da el mismo resultado que la forma anterior.
const objeto3 = new Object(124);
console.log(objeto3);
//Esto hace que el objeto sea un 'Number', con sus características propias de un número.
const objeto4 = new Object("Hola");
console.log(objeto4);
//Esto hace que el objeto sea un 'String', con sus características propias de una cadena.
const objeto5 = new Object(true);
console.log(objeto5);
//Esto hace que el objeto sea un 'Boolean', con sus características propias de un booleano.
//Number, String y Boolean son valores primitivos.


//3) Objeto a través de 'Object.create()'
const entradas = Object.entries(objetoLiteral);
//console.log(entradas); //Muestro el array entradas

console.log("Entradas");
/*for (let i = 0; i < entradas.length; i++) {
    //console.log(entradas[i][0], "=", entradas[i][1]); //Muestro el 'key = value' de cada entrada
    //Esa es una forma de hacerlo, otra podría ser:
    let [key, value] = entradas[i];
    console.log(key, "=", value); //Muestro el 'key = value' de cada entrada
};*/
//Asi se mostrarían las entradas (key - value) de un objeto mediante FOR

/*entradas.forEach(entrada => {
    let [key, value] = entrada;
    console.log(key, "=", value);
    //console.log(entrada[0], "=", entrada[1]); //Otra forma de mostrar
});*/
//Asi se mostrarían las entradas (key - value) de un objeto mediante FOREACH

for (const entrada of entradas) {
    console.log(entrada[0], "=", entrada[1]);
}
//Asi se mostrarían las entradas (key - value) de un objeto mediante FOROF

//Lo más común es usar el FOR, pero es bueno conocer todas las maneras

const keys = Object.keys(objetoLiteral); //keys es un array de strings ("cadena", "numero", "objeto", etc.)
const values = Object.values(objetoLiteral); //values es un array de distintos tipos de dato (String, Number, Array,  Object, Boolean y Function)

for(let i = 0; i < entradas.lenght; i++){
	console.log(keys[i], "=", objetoLiteral[keys[i]]);
}
//Otra forma, usando el array keys (For)

keys.forEach(key => {
    console.log(key, "=", objetoLiteral[key]);
});
//Otra forma, usando el array keys (Foreach)

for (const key of keys) {
    console.log(key, "=", objetoLiteral[key]);
}
//Otra forma, usando el array keys (Forof)

//Forof: recorremos los valores del array
//Forin: recorremos los índices del array (u objeto)

for (const key in objetoLiteral) {
	console.log(key, "=", objetoLiteral[key]);
};
//Recorriendo el objeto con un Forin

const numeros = [3, 80, 11, 24, 52];
for (const i in numeros) {
    //console.log(i);
    console.log(numeros[i]);
}
//Recorriendo un array con un Forin

/*
Aclaración
En JS, a diferencia de C#, los arrays pueden contener valores de distinto tipo de dato. Esto es porque JS es un lenguaje de programación con tipado dinámico.
*/