const sequelize = require("../db");
const Product = require("../models/Product");

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        const [product, created] = await Product.findOrCreate({
            where: {
                name: "Laptop",
            },
            defaults: {
                price: 50000,
            },
        });

        /*console.log(
            created
                ? "Product seeded successfully"
                : "Product already exists"
        );*/

        /*await sequelize.query( // writing the raw query for product insertion without sequelize function
            `
            INSERT INTO "Products" (name, price, "createdAt", "updatedAt")
            VALUES (:name, :price, NOW(), NOW()); 
            `,
            {
                replacements: {
                    name: "Mobile",
                    price: 20000,
                },
            }
        )*/
        console.log("Product inserted via raw SQL");
        await Product.bulkCreate(
            [
                {
                    name: "Laptop",
                    price: 55000,
                },
                {
                    name: "Mobile",
                    price: 25000,
                },
                {
                    name: "Tablet",
                    price: 30000,
                },
            ],
            {
                validate: true,
            }
        );

        console.log("3 products inserted");

    } catch (error) {
        console.error("Product seeding failed:", error);
    } finally {
        await sequelize.close();
    }
})();
