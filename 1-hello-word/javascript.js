function teste() {
  let ex1 = document.querySelector("#ex1").value;
  let res = document.querySelector("#res");

  if(ex1.length === 0){
    alert("ESCREVA UMA INFORMAÇÃO VÁLIDA");
  } else {
    res.innerHTML = `HELLO WORD!!! <br> SEJA BEM-VINDO ${ex1.toUpperCase()}`;
  }
}

  