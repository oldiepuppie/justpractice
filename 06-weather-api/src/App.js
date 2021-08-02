import { useState, useEffect } from 'react';
import Tester from './Components/Tester';
import getWeather from './API/getWeather';

function App() {
  document.title = 'Testing Weather API';
  const [inputCity, setInputCity] = useState('');
  const [city, setCity] = useState('city');
  const [temperature, setTemperature] = useState('temp');
  const [icon, setIcon] = useState('icon');
  const [description, setDescription] = useState('desc');

  const inputHandler = (event) => {
    setInputCity(event.target.value);
  }

  const buttonHandler = () => {
    // useEffect(() => {

    // }, [])
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
        temperature={temperature}
        icon={icon}
        description={description}
      />
    </div>
  );
}

export default App;
