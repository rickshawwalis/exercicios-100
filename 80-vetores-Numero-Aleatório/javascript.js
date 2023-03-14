/*80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 
15 sorteados pelo computador. Depois disso, peça para o usuário digitar um 
número (chave) e seu programa deve mostrar em que posições essa chave foi 
encontrada. Mostre também quantas vezes a chave foi sorteada. */

let vetoArr = [];

let numero = parseInt(prompt("Digite um número: "))

for (let i = 1; i <= 30; i++) {
    let radom = parseInt(Math.round(Math.random() * 14) + 1) //como acaba em 14.999 o + 1 ajuda a arrendodar para 15
    vetoArr.push(radom);
}
let soma = []
let vezes = 0;
for (let i = 0; i < vetoArr.length; i++) {
    if (vetoArr[i] === numero) {
        soma.push(i + 1)//mostra a posição o 1 é para contar um a mais q zero "gambiarra"
        vezes++ //soma todas as vezes que o número aparece e dar o resultado
    }
}
document.write("<br>Número digitado: " + numero)
document.write("<br>Vetor aleatório: " + vetoArr.join(", "))
document.write("<br>Posição: " + soma.join(", "))
document.write("<br>Vezes: " + vezes)