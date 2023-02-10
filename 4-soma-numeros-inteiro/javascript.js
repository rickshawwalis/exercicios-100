function teste() {
  const button = document.querySelector("#button");
  const numero1 = document.querySelector("#numero1").value;
  const numero2 = document.querySelector("#numero2").value;
  const res = document.querySelector("#res")

  if (numero1.length == 0 || numero2.length == 0) {
    alert("Preencha o campo")
  } else {
    res.innerHTML = " "
      `<p>Primeiro número: ${numero1}</p>
   <p>Segundo número: ${numero2}</p>
    <p>Resultado da soma: ${Number(numero1) + Number(numero2)}</p>`;

    res.style.textAlign = 'justify'
  }

} button.addEventListener("click", teste)

