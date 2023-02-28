/*54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando 
no final:
a) Qual foi a média de altura do grupo
b) Quantas pessoas pesam mais de 90Kg
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg. */

let peso = [];
let altura = [];

for (let i = 1; i <= 7; i++) {
    let infPeso = parseFloat(prompt(`Informe o ${i}º peso: `));
    let infAltura = parseFloat(prompt(`Informe a ${i}º altura: `));
    peso.push(infPeso);
    altura.push(infAltura);

    if (isNaN(infPeso)|| isNaN(infAltura)) {
        alert("Dgite corretamente os dados solicitados!!!");
        i--;
    }
}

let peso90 = 0;
let peso50 = 0;
let altura160 = 0;

let peso100 = 0;
let altura190 = 0;

let mediaAltura = 0;

for (let i = 0; i < peso.length; i++) {

    mediaAltura += altura[i];

    if (peso[i] > 90) {
        peso90++
    }

    if (peso[i] < 50 && altura[i] < 1.60) {
        peso50++
        altura160++
    }

    if (peso[i] > 100 && altura[i] > 1.90) {
        altura190++
        peso100++
    }
}
let media = mediaAltura / altura.length;

document.write("<br>Qual foi a média de altura do grupo: " + media);
document.write("<br>Quantas pessoas pesam mais de 90Kg: " + peso90);
document.write("<br>Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m: " + peso50 +
    "pessoas tem menos de 50kg e" + altura160 + "tem menos de 1.60m");

document.write("<br>Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg: " + altura190 +
    "pessoas tem mais de 1.90m" + peso100 + "tem mais de 100kg");
