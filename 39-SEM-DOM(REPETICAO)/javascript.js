
document.write("teste 1, for sem var")
for(let a = 10;a>=3;a--){
  document.write("<br>Numero: "+a)
}

document.write("<br><br>teste 2, com var")
let a = 3;
for(let i = 10;i>=a;i--){
  document.write("<br>Número: "+i)
}

document.write("<br><br>teste 3, com for of")
let num = [10,9,8,7,6,5,4,3];
for(n of num){
  document.write("<br>Número: "+n)
}

document.write("<br><br>teste 4, com Do While")
let c = 10
do{
  document.write("<br>Número: "+c);
  c--;
}while(c>=3)

document.write("<br><br>teste 5, com While");
let a1 = 10;
while (a1 >= 3) {
  document.write("<br>Número: " + a1);
  a1--;
}
