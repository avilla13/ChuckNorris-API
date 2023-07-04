var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://api.chucknorris.io/jokes';

/* GET home page. */
router.get('/', async function(req, res, next) {
  const joke = await fetch(`${ROOT_URL}/random`)
  .then(response => response.json())
  .then(joke => {
    res.render('index', { title: 'Chuck Norris Facts', joke });
  })
});









module.exports = router;
