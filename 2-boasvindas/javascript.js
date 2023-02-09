function teste() {
  let button = document.querySelector("#button");
  let ex1 = document.querySelector("#ex1").value;
  let res = document.querySelector("#res");

  if (ex1.length===0) {
    alert("Preencha o campo Abaixo!")
  } else {
    res.innerHTML = " "
    res.innerHTML = `Olá! ${ex1.toUpperCase()}, é um prazer te conhecer`;
  }

} button.addEventListener("click", teste)

