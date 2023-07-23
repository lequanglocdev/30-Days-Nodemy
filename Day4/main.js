const images = document.querySelectorAll(".wrapper .image img")
const gallery = document.querySelector(".gallery")
const galleryImg = document.querySelector(".gallery__inner img")
const btnClose = document.querySelector(".gallery .close")
const btnPrev = document.querySelector(".control.prev")
const btnNext = document.querySelector(".control.next")


let curentIndex = 0

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        curentIndex = index
        showGallery()
    })
})

function showGallery() {

    curentIndex == 0
        ? btnPrev.classList.add("hide")
        : btnPrev.classList.remove("hide")

    curentIndex == images.length - 1
        ? btnNext.classList.add("hide")
        : btnNext.classList.remove("hide")

    gallery.classList.add('show')
    galleryImg.src = images[curentIndex].src
}

btnPrev.addEventListener("click", () => {
    curentIndex != 0 ? curentIndex-- : undefined
    showGallery()

})

btnNext.addEventListener("click", () => {
    curentIndex != images.length - 1 ? curentIndex++ : undefined;
    showGallery();
})

btnClose.addEventListener('click', () => {
    gallery.classList.remove("show")
})