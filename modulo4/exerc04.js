function filtrarNomesPorLetra(nomes, letra) {
  let nomesFiltrados = [];

  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].toLowerCase().includes(letra.toLowerCase())) {
      nomesFiltrados.push(nomes[i]);
    }
  }

  return nomesFiltrados;
}

let vetorNomes = ["Ana", "Carlos", "Bianca", "Felipe", "Mariana", "Vinicius", "Daniel", "Bosco", "Gilete"];
let letraBusca = "a";

let resultado = filtrarNomesPorLetra(vetorNomes, letraBusca);
console.log("Nomes que contêm a letra '" + letraBusca + "':", resultado);
