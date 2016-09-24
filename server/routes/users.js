var express = require("express");
var router = express.Router({mergeParams: true});
var knex = require("../../db/knex.js");

router.route('/signup')
  .post(function(req, res){

  })

router.route("/login")
  .post(function(req, res){

  })


module.exports = router;
