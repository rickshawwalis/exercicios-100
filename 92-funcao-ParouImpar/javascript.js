/*92) Crie uma lógica que leia um número inteiro e passe para um procedimento
ParOuImpar() que vai verificar e mostrar na tela se o valor passado como 
parâmetro é PAR ou ÍMPAR. */


let calculo = () => {
  let a = 15;

  if(a%2===0){
    return "par"
  } else{
    return "impar"
  }
}

//let resultado = calculo();
console.log(calculo()); // exibe "par" na tela
