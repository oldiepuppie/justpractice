import { useState } from 'react';

const CityInput = ({ buttonHandler }) => {
  const [inputCity, setInputCity] = useState('');
  const inputHandler = (event) => {
    setInputCity(event.target.value);
  }
  const onClickHandler = () => {
    buttonHandler(inputCity);
  }

  return (
    <div className='cityInput'>
      <input
        type="text"
        placeholder="Search by a city"
        value={inputCity}
        onChange={inputHandler}
      />
      <button onClick={onClickHandler}>찾기</button>
    </div>
  );
}

export default CityInput;