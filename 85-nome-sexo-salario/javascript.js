/*85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e 
guarde esses dados em três vetores. No final, mostre uma listagem contendo 
apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.*/


let sexoArr = [];
let salarioArr = [];
let nomeArr = [];

for (let i = 1; i <= 5; i++) {
    let nome = prompt(`Digite o ${i}º nome: `);
    let sexo = prompt(`Digite o ${i}º sexo (M = Masculino ou F = Feminino): `).toUpperCase();
    let salario = parseInt(prompt(`Digite o ${i}º salario: `));


    if (nome === "" || salario === "" || isNaN(salario) || sexo !== "M" && sexo !== "F") {
        alert("Preencha os campos corretamente!")
        i--
    }
    nomeArr.push(nome);
    sexoArr.push(sexo);
    salarioArr.push(salario);
}

for(let i = 0;i<salarioArr.length;i++){
if(salarioArr[i]<5000 && sexoArr[i] === "F"){
document.write(`Nome-> ${nomeArr[i]} Sexo-> ${sexoArr[i]} Salário-> ${salarioArr[i]}`);
}
}