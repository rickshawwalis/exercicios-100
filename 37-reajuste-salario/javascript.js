let aumento = () => {
  let salario = Number(document.querySelector("#salario").value);
  let tempo = Number(document.querySelector("#tempo").value);
  let res = document.querySelector("#res");

  if (tempo == "" || salario == "") {
    alert("Preencha os campos!");
    return;
  }

  let funcionario = document.getElementsByName("sexofun");
  let tipo = "";

  if (funcionario[0].checked) {
    tipo = "homem";

    if (tempo > 30) {
      res.innerHTML =
        `<p>Sexo ${tipo}. Você está na emprea a ${tempo} ano(s) e recebe R$ ${salario}<p>
  <p>Irá receber uma aumento de 25%. Passando para o valor de: R$ ${((salario * 25) / 100)}.<p>`
    } else if (tempo >= 20 && tempo <= 30) {
      res.innerHTML =
        `<p>Sexo ${tipo}. Você está na emprea a ${tempo} ano(s) e recebe R$ ${salario}<p>
<p>Irá receber uma aumento de 13%. Passando para o valor de: R$ ${((salario * 13) / 100)}.<p>`
    } else if (tempo < 20) {
      res.innerHTML =
        `<p>Sexo ${tipo}. Você está na emprea a ${tempo} ano(s) e recebe R$ ${salario}<p>
<p>Irá receber uma aumento de 3%. Passando para o valor de: R$ ${((salario * 3) / 100)}.<p>`
    }
  } else if (funcionario[1].checked) {
    tipo = "mulher";

    if (tempo > 20) {
      res.innerHTML =
        `<p>Sexo ${tipo}. Você está na emprea a ${tempo} ano(s) e recebe R$ ${salario}<p>
  <p>Irá receber uma aumento de 23%. Passando para o valor de: R$ ${((salario * 23) / 100)}.<p>`
    } else if (tempo >= 15 && tempo <= 20) {
      res.innerHTML =
        `<p>Sexo ${tipo}. Você está na emprea a ${tempo} ano(s) e recebe R$ ${salario}<p>
<p>Irá receber uma aumento de 12%. Passando para o valor de: R$ ${((salario * 12) / 100)}.<p>`
    } else if (tempo < 15) {
      res.innerHTML =
        `<p>Sexo ${tipo}. Você está na emprea a ${tempo} ano(s) e recebe R$ ${salario}<p>
<p>Irá receber uma aumento de 5%. Passando para o valor de: R$ ${((salario * 5) / 100)}.<p>`
    }
  }
};
let botao = document.querySelector("#button");
botao.addEventListener("click", aumento);
