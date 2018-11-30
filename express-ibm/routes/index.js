var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IBM Github Reository' });
	res.redirect('/order');
});

module.exports = router;
