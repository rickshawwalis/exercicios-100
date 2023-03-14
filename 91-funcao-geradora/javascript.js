/*91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses 
valores para um procedimento Maior() que vai verificar qual deles é o maior e 
mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem 
informando essa característica. */


let calculo = () => {
  let a = 11;
  let b = 13;

  if (a === b) {
    console.log(`${a} igual a ${b}`);
  
  } else if (a > b) {
    console.log(`${a} maior que ${b}`);
  
  } else if (a < b) {
    console.log(`${a} menor que ${b}`);
  }

}

calculo()