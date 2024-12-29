let weather = {
    "apikey": "09beb07be9e6160be29db76940f04c76",
    fetchweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city + "&appid=09beb07be9e6160be29db76940f04c76&units=imperial"
        ).then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp} = data.main;
        const { humidity } = data.main
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value)
    }
} ;

document.querySelector(".search button")
.addEventListener("click", function () {
weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchweather("Atlanta");