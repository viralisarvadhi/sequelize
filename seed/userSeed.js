const sequelize = require("../db");
const User = require("../models/User");

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        const [user, created] = await User.findOrCreate({
            where: {
                name: "virali",
                lastname: "joshi",
            },
        });

        console.log(
            created
                ? "User seeded successfully"
                : "User already exists"
        );
        await User.bulkCreate(
            [
                {
                    name: "heena",
                    lastname: "roy",
                },
                {
                    name: "vedant",
                    lastname: "patel",
                },
                {
                    name: "amit",
                    lastname: "shah",
                },
            ],
            {
                validate: true, // runs model validators
            }
        );

        console.log("3 users inserted");

    } catch (error) {
        console.error("User seeding failed:", error);
    } finally {
        await sequelize.close();
    }
})();
