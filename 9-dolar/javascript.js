
let calculor = () => {

  let numero = document.querySelector("#numero").value;
  let res = document.querySelector("#res");
  let button1 = document.querySelector("#button");
  let dolar = Number(numero) / 3.45;


  if (numero.length == 0) {
    alert("Digite um número");
  } else {
    res.innerHTML = " "
    res.innerHTML =
      `<p>Você digitou --> R$ ${numero}
      <p>Considerando o dolar (US$1,00 = R$3,45), isso vale cerca de --> US$ ${dolar.toFixed(2)}</p>`
  };
};

button.addEventListener("click", calculor);

