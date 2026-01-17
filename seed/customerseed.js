const sequelize = require("../db");
const Customer = require("../models/Customer");

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        await Customer.bulkCreate(
            [
                {
                    firstName: "Virali",
                    lastName: "Joshi",
                    email: "virali@gmail.com",
                },
                {
                    firstName: "Vedant",
                    lastName: "patel",
                    email: "vedant@gmail.com",
                },
            ],
            {
                ignoreDuplicates: true,
            }
        );

        console.log("2 customers inserted");
    } catch (err) {
        console.error(err);
    } finally {
        await sequelize.close();
    }
})();
