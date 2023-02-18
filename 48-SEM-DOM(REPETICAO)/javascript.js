let soma = 0;

for (let i = 1; i <= 6; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  soma = numero;
}

document.write(`<br><br>Número pares: ${soma}`);
