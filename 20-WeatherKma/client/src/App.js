import './App.css';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentDate = () => {
    //'20211102' 형식 // 'yyyymmdd'
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month.toString() : month.toString();
    let day = date.getDate();
    day = day < 10 ? "0" + day.toString() : day.toString();
    return year + month + day;
}

  const getFormatTime = () => {
    // 'hhmm' 형식
    let hourDate = new Date(Date.now() - 45 * 60 * 1000);
    let hour = hourDate.getHours();
    hour = hour >= 10 ? hour : "0" + hour;
    return hour + "30";
  }

  const getData = async ({ numOfRows, pageNo, base_date, base_time, nx, ny }) => {
    return axios.get(`http://localhost:4000/ultraShortForecast?numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    const date = getCurrentDate();
    const time = getFormatTime();
    (async () => {
      const dataByQuery = await getData({
        numOfRows: "100",
        pageNo: "1",
        base_date: date,
        base_time: time,
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
      <h2>base date & time: {`${getCurrentDate()} ${getFormatTime()}`}</h2>
      <ol className="dataList">
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
      </ol>
    </div>
  );
}

export default App;
