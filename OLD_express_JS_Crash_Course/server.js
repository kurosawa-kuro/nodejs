const express = require('express');
var exphbs  = require('express-handlebars');
// const logger = require('morgan');
const path = require('path');

const members  = require('./data/members');

const app = express();

// app.use(logger('dev'));

const moment = require('moment');

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

app.use(logger);

app.get('/api/members', (req,res)=>{
  res.json(members)
});

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.set("views", path.join(__dirname, "app/views/"));
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});