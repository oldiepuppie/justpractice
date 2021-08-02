// import { useEffect } from 'react';

const getWeather = async (cityName, stateLoadingCallback,stateDataCallback) => {
  const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`;
  stateLoadingCallback(true);
  
  const response = await fetch(url);
  const data = await response.json();

  stateLoadingCallback(false);
  stateDataCallback(data);

  // if (!cityName) return;
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then
  // })
}

export default getWeather;


// ref.
// https://ko.reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call
// https://github.com/oldiepuppie/apod/blob/master/src/hooks/useGetApod.js