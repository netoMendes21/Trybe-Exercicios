const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;


for (index = 0; index < numbers.length; index += 1) {

    somaNumbers = (somaNumbers + numbers[index]);
}

const media = somaNumbers / numbers.length;
console.log(media);

if (media > 20) {
    console.log("O valor da média aritmética é maior que 20");
} else {
    console.log("O valor da média aritmética é menor que 20");
}