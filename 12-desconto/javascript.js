let desconto =()=>{
let produto = Number(document.querySelector("#preco").value);
let res = document.querySelector("#res");

if(produto == ""){
  alert("Preencha o campo!");
  return;
} else {
  res.innerHTML = " "
  res.innerHTML = 
  `<p>Valor do produto informado: ${produto}</p>
  <p>Valor do desconto (5%): R$ ${(produto * 5) / 100}</p>
  <P>Valor final do produto: R$ ${produto - ((produto * 5) / 100)}</p>
  `
  res.style.textAlign = 'justify';
}

}

let botao = document.querySelector("#button");
botao.addEventListener("click", desconto);
