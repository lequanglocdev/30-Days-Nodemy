let imageList = document.querySelectorAll('.image img')
let mirior = document.querySelector(".mirior")

imageList.forEach((img) => {
    img.addEventListener('mousemove', function (e) {
        mirior.classList.remove('hide')

        mirior.style.top = e.clientY + 'px'
        mirior.style.left = e.clientX + 'px'
        mirior.style.backgroundSize = `1000px 1000px`

        var percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100
        var percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100

        mirior.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`

        var imageSource = e.target.getAttribute('src')
        mirior.style.backgroundImage = `url(${imageSource})`
    })

    img.addEventListener('mouseleave', function (e) {
        mirior.classList.add('hide')
    })
})