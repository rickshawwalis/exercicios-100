let repeticao = () => {
    let res = document.querySelector("#res");
    let numero = Number(document.querySelector("#numero").value);
  
    if (numero == "") {
      alert("Preencha o campo!");
      return;
    }
let contagem = "";
let i = 1;
while(i<=numero){
  contagem += `${i} `
  i++
}
res.innerHTML = `Contagem: ${contagem}`
}
  let botao = document.querySelector("#button");
  botao.addEventListener("click", repeticao);
 
  /* USANDO FOR
  let contagem = "";
  for(let i = 1;i<=numero;i++){
      contagem += `${i} `
  }
  res.innerHTML = `Contagem ${contagem}`
  */
 
/* USANDO DO WHILE 
  let contagem = "";
  let i = 1;
  do {
    contagem += `${i} `;
    i++;
  } while (i <= numero);
  
  res.innerHTML = `Contagem: ${contagem}`;
  */