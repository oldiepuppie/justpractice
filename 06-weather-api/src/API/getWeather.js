import apiKey from './api-key';

const getWeather = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData;
}

export default getWeather;


// ref.
// https://ko.reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call
// https://github.com/oldiepuppie/apod/blob/master/src/hooks/useGetApod.js