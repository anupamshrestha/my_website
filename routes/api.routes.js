
var router = require('express').Router();
const ContactRouter =  require("../modules/contacts/contact.routes.api");
const mailer = require("../utils/mailer");

router.use("/contacts", ContactRouter);
router.use("/contacts/add", ContactRouter);
router.use("/contacts/update", ContactRouter);


// router.post('/mail',async (req, res, next)=>{
//     let fullName =  req.body.full_name;
//     let subject = req.body.subject;
//     let email = req.body.email;
//     let message = req.body.message;
//     let data = await mailer.transferEmail({fullName, subject, email, message});
//     try{
//       return res.json(data);
//     }catch(e){
//       return e;
//     }
// });



module.exports = router;
