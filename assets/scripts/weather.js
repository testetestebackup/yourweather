const apiKey = '38fb7a2d12d1ac43b3fb3003eb974d70';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = cityInput.value; // Corrected line
    if (city.trim() !== ''){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Corrected line

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherHtml = `
              <h2>Weather in ${city}</h2>
              <p>Temperature: ${temperature}°C</p>
              <p>Description: ${description}</p>
            `;

            weatherInfo.innerHTML = weatherHtml;
        })
        // Exception treatment
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    }
}