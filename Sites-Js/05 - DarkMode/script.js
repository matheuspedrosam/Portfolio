checarTema()

document.querySelector('label').addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark')
    } else{
        localStorage.setItem('theme', 'light')
    }
})

function checarTema(){
    let tema = localStorage.getItem('theme')
    if (tema == 'dark'){
        document.body.classList.add('dark')
    } else{
        document.body.classList.remove('dark')
    }
}