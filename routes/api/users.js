const express = require("express");
const router = express();

//@route    GET api/users
//@desc     Test route
//@access   Public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
