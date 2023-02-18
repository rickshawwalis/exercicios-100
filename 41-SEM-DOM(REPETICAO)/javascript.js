
document.write("MOD 1, FOR VAR")
let a = 0;
for (let i = 100; i > a; i -= 5) {
  document.write("<br>Número :" + i);
};

document.write("<br><br>MOD 2, FOR")
for (let i = 100; i >= 0; i -= 5) {
  document.write("<br>Número :" + i);
}

document.write("<br><br>MOD 3, DO WHILE")
let b = 100
do {
  document.write("<br>Número :" + b);
  b -= 5
} while (b > 0)

document.write("<br><br>MOD 4, WHILE")
let c = 100
while (c > 0) {
  document.write("<br>Número :" + c);
  c -= 5;
}