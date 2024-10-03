let vet = [0, -1, -5, 1, 2, 3, 4, 5, 6, 7, -10];

function retornaVetPositivos(vet) {
  let vetorAuxiliar = [];

  for (let i = 0; i < vet.length; i++) {
    if (vet[i] > 0) {
      vetorAuxiliar.push(vet[i]);
    }
  }

  console.log("Vetor de números positivos: " + vetorAuxiliar);
}

retornaVetPositivos(vet);
