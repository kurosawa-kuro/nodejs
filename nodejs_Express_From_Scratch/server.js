require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://user:5150kuro@cluster0.uedxq.mongodb.net/nodekb', 
  { useNewUrlParser: true }
);
let db = mongoose.connection;

db.on('open', function(){
  console.log("Connected to MongoDB")
});

db.on('error', function(err){
  console.log("err : " + err)
});
// const display_env =require('./module/env');
// display_env();

const express = require('express');
var logger = require('morgan');

const app = express();
app.use(logger('dev'));

const Article = require('./models/article');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  Article.find({}, function(err, articles){
    console.log(err)
    res.render('index', {
      title:'index',
      articles:articles
    });
  });

});

app.get('/articles/add', function(req, res) {
  res.render('add_article', {
    title:'Add Article'
  });
});

app.listen(process.env.backend_port, function() {
  console.log("Example app listening on port " + process.env.backend_port + "!");
});