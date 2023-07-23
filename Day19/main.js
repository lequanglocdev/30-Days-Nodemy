// https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a1b9c087e02eee3f00909c4c53f28ed7


const search = document.querySelector('.search')


function changeWeather(weather) {

    const content = document.querySelector('.content')
    const city = document.querySelector('.city')
    const country = document.querySelector('.country')
    const time = document.querySelector('.time')
    const value = document.querySelector('.value')
    const shorDes = document.querySelector('.short__desc')
    const visibilyty = document.querySelector('.visibilyty span')
    const wind = document.querySelector('.wind span')
    const sun = document.querySelector('.sun span')

    city.innerHTML = weather.name
    country.innerHTML = weather.sys.country
    time.innerHTML = new Date().toLocaleString()
    shorDes.innerHTML = weather.weather[0].main

    const temp = Math.round(weather.main.temp - 273, 15)
    value.innerHTML = temp

    temp >= 25
        ? (document.body.className = 'hot')
        : (document.body.className = 'cold')

    visibilyty.innerHTML = weather.visibility + '(m)'
    wind.innerHTML = weather.wind.speed + '(m/s)'
    sun.innerHTML = weather.clouds.all + '(%)'
}

search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        getWeather(e.target.value)
    }
})

async function getWeather(search) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a1b9c087e02eee3f00909c4c53f28ed7`
    let res = await fetch(url)
    let weather = await res.json()
    console.log(weather)
    changeWeather(weather)
}
getWeather('ha noi')