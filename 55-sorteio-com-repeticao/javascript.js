const numeroAleatorio = Math.round(Math.random() * 9) + 1;
const maximoTentativas = 4;
const tentativas = [];

for (let i = 0; i < maximoTentativas; i++) {

  const tentativa = parseInt(prompt(`Tentativa ${i + 1}: escolha um número entre 1 e 10`));

  if (tentativa === numeroAleatorio) {
    alert(`Parabéns, você acertou! O número era ${numeroAleatorio}.`);
    break;
  } else {
    tentativas.push(tentativa);

    if (i === maximoTentativas - 1) {
      alert(`Suas tentativas acabaram! O número era ${numeroAleatorio}.`);
    } else {
      alert(`Errou! Você ainda tem ${maximoTentativas - i - 1} tentativa(s) restante(s).`);
    }
  }
}
alert(`Suas tentativas foram: ${tentativas.join(', ')}.`);
