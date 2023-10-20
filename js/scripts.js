function saludar(){
    alert("Hola mundo");
}

function handlerClick(){
    alert("Hola mundo");
}


//LEER
//Hay 2 formas de darle funcionalidad al botón Saludar que tenemos en el HTML de pag1. Son las siguientes:


//Esta es la forma 'ideal' (aunque también más complicada) de hacerlo. Es decir, usando el evento 'load'. Lo que hacemos es lo siguiente: 'window' es literalmente la ventana del navegador, a la cual le decimos: "cuando termines de cargarte entera, es decir, cuando ya cargues todos los controles, recién en ese momento ejecutá la siguiente función:". Entonces, dentro de esa función que le pasamos al evento escuchador, le damos una acción al botón Saludar. Hacemos lo mismo: obtenemos la ddm de btnSaludar (que es la ID del botón) y a esa ddm -o a ese botón- le agregamos un evento escuchador. Le pasamos el evento click y una función a ejecutar. Es como decirle "Cuando alguien te haga click, ejecuta esto:".
window.addEventListener("load", function() {
    document.getElementById("btnSaludar").addEventListener("click", function(){
        alert("Hola mundo");
    });
});


//Esto es lo que haría si hacemos el linkeo del archivo js en la última linea del body, es decir, sin usar el Load:
/*
const btnSaludar = document.getElementById("btnSaludar");
//Creamos una variable constante llamada btnSaludar y le cargamos una dirección de memoria. La ddm que le cargamos es la  del control que queremos usar, por eso le escribimos el ID correspondiente ("btnSaludar"). Si 'btnSaludar' no existiera, entonces el método 'getElementyById' devuelve null. Null es 'la no dirección de memoria', es decir, la dirección de memoria 00000000. Recordemos que las ddm son expresiones hexadecimales.

btnSaludar.addEventListener("click", handlerClick);
//Primer forma de hacerlo: le paso la función handlerClick como segundo parámetro. (Parámetro actual)

//btnSaludar.addEventListener("click", function (){
//    alert("Hola mundo");
//}); //Esta es otra forma de hacerlo. Literalmente le pasamos la función como segundo parámetro.
//En este caso no escribimos el nombre de la función 'handlerClick', ya que no es necesario. No es necesario porque en el cuerpo de addEventListener, habrá un parámetro formal -el cual es un puntero a función- que recibe la ddm de la función que le llegue como parámetro actual (en este caso, la función que codeamos en el segundo parámetro).
*/