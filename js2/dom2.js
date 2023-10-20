//Este código JS está vinculado al archivo 'maravillas.html'
console.log("\n\nAtributos personalizados");

const $primerImg = document.getElementsByTagName("img")[1];

$primerImg.outerHTML = "<p>Aca había una imagen y la cambié por este párrafo usando outerHTML.</p>";
//outerHTML lo que hace es sacar el elemento '$primerImg', y en su lugar colocar código HTML.

//Atributos personalizados
const $imgArbol = document.getElementById("arbol");

console.log($imgArbol.dataset);
//Muestra el objeto DOMStringMap. Es el objeto a donde van a parar todos los 'data-'

console.log($imgArbol.dataset.descripcion); //Muestra: "Es un arbol antiguo con una gran historia"
//Dataset contiene todos los atributos personalizados. Nosotros en el HTML le creamos un atributo personalizado a imgArbol llamado 'descripcion'. Por lo tanto, lo va a mostrar.  

console.log($imgArbol.getAttribute("data-descripcion")); //Muestra: "Es un arbol antiguo con una gran historia"
//En este caso, al usar el getAttribute, sí es necesario escribir el 'data-' adelante.

$imgArbol.setAttribute("data-id", "1000");
//Obviamente que con el setAttribute también podemos crear y/o modificar estos atributos 'data':
console.log($imgArbol.dataset.id);
console.log($imgArbol.getAttribute("data-id"));

//Ejemplo de Listado de películas

import { peliculas } from "../data/peliculas.js"; //Importo el array 'peliculas' del archivo 'peliculas.js'
console.log(peliculas); //Lo muestro

const $lista = document.getElementById("lista"); //Capturo la referencia del elemento <ul>
console.log($lista); //Lo muestro


//Ahora lo que queremos es construir la lista con las películas. Vamos a hacer esto:

//Primer forma (la peor)
/*peliculas.forEach((pelicula)=>{
	const $li = document.createElement("li");
    //Por cada elemento del array, creo un <li>

	const $texto = document.createTextNode(pelicula.titulo);
    //Por cada elemento del array, creo un nodoTexto con su nombre

	$li.appendChild($texto);
    //Al <li>, le coloco el nodoTexto que acabo de crear

	$li.setAttribute("data-id", pelicula.id);
    //Al <li>, le pongo un atributo personalizado 'id', que va a tener el valor del id

	$lista.appendChild($li);
    //Al <ul>, le agrego el <li> que acabamos de crear
});*/

//Esto está bien pero no tan bien, ya que no es lo ideal tener que hacer tantas 'inserciones' al DOM (una por cada película). Es decir, estamos haciendo un 'appendChild' por cada elemento del array peliculas. Hacemos que la página se tenga que renderizar 50 veces para crear la lista.

//Así que ahora hacemos:
/*
const $div = document.createElement("div"); //Creamos una div que va a contener a la lista

peliculas.forEach((pelicula)=>{
	const $li = document.createElement("li");
	const $texto = document.createTextNode(pelicula.titulo);
	$li.appendChild($texto);
	$li.setAttribute("data-id", pelicula.id);
	$div.appendChild($li);
});

$lista.appendChild($div);
*/
//Volvemos a hacer lo mismo que antes, pero creando un elemento 'div' el cual va a contener a todos los <li>. Y esa div, va a estar adentro de la lista <ul>.
//Esto es más eficiente que lo anterior. Ya que estamos haciendo una única inserción al DOM. No estamos haciendo 50 appendChild al DOM de forma directa como antes. Aca primero cargamos todo en una variable $div, la cual está en memoria, y después la insertamos a $lista, el cual es un elemento del DOM.

//Pero aún así, sigue sin ser lo ideal. Ya que, estamos "contaminando" al DOM. Esto pasa porque estamos poniendo una div que es un contenedor el cual no tiene significado. Por lo tanto, es como que estamos contaminándolo.



//Ahora sí, lo ideal es lo siguiente:

const $fragmento = document.createDocumentFragment(); //Creamos un Fragment

peliculas.forEach((pelicula)=>{
	const $li = document.createElement("li");
	const $texto = document.createTextNode(pelicula.titulo);
	$li.appendChild($texto);
	$li.setAttribute("data-id", pelicula.id);
	$fragmento.appendChild($li);
});

$lista.appendChild($fragmento);

//Esto es lo ideal. El fragment no se renderiza. Es un Nodo Contenedor que no aparece en el DOM final. Por lo tanto, no lo contamina. Nos sirve para hacer las 50 inyecciones en memoria, y después inyectar el fragment al DOM. Y como el fragment es 'invisible' para el HTML, no contamina. (A diferencia del div, que sí contamina).

//También podría encapsularlo todo en una función 'crearItems' la cual recibe el array
const crearItems = (lista) =>{
	const $fragmento = document.createDocumentFragment();
	lista.forEach((pelicula)=>{
		const $li = document.createElement("li");
		const $texto = document.createTextNode(pelicula.titulo);
		$li.appendChild($texto);
		$li.setAttribute("data-id", pelicula.id);
		$fragmento.appendChild($li);
	});

	return $fragmento;
};

//$lista.appendChild(crearItems(peliculas));
//Así invocaría a la función