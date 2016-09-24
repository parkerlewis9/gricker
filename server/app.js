var express = require('express');
var app = new express();

app.set('views', '../app')
app.set("view engine", "ejs")

app.get('/', function(req, res){
  res.render('index', {})
})
.listen(7777)
