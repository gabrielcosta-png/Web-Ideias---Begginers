var value;
var result;
function btn(num) {
  value = document.calc.visor.value += num;
}

function reset() {
  document.calc.visor.value = "";
}

function calculate() {
  resultado = eval(value);
  document.calc.visor.value = resultado.toLocaleString("pt-BR");
}
