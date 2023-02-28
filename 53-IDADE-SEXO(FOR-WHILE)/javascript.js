/*
53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
a) Quantos homens foram cadastrados
b) Quantas mulheres foram cadastradas
c) A média de idade do grupo ok
d) A média de idade dos homens ok
e) Quantas mulheres tem mais de 20 anos ok
*/

let sexoArr = [];
let idadeArr = [];

for (let i = 1; i <= 5; i++) {
    let sexo = prompt(`Informe o ${i}º sexo, com: M ou F`);
    let idade = parseFloat(prompt(`Digite a ${i}º idade: `));
    sexoArr.push(sexo);
    idadeArr.push(idade);

    if (isNaN(idade) || idade == "" || sexo !== "M" && sexo !== "F") {
        alert("Preencha corretamente os campos");
       i--;
    }
}

let homemcad = 0;
let mulhercad = 0;
let somaIdade = 0;
let somaHomem = 0;
let mulher20 = 0;

for (let i = 0; i < idadeArr.length; i++) {
    somaIdade += idadeArr[i];

    if (sexoArr[i] === "M") {
        homemcad++;
        somaHomem += idadeArr[i];
    }

    if (sexoArr[i] === "F") {
        mulhercad++;

        if (idadeArr[i] > 20) {
            mulher20++;
        }
    }
}

let media = somaIdade / idadeArr.length;
let medHomem = somaHomem / homemcad;

document.write("A média de idade do grupo: " + media + "<br>");
document.write("A média de idade dos homens: " + medHomem + "<br>");
document.write("Quantas mulheres tem mais de 20 anos: " +  mulher20 + "<br>");
document.write("Quantas mulheres foram cadastradas: " +  mulhercad + "<br>");
document.write("Quantos homens foram cadastrados: " +  homemcad + "<br>");
