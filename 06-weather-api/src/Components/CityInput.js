import { useState } from 'react';
import styled from 'styled-components';

const CityInputBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCityInput = styled.input`
  width: 80vw;
`;

const CitySearchButton = styled.button`
  width: 15vw;
`;

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
      <CityInputBody>
        <StyledCityInput
          type="text"
          placeholder="Search by a city"
          value={inputCity}
          onChange={inputHandler}
        />
        <CitySearchButton onClick={onClickHandler}>
          찾기
        </CitySearchButton>
      </CityInputBody>
    </div>
  );
}

export default CityInput;