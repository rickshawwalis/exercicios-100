let valores = [];

for(let i = 1;i<=8;i++){
let numeros = parseFloat(prompt(`Digite o ${i}º número: `));
valores.push(numeros)
}

let menor = valores[0];
let maior = valores[0];

for (let i = 1; i<valores.length; i++){

  if (valores[i] < menor){
    menor = valores[i]

  } if (valores[i] > maior){
    maior = valores[i]
  }
}
document.write("<br>Valores: " + valores);
document.write("<br>Menor preço: " + menor);
document.write("<br>Maior preço: " + maior);
