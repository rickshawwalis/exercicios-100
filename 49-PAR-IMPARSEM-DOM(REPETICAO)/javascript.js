let somaPar = 0;
let somaImpar = 0;

for (let i = 1; i <= 6; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  
  if (numero % 2 === 0) {
    document.write(`<br>Número par: ${numero}`);
    somaPar += numero;

  } else {
    document.write(`<br>Número ímpar: ${numero}`);
    somaImpar += numero;
  }
}

document.write(`<br><br>Soma números par: ${somaPar}`);
document.write(`<br>Soma números ímpares: ${somaImpar}`);

/* USANDO WHILE
let somaPar = 0;
let somaImpar = 0;
let i = 1;

while (i <= 6) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  
  if (numero % 2 === 0) {
    document.write(`<br>Número par: ${numero}`);
    somaPar += numero;

  } else {
    document.write(`<br>Número ímpar: ${numero}`);
    somaImpar += numero;
  }
  
  i++;
}

document.write(`<br><br>Soma números par: ${somaPar}`);
document.write(`<br>Soma números ímpares: ${somaImpar}`);
*/