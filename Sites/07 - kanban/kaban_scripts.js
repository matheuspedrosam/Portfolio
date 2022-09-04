
var kaban = document.querySelector('#kaban')
var menu_hamburguer = document.getElementById('platform-launch-menu')

function hiddenSidebar(){
    kaban.style.display = 'none'
    menu_hamburguer.style.display = 'block'
}

function showSidebar(){
    kaban.style.display = 'flex'
    menu_hamburguer.style.display = 'none'
}

// Change Theme function ->

var body = document.querySelector('body')

var kaban_h1 = document.querySelector('#kaban h1')
var div_theme = document.querySelector('#theme')
var div_side_bar_hidden = document.getElementById('side-bar-hidden')

var platform_launcher = document.getElementById('platform-launch')
var all_tasks_itens = document.querySelectorAll('.tasks-itens')
var all_tasks_itens_titles = document.querySelectorAll('.tasks-itens > h3')

var header = document.querySelector('header')
var header_h1 = document.querySelector('header h1')
var all_header_i = document.querySelectorAll('header .material-symbols-outlined')



function change_theme(){
    var ball = document.getElementById('ball')
    var spacearound = document.getElementById('change-theme')
    if (spacearound.style.justifyContent == 'flex-end'){

        // Only the ball and cointainer

        spacearound.style.justifyContent = 'flex-start'
        spacearound.style.backgroundColor = 'white'
        ball.style.backgroundColor = '#7e6ce6'
        
        // All elements - kaban
        
        body.style.backgroundColor = '#f4f7fe'
        kaban.style.backgroundColor = 'white'
        kaban_h1.style.color = 'black'
        div_theme.style.backgroundColor = '#f4f7fe'
        div_theme.style.color = 'black'
        div_side_bar_hidden.style.color = 'black'

        // All elements - Platform_Launcher

        for (tasks_itens of all_tasks_itens){
            tasks_itens.style.backgroundColor = 'white'
        }
        for (tasks_itens_titles of all_tasks_itens_titles){
            tasks_itens_titles.style.color = 'black'
        }
        header.style.backgroundColor = 'white'
        header_h1.style.color = 'black'
        for (header_i of all_header_i){
            header_i.style.color = 'black'
        }
    } else {
        spacearound.style.justifyContent = 'flex-end'
        spacearound.style.backgroundColor = '#7e6ce6'
        ball.style.backgroundColor = 'white'

        // All elements - kaban
        
        body.style.backgroundColor = '#21212d'
        kaban.style.backgroundColor = '#2c2c38'
        kaban_h1.style.color = 'white'
        div_theme.style.backgroundColor = '#21212d'
        div_theme.style.color = 'white'
        div_side_bar_hidden.style.color = '#5d5f6c'

        // All elements - Platform_Launcher

        for (tasks_itens of all_tasks_itens){
            tasks_itens.style.backgroundColor = '#2c2c38'
        }
        for (tasks_itens_titles of all_tasks_itens_titles){
            tasks_itens_titles.style.color = 'white'
        }
        header.style.backgroundColor = '#2c2c38'
        header_h1.style.color = 'white'
        for (header_i of all_header_i){
            header_i.style.color = 'white'
        } 
    }
}
