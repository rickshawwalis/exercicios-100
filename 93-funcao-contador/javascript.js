/*93) Faça um programa que tenha um procedimento chamado Contador() que recebe 
três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
programa principal deve solicitar a digitação desses valores e passá-los ao 
procedimento, que vai mostrar a contagem na tela. */

let contador = () => {
  let inicio = 1;
  let incremento = 3;
  let fim = 10;
  let soma = "";

  for (let i = inicio; i <= fim; i += incremento) {
    soma += i + ">> "

  }
  console.log(
    `
  inicio: ${inicio}
  incremento: ${incremento}
  fim: ${fim}
  Resultado: ${soma} FIM
  `)
}

contador()
