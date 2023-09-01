const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = cityInput.value;
    if (city.trim() !== '') {
        // Simulated data (replace this with actual API response)
        const simulatedData = {
        main: {
            temp: 25
        },
        weather: [
            {
        description: 'Sunny'
            }
        ]
        };

        const temperature = simulatedData.main.temp;
        const description = simulatedData.weather[0].description;

        const weatherHtml = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        `;

        weatherInfo.innerHTML = weatherHtml;
    }
}