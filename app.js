// document.getElementById('country-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     var country = document.getElementById('country').value;
//     getWeatherData(country);
// });

// function getWeatherData(country) {
//     var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=YOUR_API_KEY`;

//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => {
//             var temperature = Math.round(data.main.temp - 273.15);
//             var weatherData = `
//                 <h2>${data.name}, ${data.sys.country}</h2>
//                 <p>Température: ${temperature}°C</p>
//                 <p>Météo: ${data.weather[0].description}</p>
//             `;
//             document.getElementById('weather-data').innerHTML = weatherData;
//         })
//         .catch(error => {
//             console.error('Erreur:', error);
//             document.getElementById('weather-data').innerHTML = 'Impossible d\'obtenir les données météorologiques pour ce pays.';
//         });
// }

let apiKey = "7cc597f71832ee69af93d0ef455ba864"; 

const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("obtenir la météo");
const weatherResults = document.getElementById("weather-results");

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const weatherConditions = data.weather[0].description;

      weatherResults.style.display = "block";
      cityInput.value = "";

      document.getElementById("city-name").textContent = city;
      document.getElementById("temperature").textContent = `${temperature} °C`;
      document.getElementById("weather-conditions").textContent = weatherConditions;
    })
    .catch(error => {
      console.log(error);
    });
});