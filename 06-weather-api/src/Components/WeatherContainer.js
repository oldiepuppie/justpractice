import styled from 'styled-components';

const WeatherContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  img {
    width: 50vw;
    height: 50vw
  }

  .description {
    font-size: 1.2rem;
  }
`;

const WeatherContainer = ({ city, weather, temperature, icon, description }) => {
  return (
    <div className='weatherContainer'>
      <WeatherContainerBox className='weatherContainerBox'>
        <div className='city'>{city}</div>
        <div className='weather'>{weather}</div>
        <div className='temperature'>{temperature}°C</div>
        <img 
          className='icon'
          src={icon}
          alt='weather icon'
        />
        <div className='description'>{description}</div>
      </WeatherContainerBox>
    </div>
  );
}

export default WeatherContainer;