function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (esDistintoDeCero(b)) return a / b;
}
function esDistintoDeCero(a) {
  return a !== 0;
}

/*
export function sumar(a, b){
    return a + b;
}
//Asi se exportaría individualmente (habría que hacerlo con cada función)*/

export { sumar, restar, multiplicar, dividir };
//Asi se exporta en grupo

//export default{ sumar, restar, multiplicar, dividir };
//Asi se exporta por default