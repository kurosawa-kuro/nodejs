const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/mongodb/user');

mongoose.connect('mongodb+srv://user:5150kuro@cluster0.uedxq.mongodb.net/sampledb2');

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 


// create-userの設定
app.post('/api/v1/create-user-mongodb', (req, res) =>{
    console.log('/api/v1/create-user')
    // console.log('req : ' + JSON.stringify(req));
    if (!req.body){
        return res.status(500).send('reqest body empty.');
    }

    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    
    console.log('user.name : ' + user.name);
    console.log('user.age : ' + user.age);

    // MongoDBに保存
    user.save(function(err){
        if(!err) {
            return res.status(200).send('user create success.');
        } else {
            return res.status(500).send('user create faild.');
        }
    });
});

// イベント待機
app.listen(3001, () => console.log('Listening on port 3000'));