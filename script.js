//Efeito de reveal
window.sr = ScrollReveal({ reset: false });
sr.reveal(".projeto", { duration: 1000 });
sr.reveal(".infos1", { duration: 1000 });
sr.reveal(".infos2", { duration: 1000 });

//Mudar a cor das infos da header
var header = document.getElementById("header")

setInterval(function(){
    var home = document.getElementById("home").getBoundingClientRect();
    var projetos = document.getElementById("projetos").getBoundingClientRect();
    var sobre = document.getElementById("sobre").getBoundingClientRect();
    var contato = document.getElementById("contato").getBoundingClientRect();

    var info = header.querySelectorAll("p")
    if(home.y >= -454){
        for(var x = 0; x < info.length; x++){
            info[x].textContent = "HOME"
            info[x].className = "p-preto"
        }
    }
    else if(projetos.y <= 186 && projetos.y > -3194){
        for(var x = 0; x < info.length; x++){
            info[x].textContent = "PROJETOS"
            info[0].className = "p-preto"
            info[x].className = "p-branco"
        }
        
    }
    else if(sobre.y <= 126 && sobre.y >= -1493){
        for(var x = 0; x < info.length; x++){
            info[x].textContent = "SOBRE"
            info[x].className = "p-preto"
        }
    }
    else if(contato.y <= 32){
        for(var x = 0; x < info.length; x++){
            info[x].textContent = "CONTATO"
            info[x].className = "p-branco"
        }
    }
//500
}, 500)