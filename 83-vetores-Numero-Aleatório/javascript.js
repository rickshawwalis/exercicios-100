/*83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números 
aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os 
números gerados e depois coloque o vetor em ordem crescente, mostrando no final 
os valores ordenados. */

let valores = [];

for (let i = 1; i <= 20; i++) {
    let aleatorio = Math.round(Math.random() * 98) + 1;
    valores.push(aleatorio);
}

valores.sort((a, b) => a - b); //function anonima

console.log(valores.join(", "));

/*let valores = [];

for (let i = 1; i <= 20; i++) {
    let aleatorio = Math.round(Math.random() * 98) + 1;
    valores.push(aleatorio);
}

valores.sort(function(a, b) { --function convencional
    return a - b;
});

console.log(valores.join(", ")); */