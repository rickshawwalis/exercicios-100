let multa =()=>{

let velocidade = document.querySelector("#velocidade")
let res = document.querySelector("#res")

if (velocidade == ""){
  alert("Preencha o campo!")
  return
}

if(velocidade<=80){
  res.innerHTML = `${velocidade} km/h! Você está dentro do limete de velocidade`
} else (velocidade>80) {
res.innerHTML 
`<p>Velocidade acimda do limite permitido ${velocidade * 5}</p>
<p> </p>
<p> </p>
<p> </p>
`

};








}

let botao = document.querySelector("#button");
botao.addEventListener("click", multa);