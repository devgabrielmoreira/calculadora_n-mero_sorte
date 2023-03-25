// seleciona os botões do primeiro número
const firstNumberButtons = document.querySelectorAll(".firstNumber button");

// seleciona os botões do segundo número
const secondNumberButtons = document.querySelectorAll(".secondNumber button");

// seleciona os botões do terceiro número
const thirdNumberButtons = document.querySelectorAll(".thirdNumber button");

// seleciona o botão calcular
const calculateButton = document.querySelector("#calcular");

// seleciona o elemento onde será exibido o resultado
const resultElement = document.querySelector("#result");

let firstNumber;
let secondNumber;
let thirdNumber;

// função que escolhe o primeiro número
function chooseFirstNumber(number) {
  firstNumber = number;
}

// função que escolhe o segundo número
function chooseSecondNumber(number) {
  secondNumber = number;
}

// função que escolhe o terceiro número
function chooseThirdNumber(number) {
  thirdNumber = number;
}

// função que calcula e exibe o número da sorte
function calculateLuckyNumber() {
  const luckyNumber = firstNumber + secondNumber + thirdNumber;
  resultElement.textContent = luckyNumber;
}

// adiciona os event listeners aos botões do primeiro número
firstNumberButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    chooseFirstNumber(parseInt(button.textContent));
  });
});

// adiciona os event listeners aos botões do segundo número
secondNumberButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    chooseSecondNumber(parseInt(button.textContent));
  });
});

// adiciona os event listeners aos botões do terceiro número
thirdNumberButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    chooseThirdNumber(parseInt(button.textContent));
  });
});

// adiciona o event listener ao botão calcular
calculateButton.addEventListener("click", function() {
  calculateLuckyNumber();
});
