function botao(num){
  valor = document.calc.valuep.value += num ;
}

function converter(){
  let valuep = document.getElementById("valuep").value;
  let result = document.getElementById("result");

  if (valuep >= 0.05) {
  result.innerHTML = "Seu resultado " + valuep +  " não foi significativo";
} else {
  result.innerHTML = "Seu resultado " + valuep +  " foi significativo"
}}

function resetar(){
document.getElementById('valuep').value='';
document.getElementById('result').value='';
}
