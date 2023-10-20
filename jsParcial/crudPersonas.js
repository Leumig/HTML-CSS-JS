//import { futbolistas } from "../data/futbolistas.js";
//import { peliculas } from "../data/peliculas.js";
import { Persona } from "./persona.js";

//import { personas as personasMockaroo} from "../data/personas.js";
//Ya no necesito hacer la importación, ya que ya la hice antes y la guardé en el LocalStorage. Así que la voy a manejar desde ahí. Si la borro del localStorage, ahí si tendría que volver a importarla.

//import { crearTabla } from "./tabla.js"; //Ya no la necesitamos, porque vamos a usar el 'actualizarTabla'
import { actualizarTabla } from "./tabla.js";

//localStorage.setItem("personas", JSON.stringify(personasMockaroo));
//Seteo en el localStorage un elemento con 'key' llamada 'personas'. Y su valor, va a ser todo el array de personas que me importo de 'personas.js', el cual es el alias 'personasMockaroo'.
//Como ya le hice el set, ya puedo comentar la línea. Sabemos que los elementos del LS siempre se mantienen hasta que yo mismo los borre.

const personas = JSON.parse(localStorage.getItem("personas")) || [];
//Operador de cortocircuito de JS. Si lo primero es nulo, se asigna lo segundo después del '||'. En el segundo (el []), estamos asignando un array vacío para la const personas. Entonces, en caso de existir el elemento de key 'personas', o sea que no devuelve null, va a tomar el valor que devuelva ese parseo de JSON.

console.log(personas);
const $divTablaContenedor = document.getElementById("tabla-contenedor");

//const $formulario = getElementById("seccion-formulario"); //Una forma
const $formulario = document.forms[0];

if (personas.length) actualizarTabla($divTablaContenedor, personas);
//Si ya hay algo en el LS, quiero que la tabla aparezca cargada.

const $inputBaja = document.getElementById("inputBaja");
const $inputSubmit = document.getElementById("inputSubmit");

$formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Elimino el comportamiento por defecto del evento
  console.log("Enviando...");

  const { txtId, txtNombre, txtApellido, txtEmail, rdoGenero, txtEdad } =
    $formulario;
  //Tomo los 'names' de las inputs y los guardo en esas variables const
  //Esta es la desestructuración de un array que vimos clases atrás

  //Validar txtNombre, txtApellido, etc...

  if (txtId.value === "") {
    //Persona nueva (ya que no tiene ID)
    console.log("Nueva persona");
    const personaNueva = new Persona(
      Date.now(),
      txtNombre.value,
      txtApellido.value,
      txtEmail.value,
      rdoGenero.value,
      parseInt(txtEdad.value)
    );

    handlerCreate(personaNueva);
  } else {
    //Modificar persona (ya que tiene ID)
    //console.log("Persona existente");
    const personaAModificar = new Persona(
      parseInt(txtId.value),
      txtNombre.value,
      txtApellido.value,
      txtEmail.value,
      rdoGenero.value,
      parseInt(txtEdad.value)
    );

    handlerUpdate(personaAModificar);
    $inputBaja.setAttribute("type", "hidden");
    $inputSubmit.value = "Agregar";
  }

  $formulario.reset();
  //Vacía al formulario

  $formulario.txtId.value = "";
  //Seteo el ID actual en ""
});

function handlerCreate(nuevaPersona) {
  personas.push(nuevaPersona);
  //Agrego al 'nuevaPersona' al array 'personas'

  actualizarLocalStorage("personas", personas);
  actualizarTabla($divTablaContenedor, personas);
  //Actualizo la tabla para que la limpie y la cargue
}

function handlerUpdate(modificarPersona) {
  let index = personas.findIndex((p) => p.id == modificarPersona.id);
  //Nos guardamos el índice en el array de la persona seleccionada

  personas.splice(index, 1, modificarPersona);
  //Eliminamos el elemento con índice 'index', y en su lugar colocar el 'modificarPersona'

  actualizarLocalStorage("personas", personas);
  actualizarTabla($divTablaContenedor, personas);
}

function handlerDelete(id) {
  console.log(`Estoy en el handlerDelete y el ID que recibi es: ${id}`);
  let index = personas.findIndex((p) => p.id == id);
  personas.splice(index, 1);
  //Tomamos el indice, y del array 'personas', eliminamos el elemento con ese indice. Y a diferencia del modificar, no le pasamos tercer parámetro, ya que no vamos a reemplazarlo por ninguno.

  actualizarLocalStorage("personas", personas);
  actualizarTabla($divTablaContenedor, personas);
  $formulario.reset();
  $formulario.txtId.value = "";
  //Seteo el ID actual en ""
}

let filaPrevia = document.createElement("tr");

window.addEventListener("click", (e) => {
  console.log(`En el formulario, el ID actual es: ${$formulario.txtId.value}`);

  if (e.target.matches("td")) {
    //console.log("Hiciste Click en un td.");
    const id = e.target.parentElement.getAttribute("data-id");
    const personaSeleccionada = personas.find((p) => p.id == id);
    const filaSeleccionada = e.target.parentElement;

    if (!filaSeleccionada.classList.contains("filaSeleccionada")) {
      filaPrevia.classList.remove("filaSeleccionada");
      filaSeleccionada.classList.add("filaSeleccionada");
      cargarFormPersona($formulario, personaSeleccionada);
      $inputBaja.setAttribute("type", "button");
      filaPrevia = filaSeleccionada;
      $inputSubmit.value = "Modificar";
    } else {
      filaSeleccionada.classList.remove("filaSeleccionada");
      $formulario.reset();
      $formulario.txtId.value = "";
      $inputBaja.setAttribute("type", "hidden");
      $inputSubmit.value = "Agregar";
    }
  } else if (
    e.target.matches("input[value='Eliminar']") &&
    $formulario.txtId.value !== "" &&
    window.confirm("¿Seguro de eliminar a esta persona?")
  ) {
    console.log($formulario.txtId);
    console.log(
      `Estoy en el evento Eliminar y el tipo de dato de txtId es: ${typeof $formulario
        .txtId.value}`
    );
    handlerDelete(parseInt($formulario.txtId.value));
    $inputBaja.setAttribute("type", "hidden");
    $inputSubmit.value = "Agregar";
  }
});
//Esta es la mejor opción de todas. Estamos usando un único manejador de eventos de click, asi que es lo más eficiente. Antes estabamos usando un manejador de click por cada elemento de la tabla. Aca, siempre que hagamos click en algún lugar de la pantalla, se dispara el evento. Pero dependiendo de lo que 'matchee', se ejecuta algo o no.

function actualizarLocalStorage(clave, data) {
  localStorage.setItem(clave, JSON.stringify(data));
}

function cargarFormPersona(formulario, persona) {
  formulario.txtId.value = persona.id;
  formulario.txtNombre.value = persona.nombre;
  formulario.txtApellido.value = persona.apellido;
  formulario.txtEmail.value = persona.email;
  formulario.rdoGenero.value = persona.genero;
  formulario.txtEdad.value = persona.edad;
}
//Con esto, cargamos el formulario con la persona seleccionada de la tabla

//$divTablaContenedor.appendChild(crearTabla(personas, "white"));
//Ya no la creamos así, porque creamos el 'actualizarTabla', para hacer todo dinámicamente