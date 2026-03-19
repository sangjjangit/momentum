
/**
 * openweathermap.org
 * menu: current & forecast
 * - current weather data
 */
const API_KEY = "406e9e249fffe727b5083f0bb8e6a7f0";

function onGeoOK (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position);
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // data.name, data.weather[0].main

      const weatherIcon = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const tempIcon = document.querySelector("#weather span:nth-child(3)");
      const temp = document.querySelector("#weather span:nth-child(4)");
      const locationIcon = document.querySelector("#weather span:nth-child(5)");
      const location = document.querySelector("#weather span:last-child");

      const main = data.weather[0].main;

      weather.innerText = main;
      temp.innerText = data.main.temp;
      location.innerText = data.name;

      if(main === "Clouds") {
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';

      } else if (main === "Rain") {
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';

      } else if (main === "Snow") {
        weatherIcon.innerHTML = '<i class="fa-regular fa-snowflake"></i>';

      } else if (main === "Snow") {
        weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';

      } else {
        weatherIcon.innerHTML = '<i class="fa-regular fa-sun"></i>';
      }
      tempIcon.innerHTML = '<i class="fa-solid fa-temperature-empty"></i>';
      locationIcon.innerHTML = '<i class="fa-solid fa-location-dot"></i>';

    });
}

function onGeoError () {
  alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);