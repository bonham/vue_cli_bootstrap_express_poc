var express = require('express');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/name', function (req, res, next) {
  let randInt = Math.floor(Math.random() * 11)
  let name = "Michael " + randInt
  res.json({ 'name': name })
});

module.exports = router;
