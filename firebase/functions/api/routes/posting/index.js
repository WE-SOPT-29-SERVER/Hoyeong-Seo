const express = require("express");
const router = express.Router();

router.get('/post', require("./postingGET"));
router.get('/post/:id', require("./postingFindGET"));
router.post('/post', require("./postingPOST"));
router.put('/post/:id', require('./postingUpdatePUT'));
router.delete('/post/:id', require('./postingDELETE'));

module.exports = router;
