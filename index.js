fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=brazil")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
                                              )`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

    function renderTime() {
        const date = new Date()
        const currentTime = date.toLocaleTimeString("en-us", {timeStyle: "short"})
        document.getElementById("time").textContent = `${currentTime}`
    }
    
    setInterval(renderTime, 1000)

// API NOT WORKING
//fetch("https://api.exchangeratesapi.io/v1/latest?access_key=12bfa34be16d11b25bb5537957bc9c81")
//    .then(res => res.json())
//    .then(data => console.log(data))


    // HEIDELBERG

fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=49.398750&lon=8.672434&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.querySelector("#weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `
    })
    .catch(err => console.error(err))

    // FORTALEZA 
fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=-3.731862&lon=-38.526669&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.querySelector("#weather-fortal").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `
    })
    .catch(err => console.error(err))

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
                    <p>🎯: $${data.market_data.current_price.usd}</p>
                    <p>👆: $${data.market_data.high_24h.usd}</p>
                    <p>👇: $${data.market_data.low_24h.usd}</p>
                `
    })
    .catch(err => console.error(err))

