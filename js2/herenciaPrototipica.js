function Animal(tipo, edad, sexo) {
	this.tipo = tipo;
	this.edad = edad;
	this.sexo = sexo;
}

const animal = new Animal("vaca", 3, "femenino");
console.log(animal);

Animal.prototype.saludar = function () {
    console.log(`Hola, soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años`);
};

Animal.prototype.cagar = function () {
	console.log("Hola, soy un animal y cago donde quiero");
}

animal.saludar();

function Mascota (nombre, tipo, edad, sexo, vacunado){
	Animal.call(this, tipo, edad, sexo);   //le pasamos el 'this' de Mascota a la función constructora Animal
	this.nombre = nombre;
	this.vacunado = vacunado;
}

/*
Lo que hacemos con la línea: 'Animal.call(this, tipo, edad, sexo):'  es ejecutar la función Animal, pero que no use su this. Es decir, que Animal no genere su propio this como haría normalmente, sino que use el this que le pasamos nosotros como primer parámetro. ¿Y qué this le pasamos por primer parámetro? El this de Mascota. Por eso, justamente, le pasamos 'this', ya que estamos en el scope de Mascota. 

Entonces cuando la ejecutamos, el código pasa por el scope de 'Animal', y cada vez que lee 'this.tipo', 'this.edad', 'this.sexo', en realidad ese 'this' no es el this de Animal, sino que va a ser el this de Mascota, ya que es el que le pasamos con el método 'call'. Esto es unificar los this, estoy haciendo que this.nombre, this.vacunado, this.tipo, this.edad y this.sexo estén colgados a la misma referencia.
*/

Mascota.prototype.sonar = function(sonido){
    console.log(sonido);
}

const mascota1 = new Mascota("Lolo", "perro", 9, "macho", true);

mascota1.sonar("Guau guau!"); //Funciona ya que se lo agregamos al prototype de Mascota

//mascota1.saludar(); //No funciona, Mascota no tiene saludar ya que nos falta conectar los dos prototypes
//mascota1.cagar(); //No funciona, Mascota no tiene cagar ya que nos falta conectar los dos prototypes

Mascota.prototype.saludar = function () {
    console.log(`Hola, soy una mascota, me llamo ${this.nombre}, de tipo ${this.tipo}, de sexo ${this.sexo}, tengo ${this.edad} años y ${this.vacunado ? "estoy vacunado" : "no estoy vacunado"}`);
};
//Sobreescribimos el método 'saludar', como si fuera un override 
//Lo del 'vacunado' es un operador ternario:  [condición] ? [se ejecuta si es true] : [se ejecuta si es false]

mascota1.saludar();

Object.setPrototypeOf(Mascota.prototype, Animal.prototype);
//El primer parámetro es la clase hija, y el segundo la clase padre. En este caso, conectamos el prototipo de Mascota con el de Animal. Ahora, Mascota tiene el prototype de Animal, por lo tanto va a poder acceder a los métodos 'saludar'(de Animal), 'sonar' y 'cagar'. Animal, a su vez, tiene el prototype Object.
//Hacer eso es generar la herencia prototípica. También se dice 'armar la cadena prototipal'. 
console.log(animal);
console.log(mascota1);
//Aca podemos ver como Mascota contiene el prototype Animal (el cual contiene al prototype Object). Y obviamente a su vez, Animal, contiene el prototype Object. 

//console.clear; //limpia la consola