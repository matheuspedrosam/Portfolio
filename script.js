var header = document.getElementById('header')
var menu_hamburguer = document.getElementById('menu')
var imagem_menu = document.getElementById('img-menu')

function abrirMenu(){
    if (header.style.display == 'flex'){
        header.style.display = 'none'
        menu_hamburguer.innerHTML = 'menu'
        imagem_menu.style.display = 'inline-block'
    } else {
        imagem_menu.style.display = 'none'
        header.style.display = 'flex'
        menu_hamburguer.innerHTML = 'close'
    }
}

function ajeitarMenu(){
    if (window.innerWidth >= 800){
        imagem_menu.style.display = 'none'
        header.style.display = 'flex'
        menu_hamburguer.innerHTML = 'close'
    } else{
        menu_hamburguer.innerHTML = 'menu'
        header.style.display = 'none'
        imagem_menu.style.display = 'block'
    }
}


function subirMenu(){
    if (window.innerWidth <= 800){
        if (header.style.display == 'flex'){
            header.style.display = 'none'
            menu_hamburguer.innerHTML = 'menu'
            imagem_menu.style.display = 'block'
        } 
    }
}

function alertaBotao(){
    window.alert('Ainda em Desenvolvimento...')
}