/*84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses 
valores em dois vetores, em posições relacionadas. No final, mostre uma listagem 
contendo apenas os dados das pessoas menores de idade. */

let nomeArr = [];
let idadeArr = [];

for (let i = 1; i <= 4; i++) {
    let nome = prompt(`Informe o ${i}º nome: `);
    let idade = parseInt(prompt(`Informe a ${i}º idade: `));

    if (idade === "" || isNaN(idade) || nome === "") {
        alert("Preencha corretamente os dados")
        i--
    }

    nomeArr.push(nome);
    idadeArr.push(idade);
}

let menor18 = 0;

for(let i = 0;i<idadeArr.length;i++){
if(idadeArr[i]<18){
 document.write(`<p>Nome: ${nomeArr[i]} e Idade: ${idadeArr[i]} `)
}

}