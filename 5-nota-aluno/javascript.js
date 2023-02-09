let notaAluno = () => {

  let nomeAluno = document.querySelector("#nomeAluno").value;
  let nota1 = document.querySelector("#nota01").value;
  let nota2 = document.querySelector("#nota02").value;
  let button = document.querySelector("#button");
  let res = document.querySelector("#res");
  let media = (Number(nota1) + Number(nota2)) / 2

  if (nomeAluno.lenght==0 || nota1==0 || nota2==0) {
alert("Preencha os campos")
  }
  else {
    res.innerHTML = " ";
    res.innerHTML += `<p>Nota 1 = ${nota1}</p>`
    res.innerHTML += `<p>Nota 2 = ${nota2}</p>`
    res.innerHTML += `<p>MÉDIA = (${nota1} + ${nota2}) / 2 =  ${media}</p>`
    res.innerHTML += `<p>O aluno ${nomeAluno}, ficou com média ${media}</p>`
    res.style.textAlign = 'justify'
  }
}; button.addEventListener("click", notaAluno)