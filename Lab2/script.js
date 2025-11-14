const apiKey = '26bf58246520bcf6810ecf28c31c2da7'; 

document.getElementById('searchBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherCard = document.getElementById('weatherCard');
  const errorMsg = document.getElementById('error');

  weatherCard.classList.add('hidden');
  errorMsg.classList.add('hidden');

  try {
    // Step 1: Use the Geocoding API to find the coordinates for the city
    const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    if (!geoRes.ok) {
        throw new Error('Error fetching city data.');
    }
    const geoData = await geoRes.json();
    if (geoData.length === 0) {
        throw new Error('City not found. Please check the spelling.');
    }

    const { lat, lon } = geoData[0];

    // Step 2: Use the coordinates to fetch the weather data
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    if (!weatherRes.ok) {
        throw new Error('Could not retrieve weather for that location.');
    }

    const weatherData = await weatherRes.json();
    displayWeather(weatherData);

  } catch (error) {
    errorMsg.textContent = `Error: ${error.message}`;
    errorMsg.classList.remove('hidden');
  }
}

function displayWeather(data) {
  const weatherCard = document.getElementById('weatherCard');
  const { name, weather, main, wind } = data;

  const html = `
    <h2>${name}</h2>
    <p>${weather[0].description}</p>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" />
    <p>🌡️ ${main.temp} °C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>💨 Wind: ${wind.speed} m/s</p>
  `;

  weatherCard.innerHTML = html;
  weatherCard.classList.remove('hidden');
}