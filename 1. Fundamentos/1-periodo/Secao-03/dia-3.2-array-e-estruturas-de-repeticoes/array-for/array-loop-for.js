const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

// Requisito 2
for (index = 0; index < numbers.length; index += 1) {

    somaNumbers = (somaNumbers + numbers[index]);
}

// Requisito 3
const media = somaNumbers / numbers.length;
console.log(media);

// Requisito 4
if (media > 20) {
   console.log("O valor da média aritmética é maior que 20");
} else {
    console.log("O valor da média aritmética é menor que 20");
}

// Requisito 5
let maiorValor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
    if (maiorValor < numbers[index]) {
    maiorValor = numbers[index];
   } 
} console.log (maiorValor);


//requisito 6

let numerosImpares = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        numerosImpares = numbers[index];
        console.log(numerosImpares)
    } 
}    console.log("Nenhum valor ímpar encontrado");

