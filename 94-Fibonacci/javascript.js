/*94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado 
Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos 
termos da sequência serão mostrados na tela. O seu procedimento deve receber 
esse valor e mostrar a quantidade de elementos solicitados.
Obs: Use os exercícios 70 e 75 para te ajudar na solução
Ex: 
Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM */

function Fibonacci(n) {
  var num1 = 1;
  var num2 = 1;
  var nextNum;

  console.log(num1);
  console.log(num2);

  for (var i = 3; i <= n; i++) {
    nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
  }

  console.log("FIM");
}
Fibonacci(5);
Fibonacci(9);