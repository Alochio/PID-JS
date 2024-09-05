const promptSync = require("prompt-sync");
const input = promptSync();

function electoralClass() {
  const age = input("Digite sua idade para saber sua classe eleitoral: ");

  if (age < 16) console.log("Não eleitor!");
  else if (age >= 18 && age <= 65) console.log("Eleitor obrigatório!");
  else if ((age >= 16 && age < 18) || age > 65)
    console.log("Eleitor facultativo");
}

electoralClass();
