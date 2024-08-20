const promptSync = require("prompt-sync");
const input = promptSync();

function calculaConversao() {
  const valorMetros = input("Digite um valor em metros para converter: ");

  const valorDecimetro = valorMetros * 10;
  const valorCentrimetro = valorMetros * 100;
  const valorMilimetro = valorMetros * 1000;

  console.log(`Resultado:
            Metros: ${valorMetros}
            Decimetro: ${valorDecimetro}
            Centimetro: ${valorCentrimetro}
            milimetro: ${valorMilimetro}
    `);
}

calculaConversao();