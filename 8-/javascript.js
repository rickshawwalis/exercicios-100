
  let calculor = () => {

    let numero = document.querySelector("#numero").value;
    let res = document.querySelector("#res");
  
    let button1 = document.querySelector("#button");
    let dobro = Number(numero) * 2;
    let terPart = Number(numero) / 2;

    if (numero.length == 0) {
      alert("Digite um número");
    } else {
      res.innerHTML = " "
      res.innerHTML += `<p>Número digitado: ${numero}</p>`;
      res.innerHTML += `<p>O dobro de ${numero}: ${dobro}</p>`;
      res.innerHTML += `<p>A terça parte de ${numero}: ${terPart}<p>`;
      res.style.textAlign = 'justify'
    };
  };

  button.addEventListener("click", calculor);

