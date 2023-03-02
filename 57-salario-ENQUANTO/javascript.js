let continuar = true;
let totaisSalarios = [0, 0];

while (continuar) {
    let salarioText = parseFloat(prompt("Informe o salário do funcionário:"));
    let sexoText = prompt("Informe o sexo do funcionário (M para masculino ou F para feminino):");

    if (isNaN(salarioText) || salarioText == "" || sexoText !== "M" && sexoText !== "F") {
        alert("Preencha corretamente os campos");
        continue;
    }

    if (sexoText === "M") {
        totaisSalarios[0] += salarioText;
        
    } else if (sexoText === "F") {
        totaisSalarios[1] += salarioText;
    }

    continuar = confirm("Deseja continuar?");
}

document.write(`<br>Total de salários pagos aos homens: R$ ${totaisSalarios[0].toFixed(2)}`);
document.write(`<br>Total de salários pagos às mulheres: R$ ${totaisSalarios[1].toFixed(2)}`);

