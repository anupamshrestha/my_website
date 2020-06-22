const router = require("express").Router();
const contactController = require("./contact.controller");



router.get("/", async(req, res, next)=>{
    let contactList = await contactController.list();
    res.render("contact/index",{title: "Contact List", contactList});
});

router.get("/add", async(req, res, next)=>{
    res.render("contact/addContact",{title: "Add Contact"});
});

router.get("/update/:id", async(req, res, next)=>{
    let updateList = await contactController.getById(req.params.id);
    res.render("contact/update",{title: "Update List", updateList});
});


module.exports = router;