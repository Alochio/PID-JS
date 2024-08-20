const promptSync = require("prompt-sync");
const input = promptSync();

function calculaArea() {
  const lado = input("Digite o valor do lado do quadrado em metros: ");
  areaQuadrado = lado * lado;

  console.log(`A área do quadrado é de ${areaQuadrado} metros`);
}

calculaArea();
