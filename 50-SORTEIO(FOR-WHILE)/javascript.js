const numerosSorteados = [];
let acimaDe5 = 0;
let divisiveisPor3 = 0;

for (let i = 0; i < 20; i++) {
  const numero = Math.floor(Math.random() * 11);
  numerosSorteados.push(numero);
  
  if (numero > 5) {
    acimaDe5++;
  } else if (numero % 3 === 0) {
    divisiveisPor3++;
  }
}

console.log("Números sorteados: ", numerosSorteados);
console.log("Quantidade de números acima de 5: ", acimaDe5);
console.log("Quantidade de números divisíveis por 3: ", divisiveisPor3);


/*
Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e 
mostre na tela:
a) Quais foram os números sorteados
b) Quantos números estão acima de 5
c) Quantos números são divisíveis por 3
*/