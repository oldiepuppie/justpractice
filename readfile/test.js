const fs = require('fs');
// const _ = require('underscore');

fs.readFile('text.txt', 'utf-8',(err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
})