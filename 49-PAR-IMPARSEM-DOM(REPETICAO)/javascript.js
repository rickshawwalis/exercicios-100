let soma = 0;

for (let i = 1; i <= 6; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  
  if (numero % 2 == 0) {
    document.write(`<br>Número par: ${numero}`)
    soma += numero;
    document.write(`<br>Soma números par: ${soma}`)
  } else if (numero % 2 == 1) {
    document.write(`<br>Número impar: ${numero}`)
    soma += numero;
    document.write(`<br>Soma números impar: ${soma}`)
  }
}


