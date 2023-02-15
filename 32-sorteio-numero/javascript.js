let sorteio = () => {
  let numero = Number(document.querySelector("#numero").value);

  let opcoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

  let res = document.querySelector("#res");
  
  if (numero == "") {
    alert("Preencha o campo!");
    return;
  }
  
  if (numero == escolha) {
    res.innerHTML = `<p>Seu número foi: ${numero}</p>
    <p>O escolhido foi: ${escolha}. Parabéns você acertou!</p>`
  } else {
    res.innerHTML = `<p>Seu número foi: ${numero}</p>
    <p>O escolhido foi: ${escolha}. Você errou, tente novamente!</p>`
  }




// let opcoes = [2,2,2,2,2,2,2]
// let escolha = opcao[Math.floor(Math.random()*opcoes.length)]


};
let button = document.querySelector("#button");
button.addEventListener("click", sorteio);