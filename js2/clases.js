class Animal{
	constructor(tipo, edad, sexo){
		this.tipo = tipo;
		this.edad = edad;
		this.sexo = sexo;
	}
	
	saludar() {
        console.log(`Hola, soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años`);
    };
	cagar() {
        console.log("Hola, soy un animal y cago donde quiero");
    }
}
// Los métodos van sin this. Dentro del constructor sí va el this (this = Animal)
// Los métodos se tienen que declarar así como los ves. No hay que hacer saludar = function() ..etc

const animal = new Animal("vaca", 3, "femenino");
console.log(animal);
// El constructor que aparece dentro del prototype Object de animal, ya no es la función constructora Animal. Sino que ahora es la clase Animal.

//Nueva clase Mascota, va a heredar de Animal
class Mascota extends Animal{ 
	constructor(nombre, tipo, edad, sexo, vacunado){  
		super(tipo, edad, sexo);  //super sería como base en C#, estamos enganchado al constructor base
		this.nombre = nombre;
		this.vacunado = vacunado;
	}
	
	saludar() {
        console.log(`Hola, soy una mascota, me llamo ${this.nombre}, de tipo ${this.tipo}, de sexo ${this.sexo}, tengo ${this.edad} años y ${this.vacunado ? "estoy vacunado" : "no estoy vacunado"}`);
    };
	cagar() {
        console.log("Hola, soy un animal y cago donde quiero");
    }
}
//class [hijo] extends [padre] (Como cuando en C# hacíamos:  class Mascota : Animal
//Ahora no es necesario usar 'call'. Sino que simplemente hacemos 'super'. Super hace referencia a la clase de la cual nos estamos extendiendo (la clase base Animal). Super sería en C# como cuando hacemos base.[algo].

const mascota1 = new Mascota("Lolo", "perro", 9, "macho", true);

console.log(mascota1);

mascota1.saludar();
animal.saludar();

// Creo una nueva clase Animal2 para mostrar el ejemplo de Propiedades
class Animal2{
	constructor(tipo, edad, sexo){
		this.tipo = tipo;
		this.edad = edad;
		this.sexo = sexo;
	}
	
	set Edad(value){       // Es una función, pero al tener el 'set' adelante, funciona como PROPIEDAD
		this.edad = value;
	}
	get Edad(){            // Es una función, pero al tener el 'get' adelante, funciona como PROPIEDAD
		return this.edad;
	}
}
// Ahora, 'Edad' es una propiedad de Animal2. Las propiedades funcionan igual que en C#

const animal2 = new Animal2("Perry", "ornitorrinco", 14, "macho", false);

animal2.Edad = 10; // Uso el 'SET' de la propiedad Edad para asignarle un valor distinto

console.log(`Mostrando la edad con propiedad Edad: ${animal2.Edad}`); // Uso el 'GET' de la propiedad Edad
console.log(animal2);