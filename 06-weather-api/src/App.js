import { useState } from 'react';
import WeatherContainer from './Components/WeatherContainer';
import getWeather from './API/getWeather';

function App() {
  document.title = 'Testing Weather API';
  const [inputCity, setInputCity] = useState('');
  const [city, setCity] = useState('test');
  const [isCity, setIsCity] = useState(false);
  const [weather, setWeather] = useState('test');
  const [temperature, setTemperature] = useState('test');
  const [iconSrc, setIconSrc] = useState('test');
  const [description, setDescription] = useState('test');

  const inputHandler = (event) => {
    setInputCity(event.target.value);
  }

  // TODO 잘못된 도시 이름을 입력했을 때 어떻게 처리할지
  const buttonHandler = async () => {
    setInputCity('');
    const weatherData = await getWeather(inputCity);

    const {name, weather, temperature, icon, description} = weatherData;
    if (name) {
      setIsCity(true);
      setCity(name);
      setWeather(weather);
      setTemperature(temperature);
      setIconSrc(`http://openweathermap.org/img/wn/${icon}@2x.png`);
      setDescription(description);
    }
  }

  return (
    <div className="App">
      <h1>Testing Weather API</h1>
      <input
        type="text"
        placeholder="Search by a city"
        value={inputCity}
        onChange={inputHandler}
      />
      <button onClick={buttonHandler}>찾기</button>
      {isCity ?
        <WeatherContainer
          city={city}
          weather={weather}
          temperature={temperature}
          icon={iconSrc}
          description={description}
        />
        :
        <div>input real city</div>
      }
    </div>
  );
}

export default App;
