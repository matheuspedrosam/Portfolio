var change_theme = document.getElementById('change-theme')
var ball = document.getElementById('ball')
var caixa_login = document.querySelector('.login')
var titles = document.querySelectorAll('#img-container > h1, .login > h2')
var tema = document.querySelector('.theme')

function trocar_tema(){

    if (change_theme.style.justifyContent == 'flex-end'){
        change_theme.style.justifyContent = 'flex-start'
        change_theme.style.backgroundColor = 'white'
        ball.style.backgroundColor = '#524473'
        document.body.classList.add('body')
        caixa_login.classList.add('login2')
        for (titulos of titles){
            titulos.classList.add('texto')
        }
        tema.classList.add('theme2')
    } else{
        change_theme.style.justifyContent = 'flex-end'
        change_theme.style.backgroundColor = '#524473'
        ball.style.backgroundColor = 'white'
        document.body.classList.remove('body')
        caixa_login.classList.remove('login2')
        for (titulos of titles){
            titulos.classList.remove('texto')
        }
        tema.classList.remove('theme2')
    }
}