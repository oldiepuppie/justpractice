const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const indexRouter = require('./routers/index');
const proverbsRouter = require('./routers/proverbs');

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/proverbs', proverbsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;