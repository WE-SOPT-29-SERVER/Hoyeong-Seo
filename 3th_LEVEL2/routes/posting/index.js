const express = require("express");
const router = express.Router();

router.get('/postAll', require("./postingGET"));
router.get('/post/:id', require("./postingFindGET"));
router.get('/post', require("./postPOST"));

module.exports = router;
