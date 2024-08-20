function gerarValorAleatorio(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SucessorAntecessor(valorAleatorio) {
  const antecessor = valorAleatorio - 1;
  const sucessor = valorAleatorio + 1;
  console.log(`Valor Gerado aleatoriamente: ${valorAleatorio}
                 Antecessor: ${antecessor}
                 Sucessor: ${sucessor}
                 `);
}

SucessorAntecessor(gerarValorAleatorio(0, 100));
