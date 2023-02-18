document.write("<br><br>MODELO 1, FOR COM VAR")
let a = 18
for (let i = 0;i<=a;i += 3){
  document.write("<br>Número: "+i);
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.write("<br><br>MODELO 2, FOR SEM VAR")
for(let a = 0;a<=18;a += 3){
  document.write("<br>Número: "+a);
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.write("<br><br>MODELO 3, FOR OF")
let c = [0,3,6,9,15,18];
for(n of c){
  document.write("<br>Número: "+n)
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.write("<br><br>MODELO 4, WHILE")
let d = 0
while(d <= 18){
  document.write("<br>Número: "+d);
  d += 3
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.write("<br><br>MODELO 5, DO WHILE")
let j = 0;
do {
  document.write("<br>Número: "+j);
  j += 3;
} while (j <= 18);