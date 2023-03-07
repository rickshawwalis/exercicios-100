/*68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura 
“para”. No final, mostre na tela:
a) Quantas mulheres foram cadastradas
b) Quantos homens pesam mais de 100Kg
c) A média de peso entre as mulheres 
d) O maior peso entre os homens
 */
let sexoArr = [];
let pesoArr = [];

for (let i = 1; i < 2; i++) {
  let sexo = prompt(`Informe o ${i}º sexo (M-> Masculino ou F-> Feminino): `).toUpperCase();
  let peso = parseFloat(prompt(`Informe o ${i}º peso: `));

  if (sexo !== "M" && sexo !== "F" || peso == "" || isNaN(peso)) {
    alert("Preencha os campos corretamente");
    i--
  }
  sexoArr.push(sexo);
  pesoArr.push(peso);
}
let nMulher = 0; //a
let homem100 = 0; //b
let mediaPesoMu = 0; //c
let maiorPesoHomem = 0; //d


for (let i = 0; i <= sexoArr.length; i++) {



  if (sexoArr[i] === "F") {
    mediaPesoMu += pesoArr[i];
    nMulher++;
  }

  if (sexoArr[i] === "M") {
    if (maiorPesoHomem < pesoArr[i]) {
      maiorPesoHomem = pesoArr[i]
    }
    if (pesoArr[i] > 100) {
      homem100++
    }
  }


}
let media = mediaPesoMu / nMulher;

document.write(`<br>Número de mulheres: ${nMulher}`);
document.write(`<br>Média peso mulheres: ${media}`);
document.write(`<br>Maior peso homens: ${maiorPesoHomem}`);
document.write(`<br>Homens com 100kg: ${homem100}`);