const express = require("express");
const router = express.Router();

const scoreController = require("../Controllers/scoresControllers");

router.get("/score", function (req, res, next) {
  return scoreController.findAll(req, res, next);
});

router.post("/score", function (req, res, next) {
  console.log(req.params);
  return scoreController.create(req, res, next);
});

module.exports = router;
