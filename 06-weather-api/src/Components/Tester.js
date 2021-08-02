
const Tester = ({ city, temperature, icon, description }) => {
  return (
    <div className='tester'>
      <div className='city'>도시: {city}</div>
      <div className='temperature'>온도: {temperature}</div>
      <div className='icon'>아이콘: {icon}</div>
      <div className='description'>설명: {description}</div>
    </div>
  );
}

export default Tester;