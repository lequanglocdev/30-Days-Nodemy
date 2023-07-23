let listImage = document.querySelectorAll('.list__image div')
let btnNext = document.querySelector('.next')
let btnPrev = document.querySelector('.prev')
let imageWrap = document.querySelector('.image__wrap img')

let currentIndex = 0


function setCurrentInde(index) {
    currentIndex = index
    imageWrap.src = listImage[currentIndex].querySelector('img').src

    // remove
    listImage.forEach((item) => {
        item.classList.remove('active')
    })
    // add active
    listImage[currentIndex].classList.add('active')


}

listImage.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        setCurrentInde(index)
    })
})
btnNext.addEventListener('click', () => {
    if (currentIndex == listImage.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    setCurrentInde(currentIndex)
})
btnPrev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = listImage.length - 1
    }
    else currentIndex--
    setCurrentInde(currentIndex)
})