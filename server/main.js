var express = require('express');
var app = new express();
var knex = require("../db/knex.js");
var server = require("./routes/index.js");

app.set('views', './app')
app.set("view engine", "ejs")
app.use(express.static( __dirname + "/../.tmp"))

app.get('/', function(req, res){
  res.render('index.ejs', {})
})

app.use("/users", server.users)
server.users.use("/classes", server.classes)







app.listen(7777, function(){
  console.log("Server started on port 7777");
});

// module.exports = app
