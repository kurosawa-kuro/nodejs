const express = require('express');
var exphbs  = require('express-handlebars');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "app/views/"));

app.get('/', function(req, res) {
  res.send("<h1>List</h1>" + 
            "<ul>" + 
              "<li><a href='http://192.168.33.10:3000'>index</a></li>" + 
              "<li><a href='http://192.168.33.10:3000/list'>list</a></li>" + 
              "<li><a href='http://192.168.33.10:3000/template'>template</a></li>" + 
              "<li><a href='http://192.168.33.10:3000/template_with_data'>template_with_data</a></li>" + 
            "</ul>");
});

app.get('/list', function(req, res) {
  res.sendFile(path.join(__dirname+'/list.html'));
});

app.get('/template_with_data', function(req, res) {
  res.render('template_with_data', {
    title: "template_with_data",
    description: "Welcome to template_with_data"
  })
});

app.get('/template', function(req, res) {
  res.render('template');
});



app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});