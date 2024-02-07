const { body } = require("express-validator");

const createRules = [
	body("name")
		.trim()
		.notEmpty()
		.withMessage("Name cannot be empty")
		.escape(),
	body("description")
		.trim()
		.notEmpty()
		.withMessage("Description cannot be empty")
		.escape(),
	body("userId")
		.trim()
		.notEmpty()
		.withMessage("userId cannot be empty")
		.isInt()
		.withMessage("userId is invalid"),
];

const updateRules = [
	body("name")
		.trim()
		.notEmpty()
		.withMessage("Name cannot be empty")
		.escape(),
	body("description")
		.trim()
		.notEmpty()
		.withMessage("Description cannot be empty")
		.escape(),
	body("userId")
		.trim()
		.notEmpty()
		.withMessage("userId cannot be empty")
		.isInt()
		.withMessage("userId is invalid"),
];

module.exports = { createRules, updateRules };
