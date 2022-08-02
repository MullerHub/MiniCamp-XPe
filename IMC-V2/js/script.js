var IMC = null

function start() {
  let buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
  
  
  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  let imcResult = document.querySelector('#imc-result');

  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);
  
  IMC = calculateImc(weight, height);
  let formattedImc = IMC.toFixed(2).replace('.', ',');
  
  imcResult.innerText = formattedImc;
  resultIMC()
}





function resultIMC() {
  const messageEl = document.getElementById("imc-message")
  var text = ""
  if (IMC < 0) {
    text="você está me testando?"
  } else if (IMC < 17) {
    text="você está muito abaixo do peso"
  } else if (IMC >= 17 && IMC <= 18.49) {
    text="Abaixo do peso"
  } else if (IMC >= 18.5 && IMC < 25) {
    text="Peso normal"
  } else if (IMC >= 25 && IMC < 30) {
    text="Acima do peso"
  } else if (IMC >= 30 && IMC < 35) {
    text="Obesidade grau I"
  } else if (IMC >= 35 && IMC <= 40) {
    text="Obesidade grau II"
  } else if (IMC > 40 && IMC <= 60) {
    text="Obesidade grau III"
  } else if (IMC >= 60) {
    text="Por favor, faça uma dieta e cuide da sua saúde"
  }

  messageEl.innerText = text
}

console.log(resultIMC)

start();