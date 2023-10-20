//JSON (JavaScript Object Notation)
//Es literalmente un string con un formato de notación de objetos. Se usa para representar información como objetos, elementos, arrays, etc. en formato string. Se usa para transmitir información entre cliente y servidor.

const miObjeto = {
    cadena: "Miguel",
    numero: "518",
    array: [2, 4, 1, 7, 9],
    objeto: { a:"Juan", b:18, c:false },
    booleano: true,
    funcion: function(){
        console.log("Hola Mundo");
    }
}

console.log("miObjeto es de tipo:", typeof miObjeto); // muestra object
//'typeof' es un operador unario. Si le ponemos adelante algo, nos devuelve un string diciéndonos de qué tipo es lo que tiene adelante

const objetoString = JSON.stringify(miObjeto);
//En objetoString se va a guardar un string, el cual va a contener la información de miObjeto

console.log("objetoString es de tipo:", typeof objetoString)
console.log(objetoString);


//El parse de JSON nos va a servir para hacer lo contrario. Pasar un string JSON a un objeto (Object).

const otroObjeto = JSON.parse(objetoString);
//Lo que recibe parse es un string JSON, y devuelve el Object de ese string

console.log("otroObjeto es de tipo:", typeof otroObjeto);
console.log(otroObjeto);



//////////////////////////////////////
//Local Storage (Almacenamiento Local)
console.log("\nLocal Storage")

const persona = {
	nombre: "Juan",
	edad: 20,
	email: "juancho@gmail.com",
	sexo: "M",
	vacunado: true,
};

localStorage.setItem("persona", JSON.stringify(persona));
/*El primer parámetro será el key. Es el 'nombre' del item que vamos a guardar en el Local Storage. En este caso, le vamos a poner 'persona'. Y el segundo parámetro (que es el value), TIENE que ser un STRING. Es decir, tiene que ser un string en formato JSON el cual contenga al objeto que queremos guardar con nombre 'persona'. Por eso le pasamos literalmente JSON.stringify(persona). Estamos pasandole el objeto 'persona' en formato string JSON.
*/

localStorage.getItem("persona");
// getItem recibe el nombre (key) del Item y devuelve el JSON string del Item (almacenado en el LS)

const personaString = localStorage.getItem("persona");
// Guardamos el string JSON de 'persona' en personaString
console.log(personaString); //Lo mostramos (Es un STRING, no un OJBECT)


// Si yo quisiera traer (en forma de objeto) del local storage un objeto que guardé anteriormente haría esto:
const persona2 = JSON.parse(localStorage.getItem("persona"));
// Ahora persona2 es un Object que tiene el objeto guardado en el localStorage con key 'persona', que es lo que habiamos guardado antes.

console.log("\npersona2 es de tipo:", typeof persona2);
console.log(persona2);

const producto = {
    nombre: "Coca Cola",
    precio: 350,
    stock: 40
}
localStorage.setItem("producto", JSON.stringify(producto));
//localStorage.removeItem("producto"); // Lo elimina
//localStorage.clear(); // Elimina todos los items


// Ahora con Arrays

const listaDePersonas = [
	{
		nombre: "Mario",
		edad: 23,
        email: "Maritoo@gmail.com",
        sexo: "M",
        vacunado: true
	},
	{
		nombre: "Lucia",
		edad: 26,
        email: "luli20@gmail.com",
        sexo: "F",
        vacunado: false
	}	
]

localStorage.setItem("listaDePersonas", JSON.stringify(listaDePersonas));
//Agregamos otro item al LS. Tendrá como 'key' listaDePersonas y su valor será un array con todos los objetos que contenga listaDePersonas. Obviamente se guarda en forma de string como todo lo que guarda el LS


let listaDePersonas2 = [];  // creamos otro array, en este caso vacío

if (localStorage.getItem("listaDePersonas")){
	listaDePersonas2 = [...JSON.parse(localStorage.getItem("listaDePersonas"))];
}
// Si se logra hacer un 'getItem("listaDePersonas"), entra al if. 
// Si entra, al array 'listaDePersonas2' se le vuelca todo el contenido que devuelva el JSON.parse
// El JSON.parse (al igual que antes), convierte un string JSON a Object
// ¿Qué string JSON va a convertir el parse? El que le pasemos. Y en este caso, le pasamos el string JSON que está almacenado en el LS como item 'listaDePersonas', que es el que guardamos anteriormente.


console.log("\nlistaDePersonas2 es de tipo:", typeof listaDePersonas2);
console.log(listaDePersonas2);

console.log("\nlistaDePersonas es de tipo:", typeof listaDePersonas);
console.log(listaDePersonas);

// Como se ve, ambas listas quedaron exactamente igual. Antes de ser guardada, y una vez que la extraímos del LS


// Ahora mismo no quiero manejar estos elementos, así que voy a vaciar el LS.
localStorage.clear();