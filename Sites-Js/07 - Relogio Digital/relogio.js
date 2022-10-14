const hora = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

setInterval(()=>{
    let agora = new Date()
    let atHora = agora.getHours()
    let atMinuto = agora.getMinutes()
    let atSegundo = agora.getSeconds()
    atHora < 10 ? hora.innerHTML = '0' + atHora : hora.innerHTML = atHora
    atMinuto < 10 ? minutos.innerHTML = '0' + atMinuto : minutos.innerHTML = atMinuto
    atSegundo < 10 ? segundos.innerHTML = '0' + atSegundo : segundos.innerHTML = atSegundo
}, 1000)