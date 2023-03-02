let continuar = true;
let idade = [];

let maiorIdade = 0;
let menorIdadeMulher = 0;
let soma = 0;
let numHomens = 0;

while (continuar) {

    let idadeTXT = parseFloat(prompt("Informe a sua idade: "));
    let sexoTXT = prompt("Informe seu sexo (M -> Masculino ou F -> Feminino): ");

    if (idadeTXT == "" || isNaN(idadeTXT) || sexoTXT !== "M" && sexoTXT !== "F") {
        alert("Preencha corretamente os campos!")
    }

        idade.push(idadeTXT);
        
        if (idadeTXT > maiorIdade) {
            maiorIdade = idadeTXT;
        }

        if (sexoTXT === "M") {
            numHomens++;
            soma += idadeTXT;

        } else if (sexoTXT === "F") {
            
            if (idadeTXT < menorIdadeMulher) {
                menorIdadeMulher = idadeTXT;
            }
        }

    continuar = confirm("Deseja continuar? OK -> SIM / CANCELAR -> NÃO");
}

let media = soma / numHomens;

document.write("Qual é a maior idade lida: " + maiorIdade + "<br>");
document.write("Quantos homens foram cadastrados: " + numHomens + "<br>");
document.write("Qual é a idade da mulher mais jovem: " + menorIdadeMulher + "<br>");
document.write("Qual é a média de idade entre os homens: " + media.toFixed(2) + "<br>");
