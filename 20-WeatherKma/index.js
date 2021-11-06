const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3001;

const { getUltraSrtNcst } = require('./utils');

const example = {
  serviceKey: process.env.KMA_ENCODING_KEY,
  numOfRows: '10',
  pageNo: '1',
  base_date: '20211106',
  base_time: '0600',
  nx: '52',
  ny: '38'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ultraShortNewForecast', async (req, res) => {
  const data = await getUltraSrtNcst(example)
  res.send(data);
})

// app.get('/ultraShortForecast', (req, res) => {
//   res.send('초단기예보 조회 결과');
// })

// app.get('/villageForecast', (req, res) => {
//   res.send('단기예보 조회 결과');
// })

// app.get('/forecastVersion', (req, res) => {
//   res.send('예보버전 조회 결과');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})