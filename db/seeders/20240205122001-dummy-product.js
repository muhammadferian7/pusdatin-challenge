"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"products",
			[
				{
					name: "data dummy a",
					description: "desc of data a",
          userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "data dummy b",
					description: "desc of data b",
          userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("products", null, {});
	},
};
