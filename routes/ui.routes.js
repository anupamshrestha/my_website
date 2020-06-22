var router = require('express').Router();
var contactRouter = require("../modules/contacts/contact.routes.ui");
const { route } = require('../modules/contacts/contact.routes.ui');

router.get('/', function(req, res, next) {
  res.render('index', { title: "Anupam's portfolio", name: 'Anupam Shrestha'});
});

// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Login'});
// });

router.use("/contacts", contactRouter);
router.use("/contacts/add", contactRouter);
router.use("/contacts/update", contactRouter);


  

//   router.post('/mail', async(req, res, next)=>{
//     console.log("onServer>>", req.body);
// });

  module.exports = router;