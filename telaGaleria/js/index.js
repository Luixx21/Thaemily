var imgs = document.querySelectorAll('img');

imgs.forEach(function(img) {
    img.addEventListener('click', function() {
        var div = document.querySelector('#principal'); 

        div.innerHTML = '<span id="fechar">X</span><h2>A mais linda</h2><img id=principal-item src="' + img.src + '">';
        
        document.querySelector('#fechar').addEventListener('click', function() {
            div.innerHTML = "";
        });
    });
});
