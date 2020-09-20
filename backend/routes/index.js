var express = require('express');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/name', function(req, res, next) {
  res.json({'name':'Michael'})
});

module.exports = router;
