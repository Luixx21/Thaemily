export class Slide {
    constructor() {
        this.imagens = ['1', '2', '3', '4', '5'];
        this.index = 0;
        this.imgElement = document.querySelector("#img-ativa");
        this.adicionaEventos();
    }

    atualizarImagem() {
        this.imgElement.src = `img/slide/${this.imagens[this.index]}.jpeg`;
        this.imgElement.loading = 'lazy';
    }

    adicionaEventos() {
        document.querySelector("#anterior").addEventListener('click', () => {
            if (this.index > 0) {
                this.index -= 0.5;
                this.atualizarImagem();
            }
        });

        document.querySelector("#proximo").addEventListener('click', () => {
            if (this.index < this.imagens.length - 1) {
                this.index += 0.5;
                this.atualizarImagem();
            }
        });
    }
}
