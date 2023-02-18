let soma = 0;
for (let i = 6; i <= 100; i += 2) {
 document.write(`${i} `)
  soma += i;
}
document.write(`<br><br>Soma: ${soma}`);

/*
let soma = 0;
let i = 6;
while (i <= 100) {
  soma += i;
  console.log(i);
  i += 2;
}
console.log("A soma dos números pares de 6 a 100 é: " + soma);

*/