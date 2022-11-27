const qs = el => document.querySelector(el)
const cl = el => console.log(el)

const modal = qs('.modal')
const modal_login = qs('.modal-container-login')
const modal_cadastro = qs('.modal-container-cadastro')
const btn_cadastro = qs('#cadastro')
const btn_login = qs('#login_btn')

function login(e){
    e.preventDefault()

    modal_login.classList.remove('hide')
    modal_cadastro.classList.add('hide')
    modal.classList.remove('hide')
    document.body.classList.add('overflow')
}

function fechar_modal(){
    modal.classList.add('hide')
    document.body.classList.remove('overflow')
}

btn_cadastro.addEventListener('click', () => {
    modal_cadastro.classList.remove('hide')
    modal_login.classList.add('hide')
})

btn_login.addEventListener('click', () => {
    modal_login.classList.remove('hide')
    modal_cadastro.classList.add('hide')
})

// Verificações

// Login
const senha = qs('#senha')
// Cadastro
const senha2 = qs('#senha2')
const confirmarsenha = qs('#confirmarsenha')
const email = qs('#email')

function verificar_login(){
    if (senha.value.length < 7){
        window.alert('A senha precisa ter no mínimo 7 caracteres')
    } else{
        window.alert('Login efetuado com sucesso')
        fechar_modal()
    }
}

function verificar_cadastro(){
    if (senha2.value.length < 7){
        window.alert('A senha precisa ter no mínimo 7 caracteres')
    } else if (senha2.value !== confirmarsenha.value){
        window.alert('As senhas não conferem')
    } else {
        window.alert('Cadastro efetuado com sucesso')
        fechar_modal()
    }
}