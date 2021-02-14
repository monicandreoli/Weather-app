// import $ from 'jquery';
// import 'select2';

const input = document.querySelector("#input-address");
const button = document.querySelector("#submit");
const apiKey = '15bf20a08b1eb6cb4fe5c7be7d4d0a3e';
const weatherDisplay = document.querySelector("#weather");
const geoWeather = document.querySelector("#geoWeather");
const form = document.querySelector("form");


// code with API fetch on input
// -----------------------------

button.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      const weather = data.weather[0];
      weatherDisplay.innerHTML = "";
      const today = new Date().toLocaleDateString();
      weatherDisplay.insertAdjacentHTML("beforeend", `
      <div class="d-flex flex-column justify-content-center pt-5">
        <p class="text-center">Today ${today} in ${input.value} the weather is:</p>
            <div class="d-flex justify-content-center">
                <img src="http://openweathermap.org/img/w/${weather.icon}.png" alt=""/>
                <h5>${weather.description}</h5>
            </div>
      </div>`);
    });
});

// code with geolocation - getCurrentPosition()
// ------------------------------------------

/* geoWeather.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    console.log(data);
    const lat = data.coords.latitude;
    const lng = data.coords.longitude;
    console.log(lat);
    console.log(lng);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
      .then(response => response.json())
      .then((datas) => {
        console.log(datas)
        const weather = datas.weather[0];
        weatherDisplay.innerHTML = "";
        const today = new Date().toLocaleDateString();
        weatherDisplay.insertAdjacentHTML("beforeend", `
        <div class="d-flex flex-column justify-content-center pt-5">
          <p class="text-center">Today ${today} the weather is:</p>
            <div class="d-flex justify-content-center">
                <img src="http://openweathermap.org/img/w/${weather.icon}.png" alt=""/>
                <h5>${weather.description}</h5>
            </div>
        </div>`);
      });
  });
}); */

// code with jQuery Select
// -----------------------

// $('#city-input').select2();
// const cities = ["Amsterdam", "Bali", "Barcelona", "Belo Horizonte", "Berlin", "Bordeaux", "Brussels", "Buenos Aires", "Casablanca", "Chengdu", "Copenhagen", "Kyoto", "Lausanne", "Lille", "Lisbon", "London", "Lyon", "Madrid", "Marseille", "Melbourne", "Mexico", "Milan", "Montréal", "Nantes", "Oslo", "Paris", "Rio de Janeiro", "Rennes", "Rome", "São Paulo", "Seoul", "Shanghai", "Shenzhen", "Singapore", "Stockholm", "Tel Aviv", "Tokyo"];
// $('#city-input').select2({ data: cities, width: '100%' });
