function createRainEl () {
    const rain = document.createElement('div')
    rain.classList.add('rain')
    rain.innerText = '💧'

    rain.style.left = `${Math.random() * 100}vw`
    rain.style.animationDuration = `${Math.random() * 1 + 3}s`

    document.body.appendChild(rain)

    setTimeout(() => rain.remove(), 3000)
}

setInterval(createRainEl, 10)