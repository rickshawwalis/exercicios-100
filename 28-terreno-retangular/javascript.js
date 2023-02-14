function teste() {

  const altura = document.querySelector("#numero1").value;
  const largura = document.querySelector("#numero2").value;
  const areatotal = altura * largura
  const res = document.querySelector("#res");

  if (altura == "" || largura == "") {
    alert("Preencha os dados");
    return;
  }
  if (areatotal < 100) {
    res.innerHTML = `<p>${areatotal}m² => Terreno Popular <p>`;
    res.style.textAlign = 'justify';
  } else if (areatotal > 100 && areatotal < 500) {
    res.innerHTML = `<p>${areatotal}m² => TERRENO MASTER <p>`;
    res.style.textAlign = 'justify';
  } else {
    res.innerHTML = `<p>${areatotal}m² => TERRENO VIP <p>`;
    res.style.textAlign = 'justify';
  }
}
const button = document.querySelector("#button");
button.addEventListener("click", teste)

