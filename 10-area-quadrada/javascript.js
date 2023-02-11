function teste() {
  
  const altura = document.querySelector("#numero1").value;
  const largura = document.querySelector("#numero2").value;
  const res = document.querySelector("#res");

  if (altura == "" || largura == "") {
    alert("Preencha os dados");
  } else {
    res.innerHTML = " ";
    res.innerHTML =
      `<p>Altura informada: ${altura}</p>
<p>Largura informada: ${largura}</p>
<p>Área quadrada da parede: ${largura * altura}</p>
<p>Tinta necessária para pintar a parede: ${(largura * altura) / 2} litro(os)<p>`
res.style.textAlign = 'justify';
  }

} 
const button = document.querySelector("#button");
button.addEventListener("click", teste)

