let somaIdades = 0;
let flag = true;

while (flag) {
    let idade = Number(prompt("Digite a idade: "));

    if (isNaN(idade) || idade <= 0) {
        alert("Digite uma idade válida!");
    }

    if (idade < 999) {
        somaIdades += idade;
    }
    else if (idade === 999) {
        flag = false;
    }
   //flag = confirm("Deseja continuar (OK -> SIM ou CANCELAR -> NÃO)?");
}

let mediaIdades = somaIdades / idades.length;

document.write("Média de idade: " + mediaIdades.toFixed(2) + "<br>");
document.write("Número de alunos: " + idades.length);
