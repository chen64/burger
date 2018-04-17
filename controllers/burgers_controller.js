var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burgerName, function(result) {
    res.json(result);
  });
});

router.put("/api/devour", function(req, res) {
  burger.update(req.body.burgerId,function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.json(result)
      res.status(200).end();
    }
  );
});

module.exports = router;