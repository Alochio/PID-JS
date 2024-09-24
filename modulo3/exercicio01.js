function maiorMenorValor(vetor) {
  let maiorNumero = vetor[0];
  let menorNumero = vetor[0];

  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maiorNumero) {
      maiorNumero = vetor[i];
    } else if (vetor[i] < menorNumero) {
        menorNumero = vetor[i];
    }
  }
  console.log(`Maior valor = ${maiorNumero}`);
  console.log(`Menor valor = ${menorNumero}`);
}

const vetor = [10, 5, 1, 4, 3, 4, 10.5, 2, 9, 10];
maiorMenorValor(vetor);