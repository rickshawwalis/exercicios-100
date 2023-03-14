/*91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses 
valores para um procedimento Maior() que vai verificar qual deles é o maior e 
mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem 
informando essa característica. 

97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma 
adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o 
maior entre eles.*/


let calculo = () => {
  let a = 12;
  let b = 12;
  let c = 13;

  if (a == b || a == c || b == c) {
    console.log(`[a] -> ${a} igual a [b] -> ${b} e igual [c] -> ${c}`);
  
  } else if (a > b || a > c) {
    console.log(`[a] -> ${a} maior que [b] -> ${b} e maior que [c] -> ${c}`);
  
  } else if (a < b  || b < a || a < c || c < b || b < c) {
    console.log(`${a} menor que ${b}`);
  }

}

calculo()