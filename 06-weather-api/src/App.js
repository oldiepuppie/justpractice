import { useState, useEffect } from 'react';
// import Tester from './Components/Tester';
// import getWeather from './API/getWeather';

function App() {
  document.title = 'Testing Weather API';
  const [inputCity, setInputCity] = useState('');
  const [data, setData] = useState('');
  const inputHandler = (event) => {
    setInputCity(event.target.value);
  }

  const buttonHandler = () => {
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
      <div>{String(data)}</div>
    </div>
  );
}

export default App;
