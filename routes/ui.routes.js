var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: "Anupam's portfolio", name: 'Anupam Shrestha'});
  });
  
  router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Login'});
  });

  module.exports = router;