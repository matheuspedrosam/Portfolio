const qs = el => document.querySelector(el)
const qsAll = el => document.querySelectorAll(el)
const cl = el => console.log(el)

const audio = qs('#click_sound')
const btns = qsAll('.btn')
const sinais = qsAll('.sinal')
const equals = qs('.igual')
const clear = qs('.clear')
const negative = qs('.negative')
const percent = qs('.percent')

let display_result = qs('.result')

let firstValue = ''
let isFirstValue = false
let secondValue = ''
let isSecondValue = false
let sign = ''
let resultValue = 0

for (botoes of btns){
    botoes.addEventListener('click', (e) => {
        audio.currentTime = 0.06
        audio.play()
        let atr = e.target.innerHTML
        if (isFirstValue === false){
            getFirstValue(atr)
        }
        if (isSecondValue == false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el){
    if (Number(el)){
        display_result.innerHTML = ''
        firstValue += el
        display_result.innerHTML = firstValue
        firstValue = +firstValue
    }
}

function getSecondValue(el){
    if (Number(el)){
        if (firstValue != '' && sign != ''){
            secondValue += el
            display_result.innerHTML = secondValue
            secondValue = +secondValue
        }
    }
}

function getSign(){
    for (sinal of sinais) {
        sinal.addEventListener('click', (e) => {
            sign = e.target.innerHTML
            isFirstValue = true
        })
    }
}
getSign()

equals.addEventListener('click', () => {
    display_result.innerHTML = ''
    switch (sign){
    case '+':
        resultValue = firstValue + secondValue
        break
    case '-':
        resultValue = firstValue - secondValue
        break
    case 'x':
        resultValue = firstValue * secondValue
        break
    case '/':
        resultValue = firstValue / secondValue
        break
    }
    display_result.innerHTML = resultValue
    firstValue = resultValue
    secondValue = ''
    checkResultLength()
})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue)

    if (resultValue.length >= 8){
        resultValue = JSON.parse(resultValue)
        display_result.innerHTML = resultValue.toFixed(5)
    }
}

negative.addEventListener('click', () => {
    display_result.innerHTML = ''
    if (firstValue != ''){
        resultValue = -firstValue
        firstValue = resultValue
    }
    if (firstValue != '' && secondValue != '' && sign != ''){
        resultValue = -resultValue
    }

    display_result.innerHTML = resultValue
})


percent.addEventListener('click', () => {
    display_result.innerHTML = ''
    if (firstValue != ''){
        resultValue = firstValue / 100
        firstValue = resultValue
    }
    if (firstValue != '' && secondValue != '' && sign != ''){
        resultValue = resultValue / 100
    }

    display_result.innerHTML = resultValue
})


clear.addEventListener('click', () => {
    display_result.innerHTML = '0'
    firstValue = ''
    isFirstValue = false
    secondValue = ''
    isSecondValue = false
    sign = ''
    resultValue = 0
})