let votar = () => {
  let anoNascimento = document.querySelector("#nascimento").value;
  let anoAtual = new Date();
  let idade = anoAtual.getFullYear() - anoNascimento;
  let res = document.querySelector("#res");

if(anoNascimento == ""){
  alert("Preencha o campo!")
  return
}

  if (idade < 16) {
    res.innerHTML = `${idade} anos! Não tem idade para votar!`;
  } else if (idade >= 18 && idade <= 70) {
    res.innerHTML = `${idade} anos! Voto obrigatório!`;
  } else {
    res.innerHTML = `${idade} anos! Voto opcional`;
  }
  
};

let botao = document.querySelector("#button");
botao.addEventListener("click", votar);
