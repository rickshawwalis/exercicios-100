let emprestimo = () => {

  let res = document.querySelector("#res");
  let valorCasa = Number(document.querySelector("#valorCasa").value);
  let valorSalario = Number(document.querySelector("#valorSalario").value);
  let valorAno = Number(document.querySelector("#valorAno").value);
  let emprestimo = valorCasa / (valorAno * 12);
  let prestacao = (valorSalario * 30) / 100

  if(valorAno == "" || valorCasa == "" || valorSalario == ""){
    alert("Preencha os campos!")
    return;
  }

  if(emprestimo <= prestacao){
    res.innerHTML = 
    `<p>Emprestido concedido</p>
    <p>Valor da parcela: R$ ${emprestimo.toFixed(2)}</p>
    <p>Meses para pagar: ${(valorAno * 12)} meses </p>
    `
  } else{
    res.innerHTML = `<p>Emprestimo negado! Renda inferior ao estabelecido para concessão</p>`
  }

};
let botao = document.querySelector("#button");
botao.addEventListener("click", emprestimo);

// emprestimo> 50.000 / 10*12 = 416,66
// prestação> 2.000 x 30 / 100 = 600