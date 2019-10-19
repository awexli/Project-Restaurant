var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.post('/', jsonParser, function(req, res, next) {
  console.log(req.body.dateToSend);
});

module.exports = router;
