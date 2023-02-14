function teste() {

  const nome = document.querySelector("#nome").value;
  const salario = Number(document.querySelector("#salario").value);
  const anos = Number(document.querySelector("#anos").value);
  const res = document.querySelector("#res");

  if (nome == "" || salario == "" || anos == "") {
    alert("Preencha os dados");
    return;
  }
  if (anos < 3) {
    res.innerHTML = `<p>Seu salário passará de R$ ${salario}, para R$ ${(salario * 3 / 100) + salario}</p>`
    res.style.textAlign = 'justify';
  } else if (anos > 3 && anos < 10) {
    res.innerHTML = `<p>Seu salário passará de R$ ${salario}, para R$ ${(salario * 12.5 / 100) + salario}</p>`
    res.style.textAlign = 'justify';
  } else {
    res.innerHTML = `<p>Seu salário passará de R$ ${salario}, para R$ ${(salario * 20 / 100) + salario}</p>`
    res.style.textAlign = 'justify';
  }

  res.style.textAlign = 'justify';
}
let button = document.querySelector("#button");
button.addEventListener("click", teste)
