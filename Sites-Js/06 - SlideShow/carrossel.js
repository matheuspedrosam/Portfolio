const container_itens = document.querySelector('.container-itens')
const next_button = document.querySelector('#next')
const prev_button = document.querySelector('#prev')
const container_radio_buttons = document.querySelector('.radio-buttons')


const imagens = [
    {'id': '1', 'url': "img/chrono.jpg"},
    {'id': '2', 'url': "img/inuyasha.jpg"},
    {'id': '3', 'url': "img/tenchi.jpg"},
    {'id': '4', 'url': "img/tenjhotenge.jpg"},
    {'id': '5', 'url': "img/yuyuhakusho.jpg"},
    {'id': '6', 'url': "img/ippo.png"}
]

imagens.forEach((imgs)=>{
    container_itens.innerHTML += `
    <div class='itens'>
        <img src=${imgs.url}>
    </div>`
})

let itens = document.querySelectorAll('.itens')

next_button.addEventListener('click', proximoSlide)


prev_button.addEventListener('click', ()=>{
    clearInterval(interval)
    container_itens.appendChild(itens[0])
    itens = document.querySelectorAll('.itens')
    soma--
    if (soma == -1){
        soma = 5
    }
    trocarRadioInput()
    interval = setInterval(proximoSlide, 2000)
})

function proximoSlide(){
    clearInterval(interval)
    container_itens.insertBefore(itens[itens.length - 1], itens[0])
    itens = document.querySelectorAll('.itens')
    soma++
    if (soma == 6){
        soma = 0
    }
    trocarRadioInput()
    interval = setInterval(proximoSlide, 2000)
}

let interval = setInterval(proximoSlide, 2000)

let soma = 0
function trocarRadioInput(){
    let bolinhas = document.querySelectorAll('.bolinhas')
    switch (soma){
    case 0:
        limparSelect()
        bolinhas[0].classList.add('selected')
        break
    case 1:
        limparSelect()
        bolinhas[1].classList.add('selected')
        break
    case 2:
        limparSelect()
        bolinhas[2].classList.add('selected')
        break
    case 3:
        limparSelect()
        bolinhas[3].classList.add('selected')
        break
    case 4:
        limparSelect()
        bolinhas[4].classList.add('selected')
        break
    case 5:
        limparSelect()
        bolinhas[5].classList.add('selected')
        break
    }
}

function limparSelect(){
    let bolinhas = document.querySelectorAll('.bolinhas')
    bolinhas.forEach((elements)=>{
        elements.classList.remove('selected')
    })
}