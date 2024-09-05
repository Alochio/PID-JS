const promptSync = require("prompt-sync");
const input = promptSync();

function calcIMC() {
  const weight = input("Digite o seu peso (em Kg): ");
  const height = input("Digite a sua altura (em metros): ");

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    console.log(
      "Entrada inválida. Certifique-se de inserir números válidos para peso e altura."
    );
    return;
  }

  let imc = weight / (height * height);

  if (imc < 18.5) console.log("Abaixo do peso!");
  else if (imc >= 18.5 && imc <= 24.9) console.log("Peso normal!");
  else if (imc >= 25 && imc <= 29.9) console.log("Sobrepeso!");
  else if (imc >= 30 && imc <= 34.9) console.log("Obesidade grau 1!");
  else if (imc >= 35 && imc <= 39.9) console.log("Obesidade grau 2!");
  else if (imc >= 40) console.log("Obesidade grau 3!");
}

calcIMC();
