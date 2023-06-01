let num1 = 90;
let num2 = 45;
let num3 = 45;

const triangulo = 180;
const somaDeAngulo = num1 + num2 + num3;

let checkNum1 = num1 > 0;
let checkNum2 = num2 > 0;
let checkNum3 = num3 > 0;

if (checkNum1 && checkNum2 && checkNum3) {
    if (somaDeAngulo === triangulo) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Ângulo Inválido");
}
