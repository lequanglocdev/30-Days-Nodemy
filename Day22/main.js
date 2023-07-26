const container = document.querySelector('.container')
const SQUARES = 199

function randomColor() {
    let charColor = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * 16)]
    }
    return color
}

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")

    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseenter', function (e) {
        let element = e.currentTarget
        let color = randomColor()
        element.style.background = color
        element.style.boxShadow = `0 0 10px ${color} , 0 0 100px ${color}`
    })
    square.addEventListener('mouseleave', function (e) {
        let element = e.currentTarget
        element.style.background = '#1d1d1d'
        element.style.boxShadow = '0 0 2px #000'
    })
}