let desconto = () => {
  let nome = document.querySelector("#nome").value;
  let compra = Number(document.querySelector("#compra").value);
  let res = document.querySelector("#res");

  if (nome == "" || compra == "") {
    alert("Preencha os campos com valores válidos!");
    return;
  } else {

    let fsex = document.getElementsByName("radsex");
    let descontoH = compra * 5 / 100;
    let descontoM = compra * 15 / 100;
    let genero = "";

    if (fsex[0].checked) {
      genero = "masculino";
      res.innerHTML = `${nome}, do gênero ${genero}, sua compra de R$ ${compra} receberá 5% de desconto, assim ficará no valor de R$ ${compra - descontoH}.`;
      res.style.textAlign = 'justify';

    } else if (fsex[1].checked) {
      genero = "feminino";
      res.innerHTML = `${nome}, do gênero ${genero}, sua compra de R$ ${compra} receberá 15% de desconto, assim ficará no valor de R$ ${compra - descontoM}.`;
      res.style.textAlign = 'justify';
    }
  }
};

let botao = document.querySelector("#button");
botao.addEventListener("click", desconto);
