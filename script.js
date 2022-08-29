var header = document.getElementById('header')
var menu_hamburguer = document.getElementById('menu')

function abrirMenu(){
    if (header.style.display == 'flex'){
        header.style.display = 'none'
        menu_hamburguer.innerHTML = 'menu'
    } else {
        header.style.display = 'flex'
        menu_hamburguer.innerHTML = 'close'
    }
}