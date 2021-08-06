
const WeatherContainer = ({ city, weather, temperature, icon, description }) => {
  return (
    <div className='tester'>
      <div className='city'>{city}</div>
      <div className='weather'>{weather}</div>
      <div className='temperature'>{temperature}°C</div>
      <img 
        className='icon'
        src={icon}
        alt='weather icon'
      />
      <div className='description'>{description}</div>
    </div>
  );
}

export default WeatherContainer;