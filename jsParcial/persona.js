/*export function Persona(id, nombre, apellido, email, genero, edad){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.genero = genero;
    this.edad = edad;
}
Función constructora Persona*/

export class Persona{
    constructor(id, nombre, apellido, email, genero, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.genero = genero;
        this.edad = edad;
	}

	set Id(value){       // Es una función, pero al tener el 'set' adelante, funciona como PROPIEDAD
		this.id = value;
	}
	get Id(){            // Es una función, pero al tener el 'get' adelante, funciona como PROPIEDAD
		return this.id;
	}
	set Nombre(value){
		this.id = value;
	}
	get Nombre(){
		return this.id;
	}
	set Apellido(value){
		this.id = value;
	}
	get Apellido(){
		return this.id;
	}
	set Email(value){
		this.id = value;
	}
	get Email(){
		return this.id;
	}
	set Genero(value){
		this.id = value;
	}
	get Genero(){
		return this.id;
	}
	set Edad(value){
		this.edad = value;
	}
	get Edad(){
		return this.edad;
	}
}
//Clase Persona