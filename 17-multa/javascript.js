let multa = () => {

  let velocidade = Number(document.querySelector("#velocidade").value);
  let res = document.querySelector("#res");

  if (velocidade == "") {
    alert("Preencha o campo!");
    return;
  }

  if (velocidade <= 80) {
    res.innerHTML = `${velocidade} km/h! Você está dentro do limite de velocidade`;
  } else if (velocidade > 80) {
    res.innerHTML = 
      `<p>Velocidade acima do limite: ${velocidade} km/h;</p> 
       <p>Você ultrapassou ${velocidade - 80} km/h do limite estabelecido (80km/h);</p>
       <p>Será multado em R$ ${(velocidade - 80) * 5}.</p>`;
    res.style.textAlign = 'justify';
  };
};

let botao = document.querySelector("#button");
botao.addEventListener("click", multa);
