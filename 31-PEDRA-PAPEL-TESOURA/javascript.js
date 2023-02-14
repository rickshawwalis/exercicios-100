let desconto = () => {

  let res = document.querySelector("#res");

  let fsex = document.getElementsByName("jokenpo");
  let tipo = "";

  var img1 = document.createElement('img');
  img1.setAttribute("id", "fotos");
  var img2 = document.createElement('img');
  img2.setAttribute("id", "fotos");
  var img3 = document.createElement('img');
  img3.setAttribute("id", "fotos");

  let opcoes = ["PEDRA", "PAPEL", "TESOURA", "MATEMÁTICA"];
  let escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

  if (fsex[0].checked) {
    tipo = "PEDRA";
    res.innerHTML = ""
    res.innerHTML += `<p>VOCÊ ESCOLHEU ${tipo}</p>`;
    img1.setAttribute("src", "./jokenpo/pedra.jpg")

    res.innerHTML += "<p>Eu escolho papel</p>"
    img2.setAttribute("src", "./jokenpo/papel.jpg")

    res.innerHTML += "<p>Papel envolve pedra. Ganhei!</p>"
    img3.setAttribute("src", "./jokenpo/papel-enrola-pedra.png")

    res.style.textAlign = 'justify';
    document.body.style.background = "#902D01";


  } else if (fsex[1].checked) {
    tipo = "PAPEL";
    res.innerHTML = ""
    res.innerHTML += `<p>VOCÊ ESCOLHEU ${tipo}</p>`;
    img1.setAttribute("src", "./jokenpo/papel.jpg")

    res.innerHTML += "<p>Eu escolho tesoura</p>"
    img2.setAttribute("src", "./jokenpo/tesoura.jpg")

    res.innerHTML += "<p>Tesoura corta papel. Ganhei!</p>"
    img3.setAttribute("src", "./jokenpo/tesoura-cortapapel.jpg")

    res.style.textAlign = 'justify';
    document.body.style.background = "#172D18";

  } else if (fsex[2].checked) {
    tipo = "TESOURA";
    res.innerHTML = ""
    res.innerHTML += `<p>VOCÊ ESCOLHEU ${tipo}</p>`;
    img1.setAttribute("src", "./jokenpo/tesoura.jpg")

    res.innerHTML += "<p>Eu escolho pedra</p>"
    img2.setAttribute("src", "./jokenpo/pedra.jpg")

    res.innerHTML += "<p>Pedra quebra tesoura. Ganhei!</p>"
    img3.setAttribute("src", "./jokenpo/pedra-quebra-tesoura.jpg")
    res.style.textAlign = 'justify';
    document.body.style.background = "#992D77";

  }
  res.appendChild(img1);
  res.appendChild(img2);
  res.appendChild(img3);
};

let botao = document.querySelector("#button");
botao.addEventListener("click", desconto);
