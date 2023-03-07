const numero = parseFloat(prompt("Digite um número: "));

const multiplicacao = [];
const soma = [];
const divisao = [];
const subtracao = [];

for (let i = 1; i <= 10; i++) {
    multiplicacao.push(numero * i);
    soma.push(numero + i);
    divisao.push(numero / i);
    subtracao.push(numero - i);
}

document.write("<h3>Multiplicação</h3>");
for (let i = 1; i <= multiplicacao.length; i++) {
    document.write(`${numero} x ${i} = ${multiplicacao[i-1]}<br>`);
}

document.write("<h3>Soma</h3>");
for (let i = 1; i <= soma.length; i++) {
    document.write(`${numero} + ${i} = ${soma[i - 1]}<br>`);
}

document.write("<h3>Subtração</h3>");
for (let i = 1; i <= subtracao.length; i++) {
    document.write(`${numero} - ${i} = ${subtracao[i - 1]}<br>`);
}

document.write("<h3>Divisão</h3>");
for (let i = 1; i <= divisao.length; i++) {
    document.write(`${numero} / ${i} = ${divisao[i - 1]}<br>`);
}
