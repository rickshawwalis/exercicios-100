let desconto = () => {

  let res = document.querySelector("#res");

  let fsex = document.getElementsByName("jokenpo");
  let tipo = "";
  var img = document.createElement('img');
  img.setAttribute("id", "fotos");

  if (fsex[0].checked) {
    tipo = "PEDRA";
    res.innerHTML += `VOCÊ ESCOLHEU ${tipo}`;
    img.setAttribute("src", "./pedra.jpg")
    res.innerHTML += "Eu escolho papel"
    img.setAttribute("src", "./papel.jpg")
    res.innerHTML += "Papel envolve pedra. Ganhei!"
    img.setAttribute("src", "./papel-enrola-pedra.png")
    res.style.textAlign = 'justify';


  } else if (fsex[1].checked) {
    tipo = "PAPEL";
    res.innerHTML += `VOCÊ ESCOLHEU ${tipo}`;
    img.setAttribute("src", "./papel.jpg")
    res.innerHTML += "Eu escolho tesoura"
    img.setAttribute("src", "./tesoura.jpg")
    res.innerHTML += "Tesoura corta papel, ganhei!"
    img.setAttribute("src", "./tesoura-cortapapel.jpg")
    res.style.textAlign = 'justify';

  } else if (fsex[2].checked) {
    tipo = "TESOURA";
    res.innerHTML += `VOCÊ ESCOLHEU ${tipo}`;
    img.setAttribute("src", "./tesoura.jpg")
    res.innerHTML += "Eu escolho pedra"
    img.setAttribute("src", "./pedra.jpg")
    res.innerHTML += "Pedra quebra tesoura, ganhei!"
    img.setAttribute("src", "./pedra-quebra-tesoura.jpg")
    res.style.textAlign = 'justify';
  }
  res.innerHTML = " "
  res.appendChild(img);
};

let botao = document.querySelector("#button");
botao.addEventListener("click", desconto);
