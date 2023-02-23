//50

let sorteio = [];
let acim5 = 0
let div3 = 0

for(let i = 0;i<=20;i++){
let radom = Math.floor(Math.random() * 11);
sorteio.push(radom);

if(radom>5){
acim5 = radom
console.log(acim5)

} else if(radom%3===0){
div3 = radom
console.log(div3)
}


}

/*const numerosSorteados = [];
let acimaDe5 = 0;
let divisiveisPor3 = 0;

for (let i = 0; i < 20; i++) {
  const numero = Math.floor(Math.random() * 11);
  numerosSorteados.push(numero);
  
  if (numero > 5) {
    acimaDe5++;
  } else if (numero % 3 === 0) {
    divisiveisPor3++;
  }
}

console.log("Números sorteados: ", numerosSorteados);
console.log("Quantidade de números acima de 5: ", acimaDe5);
console.log("Quantidade de números divisíveis por 3: ", divisiveisPor3);*/
