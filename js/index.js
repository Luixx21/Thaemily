import { FuncoesTexto } from "../js/texto.js";
import { Slide } from "../js/slide.js";

var marquee = new FuncoesTexto();
var slide = new Slide();

marquee.criaMarquee();
slide.adicionaEventos();
slide.atualizarImagem();

let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlide() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// Define o intervalo de tempo para mudar os slides (em milissegundos)
const intervalo = 2000; // 5 segundos

// Inicia o intervalo
setInterval(showSlide, intervalo);