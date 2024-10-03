const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function perguntar(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function convertParaReal(moeda, valorConvercao) {
  valorConvercao = parseFloat(valorConvercao);

  console.log(`Valor inserido: Moeda = ${moeda} valor = ${valorConvercao}`);

  if (moeda === "USD") {
    valorConvercao *= 5.35;
  } else if (moeda === "EUR") {
    valorConvercao *= 6.38;
  } else if (moeda === "ARS") {
    valorConvercao *= 0.056;
  } else {
    console.log("Moeda não cadastrada no sistema para conversão!");
    return;
  }

  console.log("Valor: R$ " + valorConvercao.toFixed(2));
}

async function main() {
  const moeda = await perguntar("Digite a moeda: (USD/EUR/ARS) ");
  const valorConvercao = await perguntar("Digite o valor para converter: ");

  await convertParaReal(moeda, valorConvercao);

  rl.close();
}

main();
