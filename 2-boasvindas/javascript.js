function teste() {
  
  let ex1 = document.querySelector("#ex1").value;
  let res = document.querySelector("#res");

  if (ex1.length=="") {
    alert("Preencha o campo abaixo!")
  } else {
    res.innerHTML = " "
    res.innerHTML = `Olá! ${ex1.toUpperCase()}, é um prazer te conhecer`;
  }

} 
let button = document.querySelector("#button");
button.addEventListener("click", teste)

