/*60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas. 
O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
a) O nome da pessoa mais velha
b) O nome da mulher mais jovem
c) A média de idade do grupo
d) Quantos homens tem mais de 30 anos
e) Quantas mulheres tem menos de 18 anos
*/

let nomes = [];
let idades = [];
let sexos = [];
let continuar = true;

while (continuar) {
    let nome = prompt("Qual é o seu nome?");
    let idade = parseInt(prompt("Qual é a sua idade?"));
    let sexo = prompt("Qual é o seu sexo? (M ou F)").toUpperCase();

    if (nome == "" || idade == "" || isNaN(idade) || sexo !== "M" && sexo !== "F") {
        alert("Preencha corretamente o campo!")
    }

    idades.push(idade);
    nomes.push(nome);
    sexos.push(sexo);

    continuar = prompt("Deseja continuar? (S ou N)").toUpperCase() === "S";
}

let indexPessoaMaisVelha = 0;
let indexMulherMaisJovem = Infinity;
let somaIdades = 0;
let numHomensMaisDe30 = 0;
let numMulheresMenosDe18 = 0;

for (let i = 0; i < nomes.length; i++) {

    somaIdades += idades[i];

    if (idades[i] > idades[indexPessoaMaisVelha]) {
        indexPessoaMaisVelha = i;
    }

    if (sexos[i] === "F") {
        if (idades[i] < idades[indexMulherMaisJovem]) {
            indexMulherMaisJovem = i;
        }
    }

    if (sexos[i] === "M" && idades[i] > 30) {
        numHomensMaisDe30++;
    }

    if (sexos[i] === "F" && idades[i] < 18) {
        numMulheresMenosDe18++;
    }
}

let mediaIdades = somaIdades / nomes.length;

document.write(`A pessoa mais velha é ${nomes[indexPessoaMaisVelha]}`);
document.write(`A mulher mais jovem é ${nomes[indexMulherMaisJovem]}`);
document.write(`A média de idade do grupo é ${mediaIdades}`);
document.write(`Existem ${numHomensMaisDe30} homens com mais de 30 anos`);
document.write(`Existem ${numMulheresMenosDe18} mulheres com menos de 18 anos`);
