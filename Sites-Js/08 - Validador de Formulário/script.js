const qs = el => document.querySelector(el)
const cl = el => console.log(el)
const esconderElemento = el => el.classList.add('hide')
const mostrarElemento = el => el.classList.remove('hide')
const modal_container = qs('.modal-container')

const inputNameContainer = qs('.nome-container')
const inputEmailContainer = qs('.email-container')
const inputSenhaContainer = qs('.senha-container')
const inputConfirmarSenhaContainer = qs('.confirmar-senha-container')
const arrInputsContainers = [inputNameContainer, inputEmailContainer, inputSenhaContainer, inputConfirmarSenhaContainer]

let nomeValido = false
let emailValido = false
let senhaValido = false
let confirmarSenhaValido = false

function EnviarForm(e){
    e.preventDefault()
    qs('#btn-enviar').style.boxShadow = 'none'
    validarInputs()
    if (nomeValido && emailValido && senhaValido && confirmarSenhaValido){
        mostrarElemento(modal_container)
    }
}

modal_container.addEventListener('click', () => {
    esconderElemento(modal_container)
})


function validarInputs(){
    let InputName = qs('#nome')
    let InputEmail = qs('#email')
    let InputSenha = qs('#senha')
    let InputConfirmarSenha = qs('#confirmar-senha')

    if (InputName.value === ''){
        setFailFor(0, 'Por favor insira um nome')
    } else{
        setSucessFor(0)
    }

    if (InputEmail.value === ''){
        setFailFor(1, 'Por favor insira um email')
    } else if(!ValidateEmail(InputEmail.value)) {
        setFailFor(1, 'Por favor insira um email válido!')
    } else{
        setSucessFor(1)
    }

    if (InputSenha.value === ''){
        setFailFor(2, 'Por favor insira uma senha')
    } else if(InputSenha.value.length < 7){
        setFailFor(2, 'A senha tem que ter no mínimo 7 caracteres')
    } else{
        setSucessFor(2)
    }

    if (InputConfirmarSenha.value === ''){
        setFailFor(3, 'Por favor insira a confirmação de senha')
    } else if(InputConfirmarSenha.value != InputSenha.value){
        setFailFor(3, 'As senhas não conferem')
    } else{
        setSucessFor(3)
    }
}


function setSucessFor(opcao){
    esconderElemento(arrInputsContainers[opcao].children[4])
    arrInputsContainers[opcao].children[2].classList.remove('fail')
    arrInputsContainers[opcao].children[2].classList.add('sucess')
    arrInputsContainers[opcao].children[3].innerHTML = 'check_circle'
    arrInputsContainers[opcao].children[3].style.color = '#2ecc71'
    mostrarElemento(arrInputsContainers[opcao].children[3])
    switch (opcao){
    case 0:
        nomeValido = true
        break
    case 1:
        emailValido = true
        break
    case 2:
        senhaValido = true
        break
    case 3:
        confirmarSenhaValido = true
        break
    }
}

function setFailFor(opcao, msg){
    arrInputsContainers[opcao].children[4].innerHTML = msg
    mostrarElemento(arrInputsContainers[opcao].children[4])
    arrInputsContainers[opcao].children[2].classList.remove('sucess')
    arrInputsContainers[opcao].children[2].classList.add('fail')
    arrInputsContainers[opcao].children[3].innerHTML = 'info'
    arrInputsContainers[opcao].children[3].style.color = '#e74c3c'
    mostrarElemento(arrInputsContainers[opcao].children[3])
    switch (opcao){
    case 0:
        nomeValido = false
        break
    case 1:
        emailValido = false
        break
    case 2:
        senhaValido = false
        break
    case 3:
        confirmarSenhaValido = false
        break
    }
}


function ValidateEmail(email)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}