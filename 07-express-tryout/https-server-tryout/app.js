// essential modules
const https = require('https');
const fs = require('fs');

// node.js https
// https.createServer(
//   {
//     key: fs.readFileSync('../../certificate/key.pem', 'utf-8'),
//     cer: fs.readFileSync('../../certificate/cert.pem', 'utf-8'),
//   },
//   function (req, res) {
//     res.write('Contrats! You made https server now :)');
//     res.end();
//   }
// ).listen(3001, () => {
//   console.log(`Example app listening at https://localhost:3001`)
// })


// express.js
const express = require('express');
const app = express();

https.createServer(
  {
    key: fs.readFileSync('../../certificate/key.pem', 'utf-8'),
    cert: fs.readFileSync('../../certificate/cert.pem', 'utf-8'),
  },
  app.use('/', (req, res) => {
    res.send('Congrats! You made https server now :)');
  })
).listen(3001, () => {
  console.log(`Example app listening at https://localhost:3001`)
})

