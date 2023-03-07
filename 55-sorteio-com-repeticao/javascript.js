const numeroAleatorio = Math.round(Math.random() * 9) + 1;
const maximoTentativas = 4;
const tentativas = [];

for (let i = 0; i < maximoTentativas; i++) {

  const tentativa = parseInt(prompt(`Tentativa ${i}º: escolha um número entre 1 e 10`));

if(tentativa == ""  || isNaN(tentativa)){
  alert("preencha corretamente o campo!")
  i--
}

tentativas.push(tentativa);

  if (tentativa === numeroAleatorio) {
    alert(`Parabéns, você acertou! O número era ${numeroAleatorio}.`);
    break;
  } else {

    if (i < maximoTentativas) {
      alert(`Errou! Você ainda tem ${maximoTentativas - i - 1} tentativa(s) restante(s).`);

    } else if (i === maximoTentativas - 1) {
      alert(`Suas tentativas acabaram! O número correto era ${numeroAleatorio}.`);
    }
  }
}
alert(`Suas tentativas foram: ${tentativas.join(', ')}.`);
