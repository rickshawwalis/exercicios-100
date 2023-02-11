
  let calculor = () => {

    let numero = document.querySelector("#numero").value;
    let res = document.querySelector("#res");
    let dobro = Number(numero) * 2;
    let terPart = Number(numero) / 3;

    if (numero == "") {
      alert("Digite um número");
    } else {
      res.innerHTML = " "
      res.innerHTML += `<p>Número digitado: ${numero}</p>`;
      res.innerHTML += `<p>O dobro de ${numero}: ${dobro}</p>`;
      res.innerHTML += `<p>A terça parte de ${numero}: ${terPart}<p>`;
      res.style.textAlign = 'justify'
    };
  };
  let button = document.querySelector("#button");
  button.addEventListener("click", calculor);

