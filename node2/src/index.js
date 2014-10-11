var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello Docker Node2 - Change it back');
});

app.listen(8080);