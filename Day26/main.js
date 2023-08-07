const cardImg = document.querySelector('.card__img')
const cardInfoH2 = document.querySelector('.card__info h2')
const cardInfoP = document.querySelector('.card__info p')
const cardBtn = document.querySelector('.card__info button')

setTimeout(() => {
    cardImg.innerHTML = ' <img src="./photo-1637420425895-97a239041d53.avif" alt="">'
    cardInfoH2.innerHTML = 'Nodemy'
    cardInfoP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis labore sint quibusdam iure reprehenderit, doloremque atque impedit harum eaque reiciendis numquam dolor adipisci odio consequuntur nobis nemo pariatur excepturi!'
    cardBtn.innerHTML = 'Read More'

    document.querySelectorAll('.loading').forEach(item => {
        item.classList.remove('loading')
    })
}, 4000)