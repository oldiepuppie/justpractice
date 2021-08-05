import apiKey from './api-key';

const getWeather = async (cityName) => {
  if (!cityName) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  const weatherData = {
    name: jsonData.name,
    weather: jsonData.weather[0].main,
    temperature: Math.round(jsonData.main.temp - 273.15),
    icon: jsonData.weather[0].icon,
    description: jsonData.weather[0].description
  };

  return weatherData;
}

export default getWeather;