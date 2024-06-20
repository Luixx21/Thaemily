export class FuncoesTexto {
    constructor() {
        this.apelidos = ["gatosa", "gostosa", "xuxu", "vida", , "amor"];
    }
    
    getRandomPurple() {
        var red = Math.floor(Math.random() * 256); // valores de 0 a 255
        var blue = Math.floor(Math.random() * 256); // valores de 0 a 255
        var color = 'rgb(' + red + ', 0, ' + blue + ')';
        return color;
    }

    criaMarquee() {
        this.apelidos.forEach(element => {
            var apelido = document.createElement("marquee");
            
            var color = this.getRandomPurple();
            
            apelido.setAttribute("direction", "up");
            apelido.textContent = element;
            apelido.style.fontSize = "20px";
            apelido.style.color = color;

            document.querySelector("main").appendChild(apelido);
        });
    }
}