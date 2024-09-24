const temperaturas = [22, 25, 19, 30, 28, 26, 24];
let somatorio = 0;

for (let i = 0; i < temperaturas.length; i++) {
    somatorio += temperaturas[i];
}

const media = somatorio / temperaturas.length;
console.log(`A média das temperaturas é = ${media.toFixed(2)} °C`);

let temperaturasAcimaMedia = [];

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > media) {
        temperaturasAcimaMedia.push(temperaturas[i]);
    }
}

console.log(`Número de dias com temperatura acima da média: ${temperaturasAcimaMedia.length}`);
console.log(`Temperaturas acima da média: ${temperaturasAcimaMedia}`);
