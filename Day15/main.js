const face = document.querySelector(".counter.facebook h1");
const youtube = document.querySelector(".counter.youtube h1");
const tiktok = document.querySelector(".counter.tiktok h1");

function counterUp(element, to) {
    let speed = 200
    let from = 0
    let step = to / speed
    const counter = setInterval(function () {
        from += step
        if (from > to) {
            clearInterval(counter)
            element.innerText = to
        } else {
            element.innerText = Math.ceil(from);
        }

    }, 1);
}
counterUp(face, 1000)
counterUp(youtube, 5000)
counterUp(tiktok, 9000)