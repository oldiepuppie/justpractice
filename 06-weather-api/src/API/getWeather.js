// import { useEffect } from 'react';

const getWeather = (cityName) => {
  const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`;

  const data = fetch(url)
    .then(res => {res.json()})
    .then(json => {console.log(json)});
  // const data = await JSON.parse(response);
  // stateDataCallback(response.weather);
  console.log(data);
  return data;
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