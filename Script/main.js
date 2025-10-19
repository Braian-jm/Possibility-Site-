// lista das seções que serão alternadas
const secoes = ["inicio", "projetos", "premios"];
let indiceAtual = 0;
let intervalo;

function trocarAutomaticamente() {
  indiceAtual = (indiceAtual + 1) % secoes.length;
  sobre(secoes[indiceAtual]);
}

function iniciarTrocaAutomatica() {
  intervalo = setInterval(trocarAutomaticamente, 10000);
}

function resetarTimer() {
  clearInterval(intervalo);
  iniciarTrocaAutomatica();
}

function sobre(select) {
  const inicio_bt = document.getElementById("beggin");
  const projetos_bt = document.getElementById("projetos");
  const premios_bt = document.getElementById("premios");
  const agente1 = document.getElementById("agente1");
  const agente2 = document.getElementById("agente2");
  const agente3 = document.getElementById("agente3");

  // 🔁 reinicia o timer toda vez que o usuário clicar
  resetarTimer();

  switch (select) {
    case "inicio":
      inicio_bt.classList.add("selected");
      premios_bt.classList.remove("selected");
      projetos_bt.classList.remove("selected");
      agente1.innerText = "esse texto e muito legal ne";
      agente2.innerText = "esse aq tmb e legal";
      agente3.innerText = "e esse em";
      indiceAtual = 0;
      break;
    case "projetos":
      projetos_bt.classList.add("selected");
      inicio_bt.classList.remove("selected");
      premios_bt.classList.remove("selected");
      agente1.innerText = "proj 1";
      agente2.innerText = "proj 2";
      agente3.innerText = "proj 3";
      indiceAtual = 1;
      break;
    case "premios":
      premios_bt.classList.add("selected");
      inicio_bt.classList.remove("selected");
      projetos_bt.classList.remove("selected");
      agente1.innerText = "pre 1";
      agente2.innerText = "pre 2";
      agente3.innerText = "pre 3";
      indiceAtual = 2;
      break;
  }
}

window.addEventListener("load", () => {
  iniciarTrocaAutomatica();
});
