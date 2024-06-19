import { FuncoesTexto } from "./components/texto.js";
import { LinkFuncoes } from "./components/link.js";
import { SlideTime } from "./page/timeSlide.js";

const marquee = new FuncoesTexto();
marquee.criaMarquee();

const link = new LinkFuncoes();
link.clickLink();

if (document.location.href.includes("index")) {
  const slide = new SlideTime();

  // Define o intervalo de tempo para mudar os slides (em milissegundos)
  var intervalo = 2000; // 2 segundos

  // Use setInterval corretamente
  setInterval(() => {
      slide.showSlide(); // Chama slide.showSlide() a cada intervalo
  }, intervalo);
}
