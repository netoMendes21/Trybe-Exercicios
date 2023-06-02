let imposto;
let inss;
let salarioBruto = 2500;


if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;

} else if (salarioBruto > 5189.82) {
    inss = 570.88;
}

let salarioBase = salarioBruto - inss;


if (salarioBase <= 1903.98) {
    imposto = 0;

} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    imposto = (salarioBase * 0.075) - 142.80;

} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    imposto = (salarioBase * 0.15) - 354.80;

} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    imposto = (salarioBase * 0.225) - 636.13;

} else if (salarioBase > 4664.68) {
    imposto = (salarioBase * 0.275) - 869.36;
}

console.log("O salaŕio é de R$" + '' + (salarioBase - imposto));