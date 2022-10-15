const qs = el => document.querySelector(el)
const cl = el => console.log(el)
const mario = qs('.mario')
const pipe = qs('.pipe')
const clouds = qs('.clouds')
const modal_container = qs('.modal-container')
const score_span = qs('.result')
const pontuacao_span = qs('.pontuacao')
let score = 0
let loop;
let scoreTime;

if (window.innerWidth <= 500){
    qs('.aviso').classList.remove('hide')
    document.addEventListener('click', () => {
        mario.classList.add('jump')
        
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500) 
    })
}


document.addEventListener('keydown', (e) => {
    if (e.code == 'Space'){
        mario.classList.add('jump')
        
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500) 
    }

    if (!modal_container.classList.contains('hide')){
        if (e.code == 'Enter'){
            restart()
        }
    }
})

function rodarJogo(){
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '')


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` 

        mario.src = 'imgs/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px` 

        modal_container.classList.remove('hide')

        clearInterval(loop)
        clearInterval(scoreTime)
        clearTimeout(btns_display)
    }
}

function contarPontos(){
    score++
    score_span.innerHTML = score
    pontuacao_span.innerHTML = score
}

loop = setInterval(rodarJogo, 1)
scoreTime = setInterval(contarPontos, 1500)


function pausar(){

    pipe.style.animationPlayState = 'paused'
    mario.style.animationPlayState = 'paused'
    clouds.style.animationPlayState = 'paused'

    clearInterval(loop)
    clearInterval(scoreTime)
    qs('.iniciar').classList.remove('hide')
}

function iniciar(){
    restart()
}


function restart(){
    location.reload()
}

function compatibilidade(){
    if (window.innerWidth <= 500){
        qs('.aviso').classList.remove('hide')
    } else{
        qs('.aviso').classList.add('hide')
    }
}