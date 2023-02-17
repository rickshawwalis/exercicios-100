let repeticao = () => {
  let res = document.querySelector("#res");
  let numero = Number(document.querySelector("#numero").value);

  if (numero == 0) {
    alert("Preencha o campo!")
  }
let contagem = "";
for (let i = 30; i >= numero; i--) {
  if (i % 4 == 0) {
    contagem += `[${i}] `
  } else {
    contagem += `${i} `
  }
}
res.innerHTML = `<p>Contagem: ${contagem}</p>`
}
let botao = document.querySelector("#button");
botao.addEventListener("click", repeticao);

