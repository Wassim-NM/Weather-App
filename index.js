let weather = {
    apiKey: '8cf0c1bb295fe4d15e52341b90325c9d',
    fetchWeather: function (cityName) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + this.apiKey)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.displayWeather(data)
            })
    },
    displayWeather: function (data) {
        const city = document.querySelector('.city');
        city.innerHTML = 'Weather in ' + data.name;
        const weatherContainer = document.querySelector('.weather');
        weatherContainer.classList.remove('loading');
        const temperature = document.querySelector('.temp');
        temperature.innerHTML = data.main.temp + " °C";
        const describe = document.querySelector('.description');
        describe.textContent = data.weather[0].description;
        const imgIcon = document.querySelector('.icon');
        imgIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        const humid = document.querySelector('.humidity');
        humid.textContent = "Humidity: " + data.main.humidity + "%";
        const windSpeed = document.querySelector('.wind');
        windSpeed.textContent = "Wind speed: " + data.wind.speed + "Km/h";
    }
}

weather.fetchWeather('Beirut');