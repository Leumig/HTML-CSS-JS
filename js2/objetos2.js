const persona = {
    nombre: "Juan",
    edad: 34,
    saludar: function(){
        console.log("Hola mundo");
    },
    presentarse (){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        //Para hacer este string interpolado con ${}, la cadena debe estar entre `` (alt + 96)
    }
    // Se pueden añadirle métodos a un objeto de estas dos formas, con una 'key' como 'saludar', o sin 'key', como presentarse(). Ambas son válidas. 'saludar' seria la key de la propiedad, y su 'value' una función anónima (porque no tiene nombre). 'presentarse' sería el nombre de la otra función. OJO: Si bien no le especificamos la 'key' a la función 'presentarse', la key de forma predeterminada será 'presentarse'. Esto pasa por lo que habíamos visto antes en el return del closure: que se unificaban los valores. 
}

persona["sexo"] = "M";  // Le creo una propiedad nueva usando los []
console.log(persona);

persona.localidad = "Avellaneda";  // Le creo una propiedad nueva usando el opeardor '.'
console.log(persona);

persona.saludar();
persona["saludar"]();

persona.presentarse();
persona["presentarse"]();


//Función constructora (new)
/*Es literalmente una function, la cual al ser invocada con un 'new' adelante, va a tomar el rol de función constructora. Estas funciones se escriben en PascalCase (Con mayúscula). */

console.log("\nUsando función constructora:")

function Persona(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
	this.saludar = function () {
		console.log("Hola");
	}
    this.presentarse = function() {
		console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
	} 
}
//Esto es una función constructora

const persona1 = new Persona("Juan", 34);
const persona2 = new Persona("Lucia", 23);
//El operador 'new' se encarga de crear el objeto, agregarle los valores y devolvernos la referencia. Cuando un operador 'new' está adelante de una función constructora, se encarga de hacer todo eso.

console.log(persona1);
console.log(persona2);
persona2.presentarse();

/*Persona ahora es el constructor de la clase. Es decir, persona1 es un objeto que se creó gracias al constructor Persona (usando new). Antes, el constructor del objeto era Prototype, ahora Persona.
Persona = constructor / función constructora*/

//Es como si hicieramos esto pero de forma mejorada, creando un objeto y retornándolo:
/*
function Persona(nombre, edad) {
    obj = {};
	obj.nombre = nombre;
	obj.edad = edad;
	obj.saludar = function () {
		console.log("Hola");
	}
    this.presentarse = function() {
		console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
	}
    return this;
}

const persona1 = Persona("Juan", 34);
const persona2 = Persona("Lucia", 23);

//Esto funciona pero es una forma anticuada de hacerlo. Lo correcto obviamente es con el new.
*/



/*
Ahora, si yo tuviera 25 objetos, tendría 25 veces repetido el método 'saludar' y 'presentarse'. Una forma de mejorar esto es sacando 'saludar' y 'presentarse' del scope de la función constructora Persona, y ponerlos en el prototype. Prototype es un objeto que pertenece a Persona. Se agrega así:
*/

function Persona2(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
}

Persona2.prototype.saludar = function () {
    console.log("Hola");
}

Persona2.prototype.presentarse = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}
//Todos los Object contienen a un objeto prototype
//Ahora, cada objeto creado en base a Persona, va a tener esos métodos

const persona3 = new Persona2("Miguel", 22);
console.log(persona3);
persona3.presentarse();

/*Un objeto creado por Persona, podemos decir que es una instancia de Persona. Todos los Object tienen un Prototype (que es un objeto), el prototipo va a variar dependiendo del tipo de dato. Si hacemos un objeto {}, su prototype es Object. Si lo hacemos mediante el new de Persona, su prototype es Persona. Si hacemos Object("Hola"); es un string, de prototype String.*/

/*El prototipo es el objeto encargado de darle todos los métodos a a la instancia. Por eso, si el prototipo es un String, va a tener todos los métodos de un string (split, toUpperCase, trim, etc). Si el prototipo es un Number, va a tener todos los métodos de un number. Y asi con todos los tipos de datos. Por eso, cuando nosotros creamos un objeto Persona, también tiene un prototipo, el cual va a ser de tipo Persona. Y le agregamos los métodos saludar y presentarse.*/