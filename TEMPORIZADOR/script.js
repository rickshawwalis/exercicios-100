const tempo = document.querySelector("#tempo");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");

let hours = 0;
let minutes = 0;
let seconds = 0;

let c = () => {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  };
  tempo.innerHTML =
    `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
};

let timer;

iniciar.addEventListener("click", () => {//iniciar
  timer = setInterval(c, 1000);
});

pausar.addEventListener("click", () => {//pausar
  clearInterval(timer);
});

zerar.addEventListener("click", () => {//zear
  clearInterval(timer);
  tempo.innerHTML = "00 : 00 : 00";
});
tempo.style.textAlign = 'center';
