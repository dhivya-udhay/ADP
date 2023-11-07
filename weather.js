function renderWeather(weather) {
    var results_container = document.querySelector("#weather-reports");
    
    let city = document.createElement("h2");
    city.textContent = weather.name;
    results_container.append(city);

    let temp = document.createElement("p");
    temp.textContent = "Temp : " + weather.main.temp + "F";
    results_container.append(temp);

    let humidity = document.createElement("p");
    humidity.textContent = "Humidity : " + weather.main.humidity + "%";;
    results_container.append(humidity);
  
    let wind = document.createElement("p");
    wind.textContent = "wind : " + weather.wind.speed + " mph" + weather.wind.deg + "deg";
    results_container.append(wind);

    let weather_details = weather.weather[0];
    if(weather_details && weather_details.description) {
        let description = document.createElement("p");
        description.textContent = weather_details.description;
        results_container.append(description);
    }

}

function readWeather() {

    let city = document.getElementById("city").value;
    let url="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9aba6925095ea4acfe119159be9efd7";
    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data));
}

//readWeather("Coimbatore");

//https://api.openweathermap.org/data/2.5/weather?q=London&appid=b9aba6925095ea4acfe119159be9efd7