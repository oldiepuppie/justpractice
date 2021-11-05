const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const endPoint = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
// process.env.KMA_ENCODING_KEY
// process.env.KMA_DECODING_KEY

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})