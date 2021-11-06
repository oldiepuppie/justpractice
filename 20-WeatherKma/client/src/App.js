import './App.css';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    return axios.get('http://localhost:4000/ultraShortForecast')
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    (async () => {
      const sampleData = await getData();
      const items = await sampleData.response.body.items.item;
      setData(prev => items);
      setIsLoading(prev => false);
    })();
  },[])

  return (
    <div className="App">
      <h1>WeatherKma - client</h1>
      <ul className="dataList">
        {
          isLoading?
            <h2>로딩 중</h2>
          :
          data.map((datum, idx) => {
            return (
              <li key={idx} className="content">
                <ul>
                  <h3>{`fcstDate, fcstTime: ${datum.fcstDate} ${datum.fcstTime}`}</h3>
                  <li>{`category, value: ${datum.category} ${datum.fcstValue}`}</li>
                </ul>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
