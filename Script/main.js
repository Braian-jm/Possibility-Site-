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

  resetarTimer();

  switch (select) {
    case "inicio":
      inicio_bt.classList.add("selected");
      premios_bt.classList.remove("selected");
      projetos_bt.classList.remove("selected");
      agente1.innerText =
        "A Possibility nasceu de um simples projeto escolar entre 17 colegas apaixonados por tecnologia e criatividade. O grupo, inicialmente reunido para uma feira de ciências, decidiu desenvolver um pequeno jogo que unisse arte, programação e música. O que começou como uma atividade despretensiosa logo chamou a atenção pela originalidade e pelo espírito colaborativo que unia todos os envolvidos.";
      agente2.innerText =
        "Com o sucesso inesperado do projeto, os integrantes perceberam que aquela parceria tinha potencial para ir além da sala de aula. Cada um trouxe suas habilidades — desde design e narrativa até programação e trilha sonora — e juntos fundaram oficialmente a Possibility Inc., com o propósito de transformar ideias em experiências únicas.";
      agente3.innerText =
        "Hoje, a empresa carrega o mesmo espírito que a originou: a crença de que a diversidade é a base da inovação. Aqueles 17 estudantes continuam sendo o coração da Possibility, lembrando sempre que grandes criações nascem quando mentes diferentes compartilham o mesmo sonho.";
      indiceAtual = 0;
      break;
    case "projetos":
      projetos_bt.classList.add("selected");
      inicio_bt.classList.remove("selected");
      premios_bt.classList.remove("selected");
      agente1.innerText =
        "Atualmente, a Possibility está desenvolvendo seu primeiro grande projeto: um jogo estratégico em tempo real inspirado na dinâmica envolvente de Clash Royale. A proposta é trazer batalhas intensas, rápidas e cheias de possibilidades, onde cada decisão do jogador pode mudar completamente o rumo da partida.";
      agente2.innerText =
        "O diferencial do projeto está na combinação entre estratégia e criatividade. Cada personagem, carta e ambiente foi pensado para oferecer liberdade de estilo e incentivar o jogador a experimentar novas táticas. A equipe busca equilibrar profundidade e acessibilidade, criando uma experiência competitiva, mas também divertida e intuitiva.";
      agente3.innerText =
        "Mesmo em desenvolvimento, o jogo já reflete a identidade da Possibility — uma mistura de inovação, trabalho em equipe e paixão por desafiar limites. A meta do grupo é clara: criar um título que não apenas entretenha, mas também mostre ao mundo o poder das ideias que nascem da colaboração.";
      indiceAtual = 1;
      break;
    case "premios":
      premios_bt.classList.add("selected");
      inicio_bt.classList.remove("selected");
      projetos_bt.classList.remove("selected");
      agente1.innerText =
        "Ao longo de sua trajetória, a Possibility conquistou reconhecimento internacional por sua criatividade e dedicação à qualidade. O primeiro grande marco veio com o prêmio Best Gaming Company, recebido logo nos primeiros anos de atuação — um feito que destacou a empresa como uma das promessas mais inovadoras do cenário global de games.";
      agente2.innerText =
        "Com o passar dos anos, a Possibility consolidou seu nome ao vencer o torneio BGC (Best Game Creators) por 25 edições consecutivas, um recorde histórico que demonstrou a consistência e o talento dos 17 fundadores e de toda a equipe que cresceu junto com o estúdio. Esse feito se tornou símbolo da excelência técnica e artística da empresa.";
      agente3.innerText =
        "Mais recentemente, a Possibility recebeu o Innovation in Interactive Design Award, em reconhecimento à sua capacidade de unir narrativa, jogabilidade e emoção de forma única. Cada prêmio é visto não apenas como um troféu, mas como um reflexo da filosofia que move o estúdio desde o início: criar experiências que inspirem e conectem pessoas através do poder das ideias.";
      indiceAtual = 2;
      break;
  }
}

window.addEventListener("load", () => {
  iniciarTrocaAutomatica();
  sobre("inicio");
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // evita valores negativos
});

function screen(pos) {
  if (pos == "sobre") {
    const aboutSection = document.querySelector(".about");
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else if (pos == "inicio") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
