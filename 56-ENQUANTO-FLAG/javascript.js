
let numero = 0;
let soma = 0;
let continuar = true;

while(continuar) {
  numero = parseInt(prompt("Digite um número:"));

  if(numero === 1111) {
    continuar = false;
  } else {
    soma += numero;
  }
}

console.log("A soma dos números é: " + soma);
