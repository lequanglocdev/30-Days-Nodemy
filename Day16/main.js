const box = document.querySelectorAll('.box')
const target = document.querySelectorAll('.target')

var currentIndex = null

target.forEach(targetItem => {
    targetItem.addEventListener('dragstart', function (e) {
        this.classList.add('dragging')
        currentIndex = this
    })
    targetItem.addEventListener('dragend', function (e) {
        this.classList.remove('dragging')
    })
})

box.forEach(item => {
    item.addEventListener('dragover', function (e) {
        e.preventDefault()

    })
    item.addEventListener('drop', function (e) {
        if (!item.querySelector('.target')) {
            this.appendChild(currentIndex)

        }
    })
})