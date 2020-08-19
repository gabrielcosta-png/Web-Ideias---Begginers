function converter() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    result.innerHTML = imc + " você está abaixo do peso";
  } else if (imc > 18.5 && imc < 25) {
    result.innerHTML = imc + " seu peso está normal";
  } else if (imc > 25 && imc < 30) {
    result.innerHTML = imc + " voce está acima do peso";
  } else if (imc > 30) {
    result.innerHTML = imc + " voce está com Obesidade morbida";
  }
}
