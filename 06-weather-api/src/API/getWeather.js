import { useEffect } from 'react';

const getWeather = (cityName) => {
  const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then
  })
}

export default getWeather;
// https://ko.reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call