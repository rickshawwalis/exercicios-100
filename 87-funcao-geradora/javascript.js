/**87) Crie um programa que melhore o procedimento Gerador() da questão anterior 
para que mostre uma mensagem personalizada, passada como parâmetro.
Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
+-------=======------+
 Aprendendo Portugol 
+-------=======------+ */

function* gerador() {
    console.log('+-------=======------+');
    console.log(' Aprendendo Portugol ');
    console.log('+-------=======------+');
  }
  
  gerador().next();
  