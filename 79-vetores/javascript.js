/*79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. 
No final, mostre quais são os números pares que foram digitados e em que 
posições eles estão armazenados. */


let numArr = [];

for(let i = 1; i <= 4; i++){
    let numero = parseInt(prompt(`Digite o ${i}º número: `));
    numArr.push(numero);
}

let par = []
let contagemPar = "";

for(let i = 0; i < numArr.length; i++){
    if(numArr[i] % 2 == 0){
        par.push(i);
        contagemPar += numArr[i] + ", ";
    }
}

document.write("Números pares digitados: " + contagemPar + "<br>");
document.write("Posição: " + par.join(", ") + "<br>");
