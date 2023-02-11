let notaAluno = () => {

  let nomeAluno = document.querySelector("#nomeAluno").value;
  let nota1 = document.querySelector("#nota01").value;
  let nota2 = document.querySelector("#nota02").value;
  let res = document.querySelector("#res");

  if (nomeAluno.length == "" || nota1 == "" || nota2 == "") {
    alert("Preencha os campos")
  }
  else {
    res.innerHTML = " ";
    res.innerHTML =
      `<p>Nota 1 = ${nota1}</p>
    <p>Nota 2 = ${nota2}</p>
   <p>MÉDIA = (${nota1} + ${nota2}) / 2 =  ${(Number(nota1) + Number(nota2)) / 2}</p>
    <p>O aluno ${nomeAluno}, ficou com média ${(Number(nota1) + Number(nota2)) / 2}</p>`
    res.style.textAlign = 'justify'
  }
}; 