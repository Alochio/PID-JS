function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const vetor = [];
let tentativasFalhas = 0;

while (vetor.length < 50) {
  const numeroAleatorio = gerarNumeroAleatorio(1, 100);

  if (!vetor.includes(numeroAleatorio)) {
    vetor.push(numeroAleatorio);
  } else {
    tentativasFalhas++;
  }
}

console.log(`Tentativas falhas de inserção: ${tentativasFalhas}`);

const vetorImpares = vetor.filter((numero) => numero % 2 !== 0);
const somatorioImpares = vetorImpares.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);

console.log(`Números ímpares no vetor original: ${vetorImpares}`);
console.log(`Somatório dos números ímpares: ${somatorioImpares}`);