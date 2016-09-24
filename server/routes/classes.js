var express = require("express");
var router = express.Router({mergeParams: true});
var knex = require("../../db/knex.js");

router.route("/")
  .get(function(req, res){
    res.sendStatus(200)
  })


module.exports = router;
