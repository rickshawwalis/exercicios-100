let calculo = () => {

  let numero = document.querySelector("#numero").value;
  let res = document.querySelector("#res");
  let button = document.querySelector("#button");
  let resSuc = Number(numero) + 1;
  let resAnt = Number(numero) - 1;

  if (numero.length == 0) {
    alert("Preencha o dado do campo");
  } else {
    res.innerHTML = "";
    res.innerHTML += `<p>Numero ${numero}<p>`;
    res.innerHTML += `<p>Antecessor de ${numero} --> ${resAnt}<p>`;
    res.innerHTML += `<p>Sucessor de ${numero} --> ${resSuc}<p>`;
    res.style.textAlign = 'justify'
  };
}; button.addEventListener("click", calculo);
