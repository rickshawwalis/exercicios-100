let idades = [];
let soma = 0;

for (let i = 1; i <= 10; i++) {
  let numeros = parseFloat(prompt(`Digite a ${i}º idade: `));
  idades.push(numeros);
}

let mais18 = 0;
let menos5 = 0;
let maiorIdade = idades[0];

for (let i = 0; i < idades.length; i++) {
  //calculo média
  soma += idades[i];
 
  if (idades[i] > 18) {
    mais18++;
  } else if (idades[i] < 5) {
    menos5++;
  }
  
  if (idades[i] > maiorIdade) {
    maiorIdade = idades[i];
  }
}

let media = soma / idades.length;

document.write("Qual é a média de idade do grupo: " + media + "<br>");
document.write("Quantas pessoas tem mais de 18 anos: " + mais18 + "<br>");
document.write("Quantas pessoas tem menos de 5 anos: " + menos5 + "<br>");
document.write("Qual foi a maior idade lida: " + maiorIdade + "<br>");
