let imparPar = () => {
  let numero = Number(document.querySelector("#numero").value);
  let res = document.querySelector("#res");

  if (numero == "") {
    alert("Preencha o campo!");
    return;
  }

  if (numero % 2 === 0) {
    res.innerHTML = "PAR";
  } else {
    res.innerHTML = "IMPAR";
  }
}

let botao = document.querySelector("#button");
botao.addEventListener("click", imparPar);
