const { body } = require("express-validator");

const registerRules = [
	body("FirstName")
		.trim()
		.notEmpty()
		.withMessage("FirstName cannot be empty")
		.isAlpha("en-IN", { ignore: "s" })
		.withMessage("FirstName can only contain alphabets")
		.escape(),
	body("LastName")
		.trim()
		.notEmpty()
		.withMessage("LastName cannot be empty")
		.isAlpha("en-IN", { ignore: "s" })
		.withMessage("LastName can only contain alphabets")
		.escape(),
	body("email")
		.trim()
		.notEmpty()
		.withMessage("Email cannot be empty")
		.isEmail()
		.withMessage("Email is invalid")
		.normalizeEmail(),
	body("username")
		.trim()
		.notEmpty()
		.withMessage("Username cannot be empty")
		.escape(),
	body("password")
		.notEmpty()
		.withMessage("Password cannot be empty")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters or more"),
];
const loginRules = [
	body("username")
		.trim()
		.notEmpty()
		.withMessage("Username cannot be empty"),
	body("password")
		.notEmpty()
		.withMessage("Password cannot be empty"),
];
const updateRules = [
	body("email")
		.trim()
		.notEmpty()
		.withMessage("Email cannot be empty")
		.isEmail()
		.withMessage("Email is invalid")
		.normalizeEmail(),
	body("username")
		.trim()
		.notEmpty()
		.withMessage("Username cannot be empty")
		.escape(),
];
module.exports = { registerRules, loginRules, updateRules };
