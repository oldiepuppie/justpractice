import apiKey from './api-key';

const getWeather = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const rawData = await fetch(url);
  const jsonData = await rawData.json();

  if (jsonData.message === 'city not found') {
    return 'city not found';
  }

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