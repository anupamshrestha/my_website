var express = require('express');
var router = express.Router();

const uiRouter = require("./ui.routes");
const apiRouter = require("./api.routes");


router.use("/",uiRouter);
router.use("/api",apiRouter);


module.exports = router;
