let bhaskara = () => {
  let a = Number(document.querySelector("#a").value);
  let b = Number(document.querySelector("#b").value);
  let c = Number(document.querySelector("#c").value);
  let res = document.querySelector("#res");

  if (a == "" || b == "" || c == "") {
    alert("Preencha todos os campos");
    return;
  }

  let delta = (b ** 2) - (4 * a * c);

  if (delta < 0) {
    res.innerHTML = "<p>A equação não possui raízes reais.</p>";
    return;
    
  } else {

    let raizes = delta === 0 ? 1 : 2;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    res.innerHTML = "";
    res.innerHTML =
      `<p>Valor de Delta: ${delta}</p>
       <p>Valor de X1: ${x1}</p>
       <p>Valor de X2: ${x2}</p>`;

  }
};

let botao = document.querySelector("#button");
botao.addEventListener("click", bhaskara);
