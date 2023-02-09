function teste() {
  let button = document.querySelector("#button");
  let nome = document.querySelector("#nome").value;
  let salario = document.querySelector("#salario").value;
  let res = document.querySelector("#res");

  res.innerHTML = " "
  res.innerHTML += `<p>Nome do(a) Funcionário(a): ${nome.toUpperCase()}</p>`;
  res.innerHTML += `<p>Salário: ${salario.toUpperCase()}</p>`;
  res.innerHTML += `<p>O funcinário(a) ${nome.toUpperCase()}, tem um salário de ${salario.toUpperCase()} em Junho</p>`;
  res.style.textAlign = 'justify'
} button.addEventListener("click", teste)

