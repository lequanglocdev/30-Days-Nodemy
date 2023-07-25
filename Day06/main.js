const box = document.querySelector('.box')
const ikey = document.querySelector('.card.key p:last-child')
const ilocation = document.querySelector('.card.location p:last-child')
const iwhich = document.querySelector('.card.which p:last-child')
const icode = document.querySelector('.card.code p:last-child')

document.addEventListener('keydown', (e) => {
    let keyName = e.keyCode === 32 ? 'Space' : e.key

    document.querySelector('.result').innerText = e.which

    ikey.innerText = keyName
    ilocation.innerText = e.location
    iwhich.innerText = e.which
    icode.innerText = e.code

    document.querySelector('.open').classList.add('hide')
    box.classList.remove('hide')
})