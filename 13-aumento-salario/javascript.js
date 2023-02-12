let promocao = () => {
  let salario = Number(document.querySelector("#preco").value);
  let res = document.querySelector("#res");

  if (salario == "") {
    alert("Preencha o campo!");
    return;
  } else {
    res.innerHTML = " "
    res.innerHTML =
      `<p>Valor do salário informado: ${salario}</p>
  <p>Valor do aumento (15%): R$ ${(salario* 15) / 100}</p>
  <P>Valor final do salário: R$ ${salario + ((salario * 15) / 100)}</p>
  `
  res.style.textAlign = 'justify';
  }

}

let botao = document.querySelector("#button");
botao.addEventListener("click", promocao);
