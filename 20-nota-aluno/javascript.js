let imparPar=()=>{

let numero = Number(document.querySelector("#numero").value);
let res = Number(document.querySelector("#res").value);

if(numero == ""){
  alert("Preencha o campo!");
  return;
}

if(numero%2==0){
  return par;
} else {
return imparPar;  
}


}

let botao = document.querySelector("#button");
botao.addEventListener("click",imparPar);