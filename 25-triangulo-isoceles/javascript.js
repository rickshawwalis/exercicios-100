let triangulo = () => {

  let ladoA = Number(document.querySelector("#a").value);
  let ladoB = Number(document.querySelector("#b").value);
  let ladoC = Number(document.querySelector("#c").value);

  let res = document.querySelector("#res")

  if (ladoA == "" || ladoB == "" || ladoC == "") {
    alert("Preencha todos os campos!");
    return;
  };

  if ((ladoA + ladoB) > ladoC && (ladoA + ladoC) > ladoB && (ladoB + ladoC) > ladoA) {
    res.innerHTML = `<p>Você informou: ${ladoA} ${ladoB} ${ladoC}: Triângulo Isosceles </p>`
  } else {
    res.innerHTML = `<p>Não é um triângulo</p>`
  }






};
let botao = document.querySelector("#button");
botao.addEventListener("click", triangulo);