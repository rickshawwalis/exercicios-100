/*69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma 
PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e 
a soma entre todos os valores da sequência.
 */

let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
let razao = parseInt(prompt("Digite a razão da PA: "));
let soma = 0;

document.write("<br>Os 10 primeiros elementos da PA são: ");

for(let i = 1; i <= 10; i++){
    let elemento = primeiroTermo + (i - 1) * razao;
    soma += elemento;
    document.write(elemento);
}

document.write("<br>A soma dos valores da sequência é: " + soma);