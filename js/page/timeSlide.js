export class SlideTime {
    constructor() {
        this.currentSlide = 0;
    }

    showSlide() {
        const slides = document.querySelectorAll('.slides');

        slides.forEach(slide => {
            slide.style.display = 'none';  // Oculta todos os slides inicialmente
        });

        this.currentSlide = (this.currentSlide + 1) % slides.length;  // Calcula o próximo slide a exibir
        slides[this.currentSlide].style.display = 'block';  // Exibe o próximo slide
    }
}
