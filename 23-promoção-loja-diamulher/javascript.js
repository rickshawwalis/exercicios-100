let exercicito = () => {

  let res = document.querySelector("#res");
  let anoNascimento = Number(document.querySelector("#anoNascimento").value);
  let anoAtual = new Date();
  let idade = anoAtual.getFullYear() - anoNascimento;

  if (anoNascimento == "") {
    alert("Preencha o campo acima!");
  }

  if (idade < 18) {
    res.innerHTML = `Você possui ${idade} anos, não é necessário se apresentar ao Exercito. Aguarde ${18 - idade} anos para se apresentar!`;
  } else {
    res.innerHTML = `Você possui ${idade} anos, já deveria ter se apresentado ao Exercito. Você está ${idade - 18} anos atrasado em sua apresentação!`;
  }

}

let botao = document.querySelector("#button");
botao.addEventListener("click", exercicito);