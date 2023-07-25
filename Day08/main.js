const body = document.querySelector('body')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range__bar')
const title = document.querySelector('h1')

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`
    rangeBar.querySelector('span').innerText = `${percent}%`
    body.style.backgroundColor = `rgba(0,0,0, ${percent / 100})`
    if (percent > 50) {
        title.style.color = `#fff`

    }
    else {
        title.style.color = `#000`
    }
}

setRangeBar(40)

range.addEventListener('mousemove', function (e) {
    const proces = e.pageX - this.offsetLeft
    let percent = (proces / this.offsetWidth) * 100
    percent = Math.ceil(percent)
    setRangeBar(percent)
})