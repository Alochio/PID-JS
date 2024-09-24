function mediaPares(vetor) {
  let somatorio = 0;
  let contador = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
      somatorio += vetor[i];
      contador++;
    }
  }

  if (contador > 0)
    console.log(`A média dos valores pares é = ${somatorio / contador}`);
  else console.log("Não há valores pares no vetor");
}

const vetor = [10, 5, 1, 4, 3, 4, 10.5, 3, 9, 10];
mediaPares(vetor);