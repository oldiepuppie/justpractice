import { useState } from 'react';

const cityInput = ({ buttonHandler }) => {
  const [inputCity, setInputCity] = useState('');
  const inputHandler = (event) => {
    setInputCity(event.target.value);
  }

  return (
    <div className='cityInput'>
      <input
        type="text"
        placeholder="Search by a city"
        value={inputCity}
        onChange={inputHandler}
      />
      <button onClick={buttonHandler}>찾기</button>
    </div>
  );
}

export default cityInput;