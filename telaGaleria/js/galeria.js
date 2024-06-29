var imgs = document.querySelectorAll('img');

for (var i = 1; i <= 12; i++) {
    var img = document.createElement("img");

    img.classList.add("escolha-item");
    img.src = "../img/slide/" + i + ".jpeg";
    adicionaEvento(img);

    document.querySelector("#escolha").appendChild(img)
}

function adicionaEvento(img) {
    img.addEventListener('click', function() {
        var div = document.querySelector('#principal'); 

        div.innerHTML = '<span id="fechar">X</span><h2>A mais linda</h2><img id=principal-item src="' + img.src + '">';
        
        document.querySelector('#fechar').addEventListener('click', function() {
            div.innerHTML = "";
        });
    });
};