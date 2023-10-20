/*Consigna:
Sumar 5 y 8, calcular el cuadrado, multiplicarlo por 10, restarle 2 y mostrarlo por consola. */

/*function sumar(a, b, callback){
    let rta;
    setTimeout(() => {
        try {
            if (typeof a === "number" && typeof b === "number"){
                rta = a + b;
                console.log("La suma es " + rta);
                callback(rta);
            } else {
                throw Error("Parámetros inválidos para la suma");
            }
        } catch (error) {
            console.log(error.message);
        }
    }, 3000);
}*/
//Esta sería una función 'sumar' asíncrona la cual está simulando, mediante un try-catch, lo que sería una promesa. Tiene un setTimeout para generar una latencia, es decir, un tiempo de espera ficticio. Así se haría con todas las demás funciones.


//Ejemplo validarPar que devuelve una Promesa y simula latencia
function validarPar(valor){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (typeof valor !== "number") {
                reject("El valor recibido no es un número");
            }else{
                if(valor % 2 == 0){
                    resolve("El numero es Par");
                }else{
                    resolve("El numero no es Par");
                }
            }           
        }, 3000);
    })
}
/*console.log("Inicio");
console.log(validarPar(20));
//console.log(validarPar("Arbol"));
console.log("Fin");*/
//Ahí, lo que hicimos fue usar una función validarPar la cual devuelve una promesa, y la mostramos por consola.

/*validarPar(20).then((resultado)=>{
	console.log(resultado);
}).catch((error)=>{
	console.log(error);
});*/
//Ahí, lo que hicimos fue hacer uso de los métodos 'then' y 'catch' que son propios de una promesa. Tanto 'Then' como 'Catch' reciben un callback. Ese callback que reciben, recibe un parámetro. En el caso del callback del Then, el parámetro que recibe va a ser el valor que devuelva el 'Resolve' de la promesa. Y en el caso del callback del 'Catch', el parámetro que recibe va a ser el valor que devuelva el 'Reject' de la promesa.


//Ahora voy a hacer todas las funciones pero con Promesas
function sumar(a, b){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number"){
                let rta = a + b;
                console.log("La suma es " + rta); //Solo para visualizar
                res(rta);
            } else {
                rej("Parámetros inválidos para la suma");
            }
        }, 3000);
    })
}

function cuadrado(a){
    return new Promise( (res, rej) =>{
        setTimeout(() => {
            if (typeof a === "number"){
                let rta = a * a;
                console.log("El cuadrado es " + rta); //Solo para visualizar
                res(rta);
            } else {
                rej("Parámetros inválidos para el cuadrado");
            }
        }, 2000);
    })
}

function multiplicar(a, b){
    return new Promise( (res, rej) =>{
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number"){
                let rta = a * b;
                console.log("El producto es " + rta); //Solo para visualizar
                res(rta);
            } else {
                rej("Parámetros inválidos para la multiplicación");
            }
        }, 3000);
    })
}

function restar(a, b){
    return new Promise( (res, rej) =>{
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number"){
                let rta = a - b;
                console.log("La resta es " + rta); //Solo para visualizar
                res(rta);
            } else {
                rej("Parámetros inválidos para la resta");
            }
        }, 1000);
    })
}

function informar(valor) {
    console.log("El resultado es " + valor);
}

console.log("Inicio");

/*sumar(5,8).then((resultadoSuma)=> {
    return cuadrado(resultadoSuma);
}).then((resultadoCuadrado) => {
    return multiplicar(resultadoCuadrado, 10);
}).then((resultadoProducto) => {
    return restar(resultadoProducto, 2);
}).then((resultadoResta) => {
    informar(resultadoResta);
}).catch((razonError) => {
    console.log(razonError);
});*/
//'sumar(5,8)' es una función que retorna una promesa. Por lo tanto, uso su 'then'. El then recibe un callback, el cual va a tener un parámetro, que va a ser el valor que tenga el 'Resolve' dentro de la promesa que devuelve sumar. Y el then, va a hacer un retorno. Ese retorno va a ser una promesa. Una promesa la cual, la consigue al invocar a la función multiplicar. Y a multiplicar, le pasa el valor de lo que atrapó el Then. Y así sucesivamente hasta llegar a informar. Esto se llama el 'Promise Hell'.
//Si cualquiera de estas promesas retornan un reject, lo resuelvo con un único catch.

//Recordemos que a las arrow function las podemos resumir para que queden así:

sumar(5,8)
.then(resultadoSuma => cuadrado(resultadoSuma))
.then(resultadoCuadrado => multiplicar(resultadoCuadrado, 10))
.then(resultadoProducto => restar(resultadoProducto, 2))
.then(resultadoResta => informar(resultadoResta))
.catch(razonError => console.log(razonError))

//Sacamos los 'return' y por lo tanto también le sacamos las llaves { }

console.log("Fin");