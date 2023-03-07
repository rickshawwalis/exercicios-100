/*63) Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na 
tela:
a) O somatório entre todos os valores
b) Qual foi o menor valor digitado
c) A média entre todos os valores
d) Quantos valores são pares */

let flag = true;
let soma = 0
let menorValor = Infinity;
let mediaV = 0
let par = 0

do{
let numeros = parseFloat(prompt("Digite o numero: "))

if(numeros == "" || Number.isNaN(numeros)){
  alert("Preencha corretamente!");
}

soma += numeros;
mediaV += numeros;

if (numeros < menorValor) {
  menorValor = numeros;
}

if(numeros%2==0){
par++
}


flag = prompt("Deseja Continuar: S/N").toUpperCase() === "S"
} while(flag);

let media = mediaV / soma

document.write("<br> O somatório entre todos os valores: " + soma);
document.write("<br> Qual foi o menor valor digitado: " + menorValor);
document.write("<br> A média entre todos os valores: " + media);
document.write("<br> Quantos valores são pares: " + par);
