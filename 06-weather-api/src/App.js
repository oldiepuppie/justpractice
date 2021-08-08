import { useState } from 'react';
import styled from 'styled-components';
import getWeather from './API/getWeather';
import WeatherContainer from './Components/WeatherContainer';
import CityInput from './Components/CityInput';

const StyledAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  document.title = 'Testing Weather API';
  const [isData, setIsData] = useState(false);
  const [city, setCity] = useState('test');
  const [weather, setWeather] = useState('test');
  const [temperature, setTemperature] = useState('test');
  const [iconSrc, setIconSrc] = useState('test');
  const [description, setDescription] = useState('test');

  // TODO 잘못된 도시 이름을 입력했을 때 어떻게 처리할지
  const buttonHandler = async (inputCity) => {
    const weatherData = await getWeather(inputCity);
    const {name, weather, temperature, icon, description} = weatherData;

    setIsData(true);
    setCity(name);
    setWeather(weather);
    setTemperature(temperature);
    setIconSrc(`http://openweathermap.org/img/wn/${icon}@2x.png`);
    setDescription(description);
  }

  return (
    <div className="App">
      <h1>Testing Weather API</h1>
        <StyledAppDiv>
          <CityInput buttonHandler={buttonHandler} />
          {isData? 
          <WeatherContainer
            city={city}
            weather={weather}
            temperature={temperature}
            icon={iconSrc}
            description={description}
          />
          :
          <div>check your input</div>
          }
        </StyledAppDiv>
    </div>
  );
}

export default App;
