let soma = 0;

for (let i = 1; i <= 7; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  soma += numero;
}

document.write(`<br><br>A soma dos 7 números é: ${soma}`);

/*
let soma = 0;
let i = 1;

while (i <= 7) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  soma += numero;
  i++;
}

console.log(`A soma dos 7 números é: ${soma}`);
*/