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
