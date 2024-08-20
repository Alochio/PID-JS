const promptSync = require("prompt-sync");
const input = promptSync();

function calculaDescontos(valorHora, horasMes) {
  const salarioBruto = valorHora * horasMes;

  const descontoINSS = salarioBruto * 0.1;
  const descontoSindicato = salarioBruto * 0.02;
  const descontoIR = salarioBruto * 0.15;

  const salarioLiquido =
    salarioBruto - (descontoINSS + descontoIR + descontoSindicato);

  console.log(`
    Salario Bruto = ${salarioBruto}
    Quantia paga ao INSS = ${descontoINSS}
    Quantia para para o sindicato = ${descontoSindicato}
    Quantia para para o imposto de renda = ${descontoIR}
    Salario Liquido = ${salarioLiquido}
    `);
}

const valorHora = input("Digite quanto você ganha por hora: ");
const horasMes = input("Digite quantas horas você trabalho este mês: ");

calculaDescontos(valorHora, horasMes);
