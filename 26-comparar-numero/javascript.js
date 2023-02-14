let calculo = () => {

  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let res = document.querySelector("#res");


  if (num1 == "" || num2 == "") {
    alert("Preencha os campos!");
    return;
  }

  if (num1 > num2) {
    res.innerHTML = `<p> ${num1} é maior que ${num2} <p>`
  } else if (num1 < num2) {
    res.innerHTML = `<p> ${num2} é maior que ${num1} <p>`
  } else {
    res.innerHTML = `<p> ${num2} e ${num1} são iguais<p>`
  }

};
let botao = document.querySelector("#button");
botao.addEventListener("click", calculo);