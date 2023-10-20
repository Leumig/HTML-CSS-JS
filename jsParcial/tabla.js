export function crearTabla(listaDeElementos, colorEncabezado) {
  if (!Array.isArray(listaDeElementos)) return null;

  //const fragmento = document.createDocumentFragment();
  const tabla = document.createElement("table");
  //tabla.addEventListener("click", handlerClickTabla, true);
  tabla.appendChild(crearEncabezado(listaDeElementos[0], colorEncabezado));

  tabla.appendChild(crearCuerpo(listaDeElementos));

  //fragmento.appendChild(tabla);
  //return fragmento;
  return tabla;
}
//No es necesario usar el Fragment, ya que en realidad, a esta altura, no estamos haciendo ningun append al DOM. Estamos haciendo todo en memoria. Por eso las variables no tienen '$' adelante, ya que son cosas que no vamos a colgar al DOM todavía. Esa inyección recién la vamos a hacer en el archivo .js que importe estas funciones

const crearEncabezado = (elemento, colorEncabezado) => {
  const thead = document.createElement("thead");
  const trEncabezado = document.createElement("tr");
  trEncabezado.style.setProperty("background-color", colorEncabezado);

  for (const key in elemento) {
    if (key === "id") continue; //El 'continue' hace que se termine la iteración actual en el for y pasa a la siguiente

    const th = document.createElement("th");
    th.textContent = key;
    trEncabezado.appendChild(th);
  }

  thead.appendChild(trEncabezado);

  return thead;
};

const crearCuerpo = (listaDeElementos) => {
  if (!Array.isArray(listaDeElementos)) return null;

  const tbody = document.createElement("tbody");

  listaDeElementos.forEach((elemento, index) => {
    const tr = document.createElement("tr");
    //tr.addEventListener("click", handlerClickTr, false); //A cada 'tr' le agrego un eventoEscuchador 'click'

    if (index % 2 === 0) {
      tr.classList.add("filaPar"); //Si el índice del elemento es par, le agregamos esa clase al 'tr'
    }

    for (const key in elemento) {
      if (key === "id") {
        tr.setAttribute("data-id", elemento[key]); //Si la key es 'id', lo agregamos como atributo personalizado
        continue;
      }
      const td = document.createElement("td");
      td.textContent = elemento[key]; //elemento[key] devuelve el 'value' del elemento en esa [key]
      //td.addEventListener("click", handlerClick);
      tr.appendChild(td);
    }

    tbody.append(tr);
  });

  return tbody;
};

/*function handlerClick(e) {
  //console.log("Click");
  //console.log(e); //Muestra toda la info sobre el evento
  //console.log(e.target); //Muestra al emisor del evento
  console.log("Soy el manejador del td. El target es:", e.target);
  const tr = e.target.parentElement;
  console.log(tr);

  //const id = e.target.parentElement.getAttribute("data-id"); //Opción 1
  const id = e.target.parentElement.dataset.id; //Opción 2
  console.log(id);
}*/
/*function handlerClickTr(e) {
  console.log("Soy el manejador del tr. El target es:", e.target);
}
function handlerClickTabla(e) {
  console.log("Soy el manejador de la tabla El target es:", e.target);
}*/
//Estas 2 funciones las uso para comprobar cómo funcionan los manejadores

export const actualizarTabla = (contenedor, data, colorEncabezado)=>{
  while(contenedor.hasChildNodes()){
      contenedor.removeChild(contenedor.firstElementChild);
  }
  //Mientras el contenedor tenga hijos, los voy eliminando uno por uno.

  contenedor.appendChild(crearTabla(data, colorEncabezado));
  //Al contenedor le agrego lo que devuelva crearTabla con la lista que recibimos.
};