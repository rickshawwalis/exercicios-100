
  let calculor = () => {

    let numero = document.querySelector("#numero").value;
    let res = document.querySelector("#res");
    let button1 = document.querySelector("#button");
   

    if (numero == "") {
      alert("Digite um número");
    } else {
      res.innerHTML = " "
      res.innerHTML = `<p>Você digitou-> ${numero} metro(os), isso a corresponde a: </p>
      <p>${numero/1000} km</p>
      <p>${numero/100} Hm</p>
      <p>${numero/10} Dam</p>
      <p>${numero*10} dm</p>
      <p>${numero*100} cm</p>
      <p>${numero*1000} mm</p>`
      res.style.textAlign = 'justify'
    };
  };

  button.addEventListener("click", calculor);

