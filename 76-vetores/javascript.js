/*76) Crie um programa que preencha automaticamente um vetor numérico com 7
números gerados aleatoriamente pelo computador e depois mostre os valores 
gerados na tela. */

let arr = [];

for(let i = 1;i<=7;i++){
let number1 = Math.round(Math.random() * 7);
arr.push(number1)
}
console.log(arr)