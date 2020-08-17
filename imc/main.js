function converter() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  const imc = peso / (altura * altura);

  if (imc >= 30) {
    result.innerHTML = imc + " você está acima do peso";
  } else {
    result.innerHTML = imc + " você não está acima do peso";
  }
}
