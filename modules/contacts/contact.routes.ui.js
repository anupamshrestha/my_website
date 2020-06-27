const router = require("express").Router();
const contactController = require("./contact.controller");



router.get("/", async(req, res, next)=>{
    let contactList = await contactController.list();
    res.render("contact/index",{title: "Contact List", contactList});
});

router.get("/add", async(req, res, next)=>{
    res.render("contact/add",{title: "Add Contact"});
});

router.get("/:id", async(req, res, next)=>{
    let data = await contactController.getById(req.params.id);
    res.render("contact/edit",{title: "Update List", data});
});


module.exports = router;