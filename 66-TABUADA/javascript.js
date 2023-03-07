let valor = parseFloat(prompt("Digite um número: "));

for (let i = 1; i <= 10; i++) {
    const calculo = valor * i;
    document.write(`<br>${valor} x ${i} = ${calculo}`)
}