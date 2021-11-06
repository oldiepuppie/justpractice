const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 3001;

const { getUltraSrtNcst, getUltraSrtFcst } = require('./utils');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ultraShortNewForecast', async (req, res) => {
  const data = await getUltraSrtNcst(req.query);
  res.send(data);
})

app.get('/ultraShortForecast', async (req, res) => {
  console.log(req.query);
  const data = await getUltraSrtFcst(req.query);
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})