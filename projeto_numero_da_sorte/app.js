function calculateLuckyNumber(name) {
    // código da função da calculadora
  }
  module.exports = calculateLuckyNumber;
  const calculateLuckyNumber = require('./calculator.js');
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Qual é o seu nome? ', (name) => {
    const luckyNumber = calculateLuckyNumber(name);
    console.log(`O seu número da sorte é ${luckyNumber}!`);
    rl.close();
  });    