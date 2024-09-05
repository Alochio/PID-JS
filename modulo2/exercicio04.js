const promptSync = require("prompt-sync");
const input = promptSync();

function print(originalSalary, increaseAmount, salary) {
  console.log(`Salário antes do reajuste: R$ ${originalSalary.toFixed(2)}`);
  console.log(`Valor do aumento: R$ ${increaseAmount.toFixed(2)}`);
  console.log(`Novo salário após o aumento: R$ ${salary.toFixed(2)}`);
}

function calcSalary() {
  let salary = parseFloat(input("Digite o seu salário: "));

  if (isNaN(salary) || salary < 0) {
    console.log(
      "Entrada inválida. Certifique-se de inserir um número válido para o salário."
    );
    return;
  }

  const originalSalary = salary;
  let increasePercentage;

  if (salary <= 280) {
    increasePercentage = 0.2;
  } else if (salary > 280 && salary <= 700) {
    increasePercentage = 0.15;
  } else if (salary > 700 && salary <= 1500) {
    increasePercentage = 0.1;
  } else {
    increasePercentage = 0.05;
  }

  const increaseAmount = salary * increasePercentage;
  salary = salary + increaseAmount;

  print(originalSalary, increaseAmount, salary);
}

calcSalary();
