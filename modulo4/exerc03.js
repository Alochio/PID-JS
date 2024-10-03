function retornaMaior(valor1, valor2) {
  if (valor1 > valor2) {
    imprime(valor1);
  } else if (valor2 > valor1) {
    imprime(valor2);
  } else if (valor1 === valor2) {
    console.log(`${valor1} e ${valor2} são iguais`);
  }
}

function imprime(ehMaior) {
  console.log(`O maior valor é: ${ehMaior}`);
}

retornaMaior(0,10);
