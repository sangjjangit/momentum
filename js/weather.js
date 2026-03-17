
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

      const weather = document.querySelector("#weather span:first-child");
      const name = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      name.innerText = `${data.main.temp} / ${data.name}`;
    });
}

function onGeoError () {
  alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);