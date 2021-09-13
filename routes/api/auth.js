const express = require("express");
const router = express();

//@route    GET auth/users
//@desc     Test route
//@access   Public
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
