const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('mini project - proverbs');
});

module.exports = router;