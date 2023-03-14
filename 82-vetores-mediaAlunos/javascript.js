/**82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em 
um vetor. No final, mostre: 
a) Qual é a média da turma
b) Quantos alunos estão acima da média da turma
c) Qual foi a maior nota digitada
d) Em que posições a maior nota aparece */


let notas = [];

for (let i = 1; i <= 4; i++) {
    let infoNotas = parseFloat(prompt(`Informe a ${i}ª nota: `));

    if (isNaN(infoNotas) || infoNotas === "") {
        alert("Preencha corretamente o dado!");
        i--;
    }
    
    notas.push(infoNotas);
}

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) { //calculo média
    somaNotas += notas[i];
}
let mediaTurma = somaNotas / notas.length; //calculo média

let acimadaMedia = 0;
let maiorNota = Math.max(...notas);//Qual foi a maior nota digitada
let posicaoMaiorNota = [];


for (let i = 0; i < notas.length; i++) {
    if (notas[i] > mediaTurma) { //calculo alunos acima da média
        acimadaMedia++;
    }
    if (notas[i] === maiorNota) {//Qual foi a maior nota digitada
        posicaoMaiorNota.push(i);//Em que posições a maior nota aparece
    }
}



document.write("<br>Qual é a média da turma: " + mediaTurma.toFixed(2));
document.write("<br>Quantos alunos estão acima da média da turma: " + acimadaMedia);
document.write("<br>Qual foi a maior nota digitada: " + maiorNota);
document.write("<br>Em que posições a maior nota aparece: " + posicaoMaiorNota);
