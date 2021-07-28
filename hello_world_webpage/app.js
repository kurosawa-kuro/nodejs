const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/list', function(req, res) {
  res.sendFile(path.join(__dirname+'/list.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});