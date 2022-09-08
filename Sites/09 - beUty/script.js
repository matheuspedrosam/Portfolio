var header_container = document.querySelector('.header-container')
var menu_hamburguer = document.querySelector('span.material-icons')
var header_logo_1 = document.querySelector('#header-logo-1')
var header = document.querySelector('header')

function descerMenu(){
    if (header_container.style.display == 'none'){
        header_container.style.display = 'flex'
        menu_hamburguer.innerHTML = 'close'
        menu_hamburguer.style.textAlign = 'right'
        header_logo_1.style.display = 'none'
        header.style.display = 'block'
    } else{
        header_container.style.display = 'none'
        menu_hamburguer.innerHTML = 'menu'
        header_logo_1.style.display = 'block'
        header.style.display = 'flex'
        menu_hamburguer.style.textAlign = ''
    }
}

function ajeitarMenu(){
    if (window.innerWidth >= 865){
        header_container.style.display = 'flex'
        menu_hamburguer.style.display = 'none'
        header_logo_1.style.display = 'none'
        header.style.display = 'block'
    } else{
        header_container.style.display = 'none'
        menu_hamburguer.innerHTML = 'menu'
        header_logo_1.style.display = 'block'
        header.style.display = 'flex'
        menu_hamburguer.style.textAlign = ''
        menu_hamburguer.style.display = 'block'
    }
}