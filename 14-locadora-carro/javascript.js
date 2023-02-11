let aluguelCarro = () => {

  let diasAlug = Number(document.querySelector("#diasAlug").value);
  let km = Number(document.querySelector("#km").value);
  let res = document.querySelector("#res");

  if (diasAlug == "" || km == "") {
    alert("Preencha os campos")
    return

  } else {

    res.innerHTML = "";
    res.innerHTML =
      `<p>Dias alugado: ${diasAlug}</p>  
      <p>km rodado: ${km}</p>  
      <p>Valor dias alugado: ${diasAlug * 90}</p>
      <p>Valor km rodado: ${km * 0.20}</p>  
      <p>VALOR TOTAL: ${(diasAlug * 90) + (km * 0.20)}</p>                            `;

  }

};

let botao = document.querySelector("#button");
botao.addEventListener("click", aluguelCarro);