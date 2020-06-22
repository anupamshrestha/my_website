const router =  require("express").Router();
const ContactController = require("./contact.controller");


//list all the contacts
router.get("/",(req, res, next)=>{
ContactController.list()
    .then(d=> res.json(d))
    .catch(e=> next(e))

});


//get Specific contact
router.get("/:id",(req, res, next)=>{
    ContactController.getById(req.params.id)
        .then(d=> res.json(d))
        .catch(e=> next(e))
    
    });

//Create a new contacts
router.post("/",(req, res, next)=>{
    ContactController.create(req.body)
    .then(d=> res.json(d))
    .catch(e=> next(e))
});

//update a contact
router.put("/:id",(req, res, next)=>{
    ContactController.update(req.params.id, req.body)
    .then(d=> res.json(d))
    .catch(e=> next(e))
});

//delete a contact
router.delete("/:id",(req, res, next)=>{
    ContactController.remove(req.params.id)
    .then(d=> res.json(d))
    .catch(e=> next(e))
});

module.exports = router;