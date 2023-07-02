var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://api.chucknorris.io/jokes';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chuck Norris Jokes' });
});









module.exports = router;
