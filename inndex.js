const searchbox = document.querySelector('.input-box');
const search = document.getElementById('search');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');
const weather_image = document.querySelector('.weather-image');
const location_not_found = document.querySelector('.notfound');
const weather_body = document.querySelector('.weatherbody');

async function checkweather(city) {
  const apikey = "738c6ebd5901fb2ba45f2be6326a716c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const weatherdata = await fetch(url).then(response => response.json());

  if (weatherdata.cod === '404') {
    location_not_found.style.display = "block";
    weather_body.style.display = "none";
    return;
  }

  location_not_found.style.display = "none";
  weather_body.style.display = "block";

  temprature.innerHTML = `${weatherdata.main.temp.toFixed(1)}°C`;
  description.innerHTML = `${weatherdata.weather[0].description}`;
  humidity.innerHTML = `${weatherdata.main.humidity} %`;
  windspeed.innerHTML = `${weatherdata.wind.speed} km/h`;

  switch (weatherdata.weather[0].main) {
    case 'Clouds':
      weather_image.src = "cloud-removebg-preview.png";
      break;
    case 'Clear':
      weather_image.src = "clear.png";
      break;
    case 'Rain':
      weather_image.src = "rain-removebg-preview-removebg-preview.png";
      break;
    case 'Mist':
      weather_image.src = "mist-removebg-preview.png";
      break;
    case 'Snow':
      weather_image.src = "mist-removebg-preview.png";
      break;
    default:
      weather_image.src = "mist-removebg-preview.png";
      break;
  }
}

search.addEventListener('click', () => {
  checkweather(searchbox.value);
});
