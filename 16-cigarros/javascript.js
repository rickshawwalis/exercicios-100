let cigarro1 = () => {

  let cigarro = Number(document.querySelector("#cigarro").value);
  let ano = Number(document.querySelector("#ano").value);
  let res = document.querySelector("#res");
  let minDia = 24 * 60 // 24h x 60 min
  let perdaVida = [(cigarro * ano * 365) * 10] / minDia
  if (cigarro == "" || ano == "") {
    alert("PREENCHA OS DADOS");
    return;
  } else {

res.innerHTML = ""
    res.innerHTML +=
      `<p>Você fumou ${cigarro} cigarros no período de ${ano} ano(s)</p>
        <p>Você perdeu: ${perdaVida} dias de vida</p>`
  }
};
let botao = document.querySelector("#button");
botao.addEventListener("click", cigarro1);