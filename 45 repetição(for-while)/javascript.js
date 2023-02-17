let repeticao = () => {
  let res = document.querySelector("#res");
  let Pnumero = Number(document.querySelector("#Pnumero").value);
  let Unumero = Number(document.querySelector("#Unumero").value);
  let Inumero = Number(document.querySelector("#Inumero").value);

  if (Pnumero == 0 || Unumero == 0 || Inumero == 0) {
    alert("Preencha o campo!")
  }
  let contagem = "";
  if(Pnumero<=Unumero){
  for (let i = Pnumero; i <= Unumero; i += Inumero) {
    contagem += `${i} `;
  }
}else{
  if(Pnumero>=Unumero){
    for (let i = Pnumero; i  >= Unumero; i -= Inumero) {
      contagem += `${i} `;
}
  }
}
res.innerHTML = `<p>Contagem: ${contagem}</p>`
}
let botao = document.querySelector("#button");
botao.addEventListener("click", repeticao);

/* RESPOSTA COM WHILE
let contagem = "";
while(Pnumero<=Unumero){
contagem += `${Pnumero} `
Pnumero += Inumero
}

res.innerHTML = `<p>Contagem: ${contagem}</p>`
} 
*/
