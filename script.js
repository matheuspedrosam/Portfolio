var header = document.getElementById('header')
var menu_hamburguer = document.getElementById('menu')
var imagem_menu = document.getElementById('img-menu')


function fecharMenuAoScrollar(){
    if (scrollY > 10){
        subirMenu()
        console.log("entrou")
    }
}

function abrirMenu(){
    if (header.style.display == 'flex'){
        window.removeEventListener("scroll", fecharMenuAoScrollar)
        header.style.display = 'none'
        header.style.height = 'auto'
        menu_hamburguer.innerHTML = 'menu'
        imagem_menu.style.display = 'inline-block'
    } else {
        window.addEventListener("scroll", fecharMenuAoScrollar)
        window.scrollTo(0, 0)
        imagem_menu.style.display = 'none'
        header.style.display = 'flex'
        header.style.height = 'calc(100vh - 55px)'
        menu_hamburguer.innerHTML = 'close'
    }
}

function ajeitarMenu(){
    if (window.innerWidth >= 800){
        imagem_menu.style.display = 'none'
        header.style.display = 'flex'
        header.style.height = 'auto'
        menu_hamburguer.innerHTML = 'close'
    } else{
        menu_hamburguer.innerHTML = 'menu'
        header.style.display = 'none'
        header.style.height = 'auto'
        imagem_menu.style.display = 'block'
    }
}


function subirMenu(){
    if (window.innerWidth <= 800){
        if (header.style.display == 'flex'){
            window.removeEventListener("scroll", fecharMenuAoScrollar)
            header.style.display = 'none'
            menu_hamburguer.innerHTML = 'menu'
            imagem_menu.style.display = 'block'
        } 
    }
}