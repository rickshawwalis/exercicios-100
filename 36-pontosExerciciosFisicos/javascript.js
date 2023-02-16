let ponto = () => {

  let horaAtividade = Number(document.querySelector("#pontosExercicio").value);
  let res = document.querySelector("#res");

  if (horaAtividade == "") {
    alert("Preencha o campo abaixo!");
    return;
  }

  if (horaAtividade > 20) {
    res.innerHTML =
      `<p>Você possui ${horaAtividade} horas, para cada hora irá receber 10 pontos, isso corresponde a: ${horaAtividade * 10} pontos</p>
<p>Cada ponto vale R$ 0.05, nesse caso você receberá: R$ ${(horaAtividade * 10) * 0.05}</p>
`
  } else if (horaAtividade >= 10 && horaAtividade <= 20) {
    res.innerHTML =
      `<p>Você possui ${horaAtividade} horas, para cada hora irá receber 5 pontos, isso corresponde a: ${horaAtividade * 5} pontos</p>
  <p>Cada ponto vale R$ 0.05, nesse caso você receberá: R$ ${(horaAtividade * 5) * 0.05}</p>
  `
  } else if (horaAtividade < 10) {
    res.innerHTML =
      `<p>Você possui ${horaAtividade} horas, para cada hora irá receber 2 pontos, isso corresponde a: ${horaAtividade * 2} pontos</p>
  <p>Cada ponto vale R$ 0.05, nesse caso você receberá: R$ ${(horaAtividade * 2) * 0.05}</p>
  `
  }
}
let botao = document.querySelector("#button");
botao.addEventListener("click", ponto);