let aluguelCarro = () => {

  let diasTrab = Number(document.querySelector("#diasTrab").value);
  let hora = Number(document.querySelector("#hora").value);
  let res = document.querySelector("#res");

  if (diasTrab == "" || hora == "") {
    alert("Preencha os campos")
    return

  } else {

    res.innerHTML = "";
    res.innerHTML =
      `<p>Dias trabalhados: ${diasTrab}</p>  
      <p>Horas trabalhadas (por dia): ${hora}</p>  
      <p>Valor total: ${diasTrab * hora * 25}</p>
                                `;

  }

};

let botao = document.querySelector("#button");
botao.addEventListener("click", aluguelCarro);