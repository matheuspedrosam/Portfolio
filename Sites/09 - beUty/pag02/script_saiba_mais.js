const header_container = document.querySelector('.header-container')
const menu_hamburguer = document.querySelector('span.material-icons')
const header_logo_1 = document.querySelector('#header-logo-1')
const header = document.querySelector('header')

const container_conteudo = document.querySelector('.conteudo-container')
const img = container_conteudo.children[0].children[0]
const container_text = container_conteudo.children[1]

const btns_container = document.querySelector('.btns-container')

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


btns_container.addEventListener('click', ({target})=>{
    const botao_alvo = target.id
    if (botao_alvo){
        const botoes = btns_container.children
        for (botao of botoes){
            botao.classList.remove('btns-conteudo-active')
        }
        target.classList.add('btns-conteudo-active')
        switch(botao_alvo){
            case 'email':
                alterarElementosRecursos('../imagens/email-conteudo.png', '100%', 'Campanhas de Marketing')
                container_text.innerHTML += `
                <p>
                    Atraia clientes com campanhas de SMS e e-mail. Marketing com resultados, elaborado para fidelizar o seu público. Automatize a comunicação sem perder a exclusividade.
                </p>`
                break
            case 'apps':
                alterarElementosRecursos('../imagens/apps-servico.png', '61%', 'Visibilidade em apps de serviço')
                container_text.innerHTML += `
                <p>
                    Esteja onde seu consumidor está: em  Apps como Livelo e PicPay, além do BeUtyApp. Todos os serviços que seu espaço oferece disponíveis em um clique. Cientes online e prontos para agendar.
                </p>`
                break
            case 'redes':
                alterarElementosRecursos('../imagens/redes-sociais.png', '53%', 'Agendamento por redes sociais')
                container_text.innerHTML += `
                <p>
                    Deixe acessível a agenda do seu espaço no Instagram e Facebook. Conecte-se ao seu cliente com facilidade. Estratégias multiplataforma para atrair agendamento. Conquiste presença online para vender mais.
                </p>`
            break
        }
    }
})

function alterarElementosRecursos(linkIMG, tamanho, h2){
    img.setAttribute('src', `${linkIMG}`)
    img.style.width = tamanho
    container_text.innerHTML = `
    <h2>${h2}</h2>`
}