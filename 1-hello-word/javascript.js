

function teste(){

  let ex1 = document.querySelector("#ex1").value;
  let res = document.querySelector("#res");

if(ex1.length===0){
  alert("Preencha o Campo Abaixo!")
} else {
  res.innerHTML = "";
  res.innerHTML += `<p>HELLO WORD!!! <br> Seja Bem-Vindo ${ex1.toUpperCase()}!</p>`;


}
  
}
