const express =require("express")
const router = express.Router();

//  /user/signup
router.post("/signup", require("./userSignupPost"));
router.post("/login", require("./userSignupPost"));

module.exports = router;