var express = require("express");
var router = express.Router({mergeParams: true});
var knex = require("../../db/knex.js");
var bcrypt = require("bcrypt");


router.route('/signup')
  .post(function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if(err) throw err;
      knex.raw(`INSERT INTO users (name, password) VALUES ($(req.body.name), $(hash))`)
        .then(function(response){
          res.sendStatus(201)
          res.render("profile")
        })
    });


  })

router.route("/login")
  .post(function(req, res){

  })


module.exports = router;
