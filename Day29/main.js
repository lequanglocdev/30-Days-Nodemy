const canvas = document.getElementById('canvas')
const colorEl = document.getElementById('color')
const eraserEl = document.getElementById('eraser')
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const sizeEl = document.getElementById('size')
const clearEl = document.getElementById('clear')
const content = canvas.getContext('2d')

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x, y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    content.beginPath()
    content.arc(x, y, size, 0, Math.PI * 2)
    content.fillStyle = color
    content.fill()
}
function drawLine(x1, y1, x2, y2) {
    content.beginPath()
    content.moveTo(x1, y1)
    content.lineTo(x2, y2)
    content.strokeStyle = color
    content.lineWidth = size * 2
    content.stroke()
}
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => (color = e.target.value))

clearEl.addEventListener('click', () =>
    content.clearRect(0, 0, canvas.width, canvas.height)
)

eraserEl.addEventListener('click', () => {
    color = '#fff'
})

saveEl.addEventListener('click', (e) => {
    const imageURI = canvas.toDataURL('image/png')
    e.currentTarget.href = imageURI
})
