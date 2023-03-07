/*62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de 
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
na tela:
a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas tem 21 anos ou mais. */


let mediaIdade = 0;
let pessoas21 = 0;
let flag = true;
let qtd = 0;

do {
  let idadeTxT = parseFloat(prompt("Informe sua idade: "));

  qtd++; // Conta a quantidade de idades
  mediaIdade += idadeTxT;

  if (idadeTxT >= 21) { // Conta pessoas com 21 anos ou mais
    pessoas21++;
  }

  flag = confirm("Deseja continuar?");
} while (flag);

let media = mediaIdade / qtd;

document.write("<br> Quantas idades foram digitadas: " + qtd);
document.write("<br> Qual é a média entre as idades digitadas: " + media);
document.write("<br> Quantas pessoas têm 21 anos ou mais: " + pessoas21);
