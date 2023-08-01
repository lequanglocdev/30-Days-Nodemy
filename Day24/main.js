const form = document.querySelector('form')
const input = document.querySelector('form input')
const lowerCase = document.querySelector('.lowerCase')
const upperCase = document.querySelector('.upperCase')
const number = document.querySelector('.number')
const symbol = document.querySelector('.symbol')
const characters = document.querySelector('.characters')

const iconEye = document.querySelector('.icon-eye')

iconEye.addEventListener('click', (e) => {
    e.target.classList.toggle('show')
    input.type == 'password' ? (input.type = 'text') : (input.type = 'password')
})
input.addEventListener('input', (e) => {
    const value = e.target.value
    value.search(/[a-z]/) >= 0
        ? lowerCase.classList.add('check')
        : lowerCase.classList.remove('check')
    value.search(/[A-Z]/) >= 0
        ? upperCase.classList.add('check')
        : upperCase.classList.remove('check')

    value.search(/[0-9]/) >= 0
        ? number.classList.add('check')
        : number.classList.remove('check')

    value.search(/\W/) >= 0
        ? symbol.classList.add('check')
        : symbol.classList.remove('check')

    value.length >= 8
        ? characters.add('check')
        : characters.remove('valid')
})
