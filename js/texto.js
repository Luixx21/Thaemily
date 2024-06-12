export class FuncoesTexto {
    constructor() {
        this.apelidos = ["gatosa", "gostosa", "xuxu", "vida", , "amor"];
    }

    criaMarquee() {
        this.apelidos.forEach(element => {
            var apelido = document.createElement("marquee");
            
            var color = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
            while (color === "#000000") {
                color = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
            }
            
            apelido.setAttribute("direction", "up");
            apelido.textContent = element;
            apelido.style.fontSize = "20px";
            apelido.style.color = color;

            document.querySelector("main").appendChild(apelido);
        });
    }
}