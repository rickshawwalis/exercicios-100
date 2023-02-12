let passarAno=()=>{
let nome = document.querySelector("#nome").value;
let nota1 = Number(document.querySelector("#nota1").value);
let nota2 = Number(document.querySelector("#nota2").value);
let media = (nota1 + nota2) / 2;

let res = document.querySelector("#res");

if(nome == "" || nota1 == "" || nota2 == ""){
alert("Prencha os dados!");
return;
}

if(media < 7){
  res.innerHTML = `<p>${nome}, sua média foi: ${media}. Está abaixo da média. Estude mais!</p>`
  res.style.textAlign = 'justify';
} else {
  res.innerHTML = `<p>${nome}, sua média foi: ${media}. Parabéns!<p>`
  res.style.textAlign = 'justify';
}





}

let botao = document.querySelector("#button");
botao.addEventListener("click", passarAno)