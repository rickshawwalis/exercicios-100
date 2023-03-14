/**89) Crie um programa que melhore o procedimento Gerador() da questão anterior 
para que o programador possa escolher uma entre três bordas:
 +-------=======------+ Borda 1
 ~~~~~~~~:::::::~~~~~~~ Borda 2
 <<<<<<<<------->>>>>>> Borda 3
Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
~~~~~~~~:::::::~~~~~~~
 Portugol Studio
 Portugol Studio
 Portugol Studio
~~~~~~~~:::::::~~~~~~~ */



function* gerador() {
  let escolha = "BORDA3"

  if (escolha === "BORDA1") {
    console.log(`
+-------=======------+
Portugol Studio
Portugol Studio
Portugol Studio
+-------=======------+
`)
  } else if (escolha === "BORDA2") {
    console.log(`
    ~~~~~~~~:::::::~~~~~~~
    Portugol Studio
    Portugol Studio
    Portugol Studio
    ~~~~~~~~:::::::~~~~~~~
    `)
  } else if (escolha === "BORDA3") {
    console.log(`
    <<<<<<<<------->>>>>>>
    Portugol Studio
    Portugol Studio
    Portugol Studio
    <<<<<<<<------->>>>>>>
    `)
  }


}
gerador().next();