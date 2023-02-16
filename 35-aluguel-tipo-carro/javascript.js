let aluguel = () => {
  let diasAlugado = Number(document.querySelector("#diasalugado").value);
  let kmRodado = Number(document.querySelector("#kmpercorrido").value);
  let res = document.querySelector("#res");

  let valorDiasPopular = diasAlugado * 90
  let valorDiasLuxo = diasAlugado * 150


  let tipoCarro = document.getElementsByName("carroaluguel");
  let tipo = "";

  if (diasAlugado == "" || kmRodado == "") {
    alert("Preencha os campos!");
    return;
  }
  
  if (tipoCarro[0].checked) {
    tipo = "CARRO POPULAR";
    if (kmRodado <= 100) {
      res.innerHTML =
        ` <p>Foi escolhido: ${tipo} </p>
        <p>O carro ficou: ${diasAlugado} dia(s) alugado, ao valor de R$ 90,00, totalizando ${valorDiasPopular}</p>
           <p> Foram rodados ${kmRodado} km, ao valor de R$ 0.20 por km, totalizando R$ ${(kmRodado * 0.20).toFixed(2)}</p>
           <p>Valor Total (dias e km): ${(valorDiasPopular + (kmRodado * 0.20)).toFixed(2)}</p>`
    } else if (kmRodado > 100) {
      res.innerHTML =
        ` <p>Foi escolhido: ${tipo} </p>
        <p>O carro ficou: ${diasAlugado} dia(s) alugado, ao valor de R$ 90,00, totalizando ${valorDiasPopular}</p>
           <p> Foram rodados ${kmRodado} km, ao valor de R$ 0.10 por km, totalizando R$ ${(kmRodado * 0.10).toFixed(2)}</p>
           <p>Valor Total (dias e km): R$  ${(valorDiasPopular + (kmRodado * 0.10)).toFixed(2)}</p>
           `
    }
  } else if (tipoCarro[1].checked) {
    tipo = "CARRO DE LUXO";

   if (kmRodado <= 200) {
    res.innerHTML =
      ` <p>Foi escolhido: ${tipo} </p>
    <p>O carro ficou: ${diasAlugado} dia(s) alugado, ao valor de R$ 150,00, totalizando ${valorDiasLuxo}</p>
       <p> Foram rodados ${kmRodado} km, ao valor de R$ 0.30 por km, totalizando R$ ${(kmRodado * 0.30).toFixed(2)}</p>
       <p>Valor Total (dias e km): ${(valorDiasLuxo + (kmRodado * 0.30)).toFixed(2)}</p>`
  } else if (kmRodado > 200) {
    res.innerHTML =
      ` <p>Foi escolhido: ${tipo} </p>
    <p>O carro ficou: ${diasAlugado} dia(s) alugado, ao valor de R$ 150,00, totalizando ${valorDiasLuxo}</p>
       <p> Foram rodados ${kmRodado} km, ao valor de R$ 0.25 por km, totalizando R$ ${(kmRodado * 0.25).toFixed(2)}</p>
       <p>Valor Total (dias e km): R$ ${(valorDiasLuxo + (kmRodado * 0.25)).toFixed(2)}</p>
       `
  }
}
};
let botao = document.querySelector("#button");
botao.addEventListener("click", aluguel);
