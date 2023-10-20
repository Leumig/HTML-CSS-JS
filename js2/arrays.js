// Arrays
// Un objeto Array tiene un Prototype Array. Dentro de él, va a estar el Prototype Object

//Declaración con 'new'
//const vec = new Array();  //array vacío
//console.log(vec);
//const vec2 = new Array(23, 4, 7, 8);  //array con 4 elementos
//console.log(vec2);

//Declaración sin 'new' (Array literal) (la más usada)
const vec = [];  //array vacío
const vec2 = [23, 4, 7, 8];  //array con 4 elementos

//const vector; //Esto da error ya que las CONST se tienen que inicializar si o si

console.log("Contenido de vec:", vec);
console.log("Contenido de vec2:", vec2);

//Declarar con vec = new Array();  o con  vec = [ ]  es exactamente lo mismo. Se usa más la segunda forma

//vec = vec2; //esto no puede hacerse, ya que vec es CONST, y ya le asignamos una dirección de memoria antes. Le asignamos la ddm de un array. Por lo tanto, ya no podemos hacerle '=' y asignarle otra cosa. Si fuera let, sí. Pero no tenemos que usar let.

const vec3 = [24, 2, 1, 6];
const vec4 = vec3;
//Ahora si puedo hacer esto. Porque es la primer asignación que le hago a vec4. Estoy diciendo que 'vec4' va a ser un puntero a array, el cual va a apuntar al mismo array al que apunta vec3. Por lo tanto, tanto vec3 como vec4 son dos variables punteros a array las cuales apuntan al mismo array en memoria. NO son dos arrays distintos. Son dos variables que contienen el mismo array.

//Función push
vec3.push(300); //'push' agrega un elemento al final del array

console.log("Retorno del push en vec3:", vec3.push()); //muestra '5' porque push siempre devuelve el lenght del array
console.log("Contenido de vec3:", vec3);
console.log("Contenido de vec4:", vec4);
// Ambos van a mostrar lo mismo, es decir, el array con el '300' al final. Esto es porque, como dijimos, vec3 y vec4 apuntan al mismo array. No son dos distintos.

//Función pop
console.log("Pop de vec4:", vec4.pop());  //'pop' elimina el último elemento y lo devuelve
console.log("Contenido de vec4:", vec4);

//Función shift
console.log("Shift de vec4:", vec4.shift()); //'shift' elimina el primer elemento y lo devuelve
console.log("Contenido de vec4:", vec4);

//Función unshift
console.log("Unshift de vec4:", vec4.unshift(700, 200)); 
console.log("Contenido de vec4:", vec4);
//'unshift' agrega elementos al inicio del array y devuelve su length

//Función concat
const vec5 = [34, 20, 25];
const vec6 = vec5.concat();

console.log("Contenido de vec5:", vec5);
console.log("Contenido de vec6:", vec6);
//concat() devuelve un array completamente desvinculado del original. Es decir, como si hiciera una copia nueva. Es literalmente igual que el [...vec];  'spread operator' = 'operador de propagación'
const vec7 = [...vec5, ...vec6];
//vec7 va a contener todo lo que tenga vec5 y vec6
console.log("contenido de vec7:", vec7);


console.log("\nFunciones de Arrays con Callbacks");

//Función forEach
console.log("Usando el ForEach para mostrar cada elemento de vec2");
vec2.forEach((elemento)=>{
	console.log(elemento);
})
// 'forEach' lo que hace es ejecutar la función que le pasamos por cada elemento del array.
// En este caso, la función realiza un console.log para mostrar cada elemento de 'vec4'.

//vec2.forEach(e => console.log(e)); 
// Esta es una forma todavía más resumida de hacerlo. No es obligatorio pero es una buena práctica para el futuro

//Función Map
const duplicados = vec4.map((elemento)=>{
    return elemento *2;
});
console.log("Contenido de vec4:", vec4);
console.log("Contenido de duplicados:", duplicados);
// 'map' crea y devuelve un nuevo array desde 0. Cada elemento de ese array lo va a obtener gracias al 'return' de la función que reciba. Obviamente, la función se va a ejecutar por cada elemento del 'vec4'

//const duplicados = vec4.map(e => e * 2);
// Esta es una forma todavía más resumida de hacerlo. No es obligatorio pero es una buena práctica para el futuro

const duplicados2 = vec4.map((elemento => {
	if (elemento % 2){
		return elemento;
	}
	else{
		return elemento * 2; 
	}
}))
// Esta función retorna a los elementos pares multiplicados por 2. Si no es par, lo retorna normal
console.log("Contenido de duplicados2:", duplicados2);

//const duplicados2 = vec4.map(e => e % 2 ? e : e * 2);
// Esta es una forma todavía más resumida de hacerlo. No es obligatorio pero es una buena práctica para el futuro
// Se hace uso del operador ternario (if-else) para que quede todavía más resumida

//Función Filter
const pares = vec4.filter((e)=>{
	return e % 2 === 0;
})
//'filter' crea y devuelve un nuevo array desde 0. Si el return del callback es true, agrega ese elemento al nuevo array. Si es false, lo omite y no lo agrega.
console.log("Contenido de pares:", pares);

//const pares = vec4.filter(e => e % 2 === 0);
// Esta es una forma todavía más resumida de hacerlo. No es obligatorio pero es una buena práctica para el futuro

//Función reduce
const total = vec4.reduce( (prev, actual) => {
	return prev + actual;
}, 0);
//'reduce' devuelve un único elemento (de cualquier tipo). Recibe un callback y un valor inicial.

console.log("Contenido de vec4:", vec4);
console.log("Contenido de total:", total); //va a devolver 909, que es la suma de todos los valores del vec4

//const total = vec4.reduce((p, a) => p + a, 0);
// Esta es una forma todavía más resumida de hacerlo. No es obligatorio pero es una buena práctica para el futuro

const nombres = ["pepe", "carlos", "ana", "luisa"]; 
const totalNombres = nombres.filter(n => n.length > 4).reduce((p, a) => p + a.length, 0);
console.log("Contenido de totalNombres:", totalNombres); //devuelve 11 (5 + 6, por 'carlos' y 'luisa') 
// Asi se podrían combinar 'filter' con 'reduce'

//Función splice
const vec10 = [60, 70, 20, 40, 100];
const eliminadosDeVec10 = vec10.splice(2, 2);
//'splice' devuelve un array con los elementos que elimina. Su criterio para eliminar es con un índice inicial (su primer parámetro) y con la cantidad de elementos a eliminar a partir de ahí (incluyendo al índice inicial)

console.log("Contenido de vec10:", vec10);
console.log("Contenido de eliminadosDeVec10:", eliminadosDeVec10);

console.log("El índice del '100' en el vec10 es:", vec10.indexOf(100));
//indexOf recibe el valor que debe buscar, y devuelve su índice. Si no lo encuentra, devuelve -1
//indexOf también puede recibir un segundo parámetro, el cual va a ser el índice desde el cual empieza a buscar

console.log("El vec10 invertido es:", vec10.reverse());
//reverse literalmente invierte el orden de los elementos del array