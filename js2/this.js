function miFuncion() {
    console.log(this);
};
//Esta función esta declarada en window (el scope global)

const objeto = {
    nombre: "Juan",
    miFuncion() {
        console.log(this);
    }
}

//window.miFuncion();  //muestra window
//objeto.miFuncion();  //muestra objeto

const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Estoy en ${this}`);
    },
    despedir: ()=>{ //Al ser arrow function, su 'this' será el 'this' de 'persona' (window)
        console.log(`Chau, mi nombre es ${this.nombre} y tengo ${this.edad} años. Estoy en ${this}`);
    }
}

//persona.saludar();  //"Hola, mi nombre es Juan y tengo 30 años. Estoy en [object Object]"
//persona.despedir();  //"Chau, mi nombre es undefined y tengo undefined años. Estoy en [object window]

/*Despedir carga los valores 'this.nombre' y 'this.edad' como undefined, ya que el 'this' de una arrow function va a ser el mismo this que el de su padre. En este caso, su padre es el objeto persona, y el 'this' de persona es window. Por lo tanto, es como si hicieramos window.nombre y window.edad. Es undefined porque window no tiene ni 'nombre' ni 'edad'.*/


persona.saludar();   //su this es 'persona' ya que lo estamos invocando directamente

const saludar = persona.saludar;

saludar();   //su this es 'window' ya que perdemos la referencia del this de 'persona'
//Esto sucede porque 'saludar' es una constante que estamos declarando en window (scope global)


function ejecutora(callback) {
	callback();
}

ejecutora(persona.saludar);   //el this de la función saludar va a ser window y no persona
/*Esto es así ya que estamos invocando a la función mediante 'ejecutadora'. Y 'ejecutadora', es una función declarada en window. Y no dentro del objeto persona. Por esto, va a mostrar datos undefined*/


//Primer solución: usar arrow function ()=> (expresión lambda)
//Esta solución sirve y es muy usada pero no es la ideal

ejecutora(()=>{
    persona.saludar();
})
//Estamos llamando a la misma función ejecutora. Pero a diferencia de antes, le estamos pasando por parámetro una función arrow function, la cual ejecuta persona.saludar() directamente. Por esto, su this va a ser persona.

//Segunda solución (la más óptima): Usar los métodos 'call', 'apply' o 'bind'
//Como sabemos, en JS todas las funciones son objetos. Y por lo tanto, tienen métodos.
console.log("\nMétodos call, apply y bind:");

// Método call
const saludarConCall = persona.saludar;
saludarConCall.call(persona);
//saludarConCall.call(persona, "Chocolate", 23, "Masculino");
//Call sirve para inyectarle por afuera quién es su this.
//El primer parámetro que recibe será el this (un objeto con scope {}).
//El resto de parámetros que reciba, seran los parámetros que va a recibir la función saludar.

// Método apply
const saludarConApply = persona.saludar;
saludarConApply.apply(persona);
//saludarConApply.apply(persona, ["Chocolate", "Masculino"]);
//Apply funciona exactamente IGUAL que Call. El primer parámetro que recibe va a ser el 'this'. La diferencia es que, después de ese primer parámetro this, lo que sigue es un array de parámetros. Esos parámetros van entre corchetes [] y serán los parámetros que recibe la función saludar.

// Método bind
//Bind devuelve una nueva función, sin perder la referencia del this
const saludarConBind = persona.saludar;
const saludarPersona = saludarConBind.bind(persona);
//const saludarPersona = saludarConBind.bind(persona, "Chocolate", 23, true, "Estudiante");
saludarPersona();
//Esto va a hacer que 'saludarPersona' contenga a la función saludar() de persona, con el this de persona. Es decir, la función saludar no pierde la referencia del this de su objeto persona.
//Bind, al igual que call y apply, recibe como primer parámetro el this. Y después es igual que call. Le vas pasando los parámetros que quieras que tenga la función 'saludar' separados por comas ,"Masculino", 23, true, ..etc