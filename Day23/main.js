const player = document.querySelector('.player')
const video = document.querySelector('.player__video')
const progress = player.querySelector('.player__progress')
const progressBar = player.querySelector('.player__progress-filled')

const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const time = player.querySelector('.player__time')
const volum = player.querySelector('.player__volume input')


function togglePlayVideo() {
    if (video.paused) {
        video.play()
        toggle.innerHTML = "<i class='bx bx-pause'></i>"
    } else {
        video.pause()
        toggle.innerHTML = "<i class='bx bx-play'></i>"
    }
}

function formatTime(time) {
    let min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)
    let minValue, secValue

    minValue = min < 10 ? '0' + min : min
    secValue = min < 10 ? '0' + sec : sec

    let mediaTime = minValue + ":" + secValue
    return mediaTime
}

function handlePrgres() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percent}%`
    time.innerHTML = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}
skipButtons.forEach((button) =>
    button.addEventListener('click', function () {
        video.currentTime += +this.dataset.skip
    })
)

volum.addEventListener('change', function () {
    video.volume = this.value
})

video.addEventListener('click', togglePlayVideo)
toggle.addEventListener('click', togglePlayVideo)
video.addEventListener('timeupdate', handlePrgres)
progress.addEventListener('click', scrub)