import './App.css';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    return axios.get('http://localhost:4000/ultraShortForecast')
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  }

  useEffect(async() => {
    const sampleData = await getData();
    const items = await sampleData.response.body.items.item;
    console.log('**useEffect data**', items);
    setData(sampleData);
  },[])

  return (
    <div className="App">
      내용
    </div>
  );
}

export default App;
