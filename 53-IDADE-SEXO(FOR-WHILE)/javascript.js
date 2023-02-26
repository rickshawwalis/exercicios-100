let numHomens = 0;
let numMulheres = 0;
let somaIdades = 0;
let somaIdadesHomens = 0;
let numMulheresMaisDe20 = 0;

for (let i = 1; i <= 5; i++) {
  let idade = Number(prompt("Informe a idade da pessoa " + i));
  let sexo = prompt("Informe o sexo da pessoa " + i + " (M ou F)").toUpperCase();
  if (idade == "" || sexo !== "M" && sexo !== "F") {
    alert("Preencha os campos corretamente!")
  }
  somaIdades += idade;

  if (sexo === "M") {
    numHomens++;
    somaIdadesHomens += idade;
  } else if (sexo === "F") {
    numMulheres++;
    if (idade > 20) {
      numMulheresMaisDe20++;
    }
  }
}

let mediaIdades = somaIdades / 5;
let mediaIdadesHomens = somaIdadesHomens / numHomens;

document.write("Quantidade de homens cadastrados: " + numHomens);
document.write("Quantidade de mulheres cadastradas: " + numMulheres);
document.write("Média de idade do grupo: " + mediaIdades);
document.write("Média de idade dos homens: " + mediaIdadesHomens);
document.write("Quantidade de mulheres com mais de 20 anos: " + numMulheresMaisDe20);
