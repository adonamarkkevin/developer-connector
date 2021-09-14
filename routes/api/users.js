const express = require("express");
const router = express();
const { check, validationResult } = require("express-validator");

//@route    Post api/users
//@desc     Register User
//@access   Public
router.post(
	"/",
	[
		check("name", "Name is Required").not().isEmpty(),
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with at least 6 digits or more"
		).isLength({ min: 6 }),
	],
	[],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		console.log(req.body);
		res.send("User route");
	}
);

module.exports = router;
