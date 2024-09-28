const APIKEY = "3a8d9c07726c09c8fa8706b4a6931697";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBtn = document.querySelector(".search-btn");
const city = document.querySelector(".city-input");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city_name) {
  const response = await fetch(apiUrl + city_name + `&appid=${APIKEY}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let weatherCondition = data.weather[0].main;
    if (weatherCondition == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherCondition == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherCondition == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(city.value);
});
