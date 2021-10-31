const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('change');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

// https://expressjs.com/ko/starter/hello-world.html
