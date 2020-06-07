var express = require('express');
var router = express.Router();
const mailer = require("../utils/mailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Anupam's portfolio", name: 'Anupam Shrestha'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Login'});
});

router.post('/mail',async (req, res, next)=>{
let fullName =  req.body.full_name;
let subject = req.body.subject;
let email = req.body.email;
let message = req.body.message;
let data = await mailer.transferEmail({fullName, subject, email, message});
try{
  return res.json(data);
}catch(e){
  return e;
}

})

module.exports = router;
