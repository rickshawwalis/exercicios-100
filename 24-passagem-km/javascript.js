let corrida =()=>{

let distancia = Number(document.querySelector("#km").value);
let res = document.querySelector("#res")

if(distancia == ""){
  alert("Preencha o campo!");
  return;
}
 if(distancia<200){
  res.innerHTML = `Você informou ${distancia} km, nesse caso o valor da corrida ficará em R$ ${distancia * 0.50}`
 } else {
  res.innerHTML = `Você informou ${distancia} km, nesse caso o valor da corrida ficará em R$ ${distancia * 0.45}`
 }

}

let botao = document.querySelector("#button");
botao.addEventListener("click", corrida);





