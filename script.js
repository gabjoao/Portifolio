//Efeito de reveal
window.sr = ScrollReveal({ reset: true });
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
}, 250)

class Projeto{
    constructor(titulo, img1, img2, p, info, link){
        this.titulo = titulo;
        this.img1 = img1;
        this.img2 = img2;
        this.p = p;
        this.info = info;
        this.link = link;
    }
}

var Projetos = [];
Projetos.push(new Projeto("Imobiliária Fachada", "media/projeto1.png", "media/projeto1-2.png" ,"O projeto consiste na utilização de classes e objetos em JavaScript para a criação de imóveis. Após o usuário cadastrar, o imóvel aparecerá na página e ficará salvo no localStorage toda vez que o usuário entrar novamente.", "out 2023 / Imobiliária Fachada / João Gabriel / out 2023", "https://gabjoao.github.io/Imobiliaria-Fachada/"));

Projetos.push(new Projeto("Serene", "media/projeto2.png", "media/projeto2-2.png", "Uma página de E-commerce de uma marca fictícia. A página possui quatro seções, além de informações específicas para cada produto com opções para compras.", "set 2023 / Serene / João Gabriel / set 2023", "https://gabjoao.github.io/landing-page-serene/"));

Projetos.push(new Projeto("Life is Strange", "media/projeto3.png", "media/projeto3-2.png", "Uma Landing Page informativa sobre a saga de jogos Life is Strange. Possui as informações principais do jogo, além de páginas específicas para cada um dos jogos e uma página de contato.", "set 2023 / Life is Strange / João Gabriel / set 2023", "https://gabjoao.github.io/Life-is-Strange-Page/"));

Projetos.push(new Projeto("MiauAu", "media/projeto4.png", "media/projeto4-2.png", "Uma página informativa sobre cachorros e gatos que consome APIs para informações de raças. Possui uma seção de dicas para adoção, além das páginas espefícas para os animais e uma galeria para cada.", "nov 2023 / MiauAu / João Gabriel / nov 2023", "https://gabjoao.github.io/MiauAu/"));

function infos(index){
   document.querySelector("#info").style.display = "flex";

    var titulo = document.querySelector(".info-titulo");
    titulo.textContent = Projetos[index].titulo;

    var img1 = document.querySelector(".info-img1");
    img1.src = Projetos[index].img1;

    var img2 = document.querySelector(".info-img2");
    img2.src = Projetos[index].img2;

    var p = document.querySelector(".info-p");
    p.textContent = Projetos[index].p;

    var infos = document.querySelector(".p-info");
    infos.textContent = Projetos[index].info;

    var btn = document.querySelector(".info-btn");
    btn.href = Projetos[index].link;

}

function fechar(){
    document.querySelector("#info").style.display = "none";
}