document.write("teste 1, for sem variavel")
for (let a = 6; a <= 11; a++) {
  document.write("<br>numero: " + a)
}

document.write("<br><br>teste 2, for com variavel")
let a = 11;
for (let i = 6; i <= a; i++) {
  document.write("<br>numero: " + i)
}

document.write("<br><br>teste 3, for of")
let num = [6, 7, 8, 9, 10, 11];
for (n of num) {
  document.write("<br>numero: " + n)
}

document.write("<br><br>teste 4, do while")
let c = 6
do {
  document.write("<br>Número: " + c);
  c++;
} while (c <= 11);

document.write("<br><br>teste 5, do while")
let c1 = 6;
while (c1 <= 11) {
  document.write("<br>Número: " + c1);
c1++
}
