//Este código JS está vinculado al archivo 'maravillas.html'

/*console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.scripts);
console.log(document.StyleSheet);
console.log(document.title);
console.log(document.documentElement.lang);*/

//La mayoría de estos elementos son arrays que cuelgan del objeto 'document'. Ahí van todos los elementos HTML que tengamos. No todos son arrays: 'title' por ejemplo, simplemente devuelve el título de la página

//Selectores
document.getElementById("redentor");
//Devuelve el primer elemento que encuentre con la ID 'redentor' (debería existir uno sólo)

document.getElementsByTagName("figure");
//Devuelve un array con todos los elementos 'figure'

document.getElementsByClassName("introduccion");
//Devuelve un array con todos los elementos vinculados a la clase 'introduccion'


//Selectores (usando CSS)
document.querySelector("#redentor");
//Devuelve el primer elemento que encuentre con el selector CSS 'redentor'. Puede ser una ID como en este caso, o podría ser una clase o una etiqueta. Devuelve sólo la primer ocurrencia. Es OBLIGATORIO que, al ser una ID, tenga el '#' adelante (ya que le estamos pasando literalmente el selector CSS)

document.querySelectorAll("figure");
//Devuelve una NodeList (similar a array) con todos los elementos 'figure'. En este caso le estamos pasando el nombre de una etiqueta (tagName), por lo tanto no tenemos que ponerle '#' ni '.'

document.querySelectorAll(".contacto");
//Devuelve una NodeList (similar a array) con todos los elementos vinculados a la clase CSS 'contacto'. Es OBLIGATORIO que, al ser una clase, tenga el '.' adelante (ya que le estamos pasando literalmente el selector CSS)

//Mostrando los elementos
console.log(document.getElementById("redentor")); //Muestra el elemento con ID 'redentor'
console.log(document.getElementsByTagName("figure")); //Muestra todos los elementos <figure>
console.log(document.getElementsByClassName("introduccion")); //Muestra todos los elementos con clase 'introduccion'

console.log(document.querySelector("#redentor")); //Muestra el elemento con ID de CSS '#redentor'
console.log(document.querySelectorAll("figure")); //Muestra todos los elementos <figure>
console.log(document.querySelectorAll(".contacto")); //Muestra todos los elementos con clase CSS '.contacto'

//Usando variables (por convención llevan $ adelante)
const $link = document.querySelector("a");
console.log($link); //Muestra el primer <a> que encuentre

const $parrafo = document.querySelector("p");
console.log($parrafo); //Muestra el primer <p> que encuentre

const $figuras = document.querySelectorAll("figure");
console.log($figuras); //Muestra todos los <figure> que encuentre


//Atributos
console.log("\nAtributos");
console.log($link.href); //Muestra el atributo 'href' de $link (el elemento <a>)
console.log($link.getAttribute("href"));  //Nos muestra exactamente lo mismo

//$link.setAttribute("href", "https://infobae.com"); 
//El primer parámetro de 'setAttribute' es el nombre, el segundo es el contenido

//$link.setAttribute("target", "_blank");  //Le agregamos otro atributo

//$link.removeAttribute("target");  //Le eliminamos un atributo

//$link.toggleAttribute("disabled");   //Al no tener 'disabled', se lo va a poner

//console.log($link.hasAttribute("href"));   //Devuelve TRUE o FALSE (en este caso, true)


//Crear elementos
const $imagen = document.createElement("img"); //creo un elemento <img> y lo guardo en $imagen
$imagen.setAttribute("src", "https://picsum.photos/id/237/200/200"); //le seteo el atributo 'src'
$imagen.setAttribute("alt", "imagen de un animal"); //le seteo el atributo 'alt'

//Creo una variable que apunta al elemento con ID 'contenedor-imagen' (está en una div de la primera figure)
const $divImagen = document.getElementById("contenedor-imagen");

//Colgar el elemento en el DOM de forma dinámica
$divImagen.appendChild($imagen);

//Esta es otra forma de colgarlo (no dinámica)
//$divImagen.innerHTML = "<img src='https://picsum.photos/id/237/200/200' alt='imagen de un animal'/>";

//Esta es otra forma de colgarlo (pseudo-dinámica)
/*let url = "https://picsum.photos/id/237/200/200";
let alt = "imagen de un animal";
$divImagen.innerHTML = `<img src=${url} alt=${alt}/>`;*/


//Ahora hagamos un subtítulo con su texto
const $subTitulo = document.createElement("h2");
$subTitulo.classList.add("subtitulo"); //Le agrego una clase "subtitulo"

//Asignandole valor al 'textContent' de un elemento
//$subTitulo.textContent = "Soy un subtítulo h2";
//Con 'textContent' podemos escribirle texto al h2.

//Otra forma de hacer lo mismo:
const $nodoTexto = document.createTextNode("Soy un subtítulo h2");
//Aca estamos usando createTextNode. Antes con createElement, hacíamos un 'nodo elemento'. Con createTextNode, hacemos un 'nodo texto'. Y tenemos que anidarlo al titulo:
$subTitulo.appendChild($nodoTexto);

//Lo inyectamos en el DOM (en este caso, lo colgamos en el <section id="introduccion">)
const $secIntroduccion = document.getElementById("introduccion");
$secIntroduccion.appendChild($subTitulo);

console.log("\n");
console.log("Ejemplo con divParrafos");
//Ahora practiquemos con los 3 párrafos creados, los cuales estan dentros de la <div id="textos">
const $divParrafos = document.getElementById("textos");
console.log($divParrafos); //Muestra el código HTML de <div id="textos">

console.log($divParrafos.childNodes); //Muestra su nodeList, que contiene a todos los hijos nodo

console.log($divParrafos.children); //Muestra su HTMLCollection, que contiene a todos los hijos nodo elementos

console.log($divParrafos.firstChild); //Muestra el primer elemento de la NodeList ('childNodes')
console.log($divParrafos.lastChild); //Muestra el último elemento de la NodeList ('childNodes')

console.log($divParrafos.firstElementChild); //Muestra el primer elemento de la HTMLCollection ('children')
console.log($divParrafos.lastElementChild); //Muestra el último elemento de la HTMLCollection ('children')

console.log($divParrafos.children[1]); //Muestra el segundo elemento de la HTMLCollection ('children')
console.log($divParrafos.childNodes[1]); //Muestra el segundo elemento de la NodeList ('childNodes')

//Como vemos que son todos <p> lo que tenemos, la lista de nodos elemento va a ser literalmente sólo 3 <p>. Sin embargo, en la lista que contiene a todos los nodos, vamos a ver que cada <p> viene con un nodo de texto al inicio y al final. Ambos nodos de texto con un value: (\n). Obviamente, son los saltos de línea. 

//Funciones para agregar elementos al DOM
//$divParrafos.appendChild(); //Agrega un nodo hijo al inicio
//$divParrafos.prepend(); //Agrega un nodo hijo al final
//$divParrafos.before(); //Agrega un nodo hijo una línea antes del padre (o sea, por fuera)
//$divParrafos.after(); //Agrega un nodo hijo una línea después del padre (o sea, por fuera)

const $imagen2 = document.createElement("img");
$imagen2.setAttribute("src", "https://picsum.photos/id/134/150/150");
$imagen2.setAttribute("alt", "imagen de un puente");

$divParrafos.insertBefore($imagen2, $divParrafos.children[1]);
//Le insertamos el elemento $imagen justo una línea antes (before) del elemento [1] de la lista de nodos hijo elemento de $divParrafos. Es decir, justo antes del segundo párrafo.

//$divParrafos.replaceChild($imagen, $divParrafos.firstElementChild);
//Reemplazamos elementos. El primer parámetro sera el elemento que tome el lugar del segundo parámetro, el cual se va


//Eliminar elementos
/*while($divParrafos.hasChildNodes()){ //hasChildNodes devuelve True o False
	$divParrafos.removeChild($divParrafos.firstChild); //removeChild elimina el elemento que le pasemos
}*/
//Así, elimino todos los hijos nodo de un elemento de forma correcta. En este caso, del <div>.

//Mostrar elementos en consola
console.log("\nLista de elementos del div");
let elemento = $divParrafos.firstElementChild;
while(elemento){
	console.log(elemento);
	elemento = elemento.nextElementSibling;  //nextElementSibling retorna el elemento que le sigue
}
console.log("Fin de la lista\n\n");

const $pRojo = document.querySelector("p.rojo"); //'p.rojo' significa <p class="rojo">
console.log($pRojo.closest("section")); //Nos devuelve el <section> más cercano a $pRojo

console.log($pRojo.className); //Muestra "rojo" (si tuviera más clases, muestra todas)
console.log($pRojo.classList); //Muestra un DOMTokenList con todas las clases de $pRojo

//Funciones de la classList
//$pRojo.classList.add();  //Agrega una clase
//$pRojo.classList.remove();  //Borra una clase
//$pRojo.classList.toggle();  //Cambia el estado de presencia de una clase
//$pRojo.classList.contains();  //Devuelve True o False dependiendo de si contiene la clase
//$pRojo.classList.replace();  //Reemplaza una clase por otra

//Imaginando que a pRojo, en el HTML, le ponemos un style embebido, podríamos hacer
console.log($pRojo.style); //Muestra una CSSStyleDeclaration, que contiene a todos los estilos aplicados
console.log($pRojo.style.backgroundColor); //Muestra el valor del background-color
console.log($pRojo.style.getPropertyValue("background-color"));  //Muestra el valor del background-color
//En estos casos, pRojo NO tiene un 'style' en su línea de declaración en el archivo HTML. Por lo tanto, cuando mostremos su 'style', nos va a mostrar que todos sus valores están sin modificar (""). Asi que cuando quiero que me muestre el background, o hago el getPropertyValue, no me va a mostrar nada.

$pRojo.style.setProperty("color", "yellow");  //Le establece una propiedad 'color' con valor 'red'
//El setProperty si funciona: literalmente lo que hace es agregarle CSS embebido. Le agrega un style="color: yellow;";

console.log($pRojo.style.color);  //Muestra 'yellow'
console.log($pRojo.style.getPropertyValue("color"));  //Muestra 'yellow'