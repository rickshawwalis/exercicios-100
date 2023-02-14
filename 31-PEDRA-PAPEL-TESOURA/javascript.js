let desconto = () => {

  let res = document.querySelector("#res");

  let fsex = document.getElementsByName("jokenpo");
  let tipo = "";
  var img = document.createElement('img');
  img.setAttribute("id", "fotos");

  if (fsex[0].checked) {
    tipo = "PEDRA";

    res.innerHTML += `VOCÊ ESCOLHEU ${tipo}`;
    img.setAttribute("src", "./jokenpo/pedra.jpg")

    res.innerHTML += "Eu escolho papel"
    img.setAttribute("src", "./jokenpo/papel.jpg")

    res.innerHTML += "Papel envolve pedra. Ganhei!"
    img.setAttribute("src", "./jokenpo/papel-enrola-pedra.png")

    res.style.textAlign = 'justify';
    document.body.style.background = "#902D01";


  } else if (fsex[1].checked) {
    tipo = "PAPEL";
    res.innerHTML += `VOCÊ ESCOLHEU ${tipo}`;
    img.setAttribute("src", "./jokenpo/papel.jpg")

    res.innerHTML += "Eu escolho tesoura"
    img.setAttribute("src", "./jokenpo/tesoura.jpg")

    res.innerHTML += "Tesoura corta papel, ganhei!"
    img.setAttribute("src", "./jokenpo/tesoura-cortapapel.jpg")

    res.style.textAlign = 'justify';
    document.body.style.background = "#172D18";

  } else if (fsex[2].checked) {
    tipo = "TESOURA";
    res.innerHTML += `VOCÊ ESCOLHEU ${tipo}`;
    img.setAttribute("src", "./jokenpo/tesoura.jpg")

    res.innerHTML += "Eu escolho pedra"
    img.setAttribute("src", "./jokenpo/pedra.jpg")

    res.innerHTML += "Pedra quebra tesoura, ganhei!"
    img.setAttribute("src", "./jokenpo/pedra-quebra-tesoura.jpg")

    res.style.textAlign = 'justify';
    document.body.style.background = "#992D77";
  }
  res.innerHTML = " "
  res.appendChild(img);
};

let botao = document.querySelector("#button");
botao.addEventListener("click", desconto);
