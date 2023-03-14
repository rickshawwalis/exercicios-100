/*81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No 
final, mostre:
a) Qual é a média de idade das pessoas cadastradas
b) Em quais posições temos pessoas com mais de 25 anos
c) Qual foi a maior idade digitada (podem haver repetições)
d) Em que posições digitamos a maior idade */

let idadeArr = [];

for (let i = 1; i <= 4; i++) {
    let idade = parseInt(prompt(`Digite a ${i}º idade: `));
    if (idade == "" || isNaN(idade)) {
        alert("Preencha corretamente o dado!")
        i--
    }
    idadeArr.push(idade)
}

let media = 0;
let posicao25 = [];
let maiorIdade = 0;
let posicaoMaiorIdade = [];

for (let i = 0; i < idadeArr.length; i++) {
    
    media += idadeArr[i] //Média

    if (idadeArr[i] > 25) { //Em quais posições temos pessoas com mais de 25 anos:
        posicao25.push(i)

    } if (idadeArr[i] > maiorIdade) { //Qual foi a maior idade digitada (podem haver repetições):
        maiorIdade = idadeArr[i]
    }
}

for (let i = 0; i < idadeArr.length; i++) { //Em que posições digitamos a maior idade
    if (idadeArr[i] === maiorIdade) {
        posicaoMaiorIdade.push(i)
    }
}

let mediaF = media / idadeArr.length //Média

document.write("<br>Valores digitados: " + idadeArr.join(", "));
document.write("<br>Média: " + mediaF);
document.write("<br>Em quais posições temos pessoas com mais de 25 anos: " + posicao25.join(", "));
document.write("<br>Qual foi a maior idade digitada (podem haver repetições): " + maiorIdade);
document.write("<br>Em que posições digitamos a maior idade: " + posicaoMaiorIdade.join(", "));

/*OUTRA FORMA COM ELSE IF NO FINAL, AO INVÉS DE OUTRO FOR
let idadeArr = [];

for (let i = 1; i <= 4; i++) {
    let idade = parseInt(prompt(`Digite a ${i}º idade: `));
    if (idade == "" || isNaN(idade)) {
        alert("Preencha corretamente o dado!")
        i--;
    } else {
        idadeArr.push(idade);
    }
}

let media = 0;
let posicao25 = [];
let maiorIdade = 0;
let posicaoMaiorIdade = [];

for (let i = 0; i < idadeArr.length; i++) {
    media += idadeArr[i];
    if (idadeArr[i] > 25) {
        posicao25.push(i);
    }
    if (idadeArr[i] > maiorIdade) {
        maiorIdade = idadeArr[i];
        posicaoMaiorIdade = [i];
    } else if (idadeArr[i] === maiorIdade) {
        posicaoMaiorIdade.push(i);
    }
}

let mediaF = media / idadeArr.length;

document.write("<br>Valores digitados: " + idadeArr.join(", "));
document.write("<br>Média: " + mediaF);
document.write("<br>Em quais posições temos pessoas com mais de 25 anos: " + posicao25.join(", "));
document.write("<br>Qual foi a maior idade digitada (podem haver repetições): " + maiorIdade);
document.write("<br>Em que posições digitamos a maior idade: " + posicaoMaiorIdade.join(", "));


*/