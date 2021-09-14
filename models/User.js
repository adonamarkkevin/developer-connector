const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: { String, require: true },
	email: { String, require: true, unique: true },
	password: { String, require: true },
	avatar: String,
	date: { Date, default: Date() },
});

module.exports = User = mongoose.model("user", UserSchema);
