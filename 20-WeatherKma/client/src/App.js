import './App.css';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async ({ numberOfRows, pageNo, base_date, base_time, nx, ny }) => {
    // ?serviceKey=인증키&numOfRows=10&pageNo=1&base_date=20210628&base_time=0630&nx=55&ny=127
    return axios.get(`http://localhost:4000/ultraShortForecast?numberOfRows=${numberOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    (async () => {
      const dataByQuery = await getData({
        numberOfRows: "10",
        pageNo: "1",
        base_date: "20211106",
        base_time: "1800",
        nx: "52",
        ny: "38"
      });
      const items = await dataByQuery.response.body.items.item;
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
