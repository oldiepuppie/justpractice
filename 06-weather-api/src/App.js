import { useState } from 'react';
import Tester from './Components/Tester';
import getWeather from './API/getWeather';

function App() {
  document.title = 'Testing Weather API';
  const [inputCity, setInputCity] = useState('');
  const [city, setCity] = useState('test');
  const [weather, setWeather] = useState('test');
  const [temperature, setTemperature] = useState('test');
  const [iconSrc, setIconSrc] = useState('test');
  const [description, setDescription] = useState('test');

  const inputHandler = (event) => {
    setInputCity(event.target.value);
  }

  const buttonHandler = async () => {
    const weatherData = await getWeather(inputCity);
    const {name, weather, temperature, icon, description} = weatherData;
    setCity(name);
    setWeather(weather);
    setTemperature(temperature);
    setIconSrc(icon);
    setDescription(description);
    setInputCity('');
  }

  return (
    <div className="App">
      <h1>Testing Weather API</h1>
      <input
        type="text"
        value={inputCity}
        onChange={inputHandler}
      />
      <button onClick={buttonHandler}>찾기</button>
      <Tester
        city={city}
        weather={weather}
        temperature={temperature}
        icon={iconSrc}
        description={description}
      />
    </div>
  );
}

export default App;
