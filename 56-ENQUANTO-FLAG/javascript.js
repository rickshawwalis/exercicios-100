let soma = 0
let numeros = []
while(true) {
    let numero = Number(prompt("Digite um numero "))
    if(numero == 1111) {
        if(numeros.length == 0) {
            alert("Nem tem nada pra somar")
            break
        } else {
            alert("Somatorio chegou ao fim")
            break
        }
    } else {
        soma+= numero
        numeros.push(numero)
    }
    
}

if(numeros.length == 0) {
    alert("Tente novamente")
} else {
    document.write(`Os numeros digitados foram ${numeros} e seu somatorio é ${soma}`)
}
