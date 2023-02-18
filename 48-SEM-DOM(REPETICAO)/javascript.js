
let soma = 0;
for (let i = 500; i >= 0; i -= 50) {
  document.write(`${i} `)
  soma += i;
}
document.write(`<br><br>Soma: ${soma}`);
