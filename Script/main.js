let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const logomini = document.getElementById("logo-mini");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // rolando pra baixo → encolhe
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("shrink");
    logomini.classList.add("shrink");
  }
  // rolando pra cima → volta ao tamanho original
  else {
    navbar.classList.remove("shrink");
    logomini.classList.remove("shrink");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function sobre(select) {
  const inicio_bt = document.getElementById("beggin");
  const projetos_bt = document.getElementById("projetos");
  const premios_bt = document.getElementById("premios");
  const agente1 = document.getElementById("agente1");
  const agente2 = document.getElementById("agente2");
  const agente3 = document.getElementById("agente3");
  switch (select) {
    case "inicio":
      inicio_bt.classList.add("selected");
      premios_bt.classList.remove("selected");
      projetos_bt.classList.remove("selected");
      agente1.innerText = "esse texto e muito legal ne";
      console.log("foi");
      break;
    case "projetos":
      projetos_bt.classList.add("selected");
      inicio_bt.classList.remove("selected");
      premios_bt.classList.remove("selected");
      break;
    case "premios":
      premios_bt.classList.add("selected");
      inicio_bt.classList.remove("selected");
      projetos_bt.classList.remove("selected");
      break;
  }
}
