let calculo = () => {

  let numero = document.querySelector("#numero").value;
  let res = document.querySelector("#res");
  let resSuc = Number(numero) + 1;
  let resAnt = Number(numero) - 1;

  if (numero =="") {
    alert("Preencha o dado do campo");
  } else {
    res.innerHTML = " ";
    res.innerHTML =
      `<p>Numero ${numero}<p>
    <p>Antecessor de ${numero} --> ${resAnt}<p>
    <p>Sucessor de ${numero} --> ${resSuc}<p>`
    res.style.textAlign = 'justify'
  };
}; 
let button = document.querySelector("#button");
button.addEventListener("click", calculo);
