var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/posting', require("./posting"))

module.exports = router;
