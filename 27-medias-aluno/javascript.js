let passarAno = () => {
  let nota1 = Number(document.querySelector("#nota1").value);
  let nota2 = Number(document.querySelector("#nota2").value);
  let media = (nota1 + nota2) / 2;

  let res = document.querySelector("#res");

  if (nota1 == "" || nota2 == "") {
    alert("Prencha os dados!");
    return;
  }

  if (media < 4.9) {
    res.innerHTML = `<p>Sua média foi: ${media}. Reprovado!</p>`
    res.style.textAlign = 'justify';

  } else if (media >= 5 && media <= 6.9) {
    res.innerHTML = `<p>Sua média foi: ${media}. Recuperação!<p>`
    res.style.textAlign = 'justify';

  } else {
    res.innerHTML = `<p>Sua média foi: ${media}. Aprovado!<p>`
    res.style.textAlign = 'justify';
  }


}

let botao = document.querySelector("#button");
botao.addEventListener("click", passarAno)