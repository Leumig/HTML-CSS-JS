// Closure (usar 'matematicas' como objeto)

const matematicas = (function () {
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

  return {
    sumar,
    restar,
    multiplicar,
    dividir,
  };
})();