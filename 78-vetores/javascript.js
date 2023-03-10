/**78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final, 
mostre o vetor inteiro na tela e em seguida mostre em que posições foram 
digitados valores que são múltiplos de 10. */
let numArr = [];

for (let i = 1; i <= 15; i++) {
    let numeros = parseFloat(prompt(`Escreva o ${i}º número: `));
    numArr.push(numeros);
}

let valoresMultiplosDe10 = [];
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 10 == 0) {
        valoresMultiplosDe10.push(i);
    }
}

let contagem = numArr.join(', ');

document.write(`Valores digitados: ${contagem}<br>`);
document.write(`Posições múltiplas de 10: ${valoresMultiplosDe10.join(', ')}`);





/*let numArr = [];

for (let i = 1; i <= 4; i++) {
    let numeros = parseFloat(prompt(`Escreva o ${i}º número: `));
    numArr.push(numeros);
}

let valoresMultiplosDe10 = "";
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 10 == 0) {
        valoresMultiplosDe10 += `[${numArr[i]}], `
    } else {
        valoresMultiplosDe10 += `${numArr[i]}, `
    }
}
document.write(`Posições múltiplas de 10: ${valoresMultiplosDe10}`);*/
