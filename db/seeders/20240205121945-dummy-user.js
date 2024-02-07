"use strict";

const bcrypt = require("bcrypt");

module.exports = {
	async up(queryInterface, Sequelize) {
		const password = "123456";
		const encryptedPassword = bcrypt.hashSync(password, 12);

		await queryInterface.bulkInsert(
			"users",
			[
				{
					FirstName: "demo",
					LastName: "demo",
					email: "demo@gmail.com",
					username: "demo_username",
					password: encryptedPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("users", null, {});
	},
};
