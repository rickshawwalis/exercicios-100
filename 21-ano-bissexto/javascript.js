let bissexto=()=>{

  let ano = Number(document.querySelector("#ano").value);
  let res = document.querySelector("#res");

if(ano == ""){
  res.innerHTML = "Preencha o campo!"
  return;
}


  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    res.innerHTML = `${ano}  é um ano bissexto`;
  } else {
    res.innerHTML = `${ano}  não é um ano bissexto`;
  };
};

let botao = document.querySelector("#button");
botao.addEventListener("click", bissexto);