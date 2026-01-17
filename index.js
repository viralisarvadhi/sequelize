const sequelize = require("./db");

// importing models correctly
const User = require("./models/User");
const Product = require("./models/Product");

// registering models (optional but safe)
require("./models/User");
require("./models/Product");
require("./models/Customer");
require("./models/associations");


(async () => {
  try {
    await sequelize.authenticate(); // TO CHECK THE CONNECTION IS ESTABLISHED OR NOT
    // the working of authenticate
    console.log("PostgreSQL connected successfully!");
    // console.log(Object.keys(sequelize.models));

    await sequelize.sync({ alter: true }); // sync the model with database as a table
    console.log("model synced");

    // Find all users
    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));

    const user1 = await User.findOne({
      where: {
        name: "vir",
      },
    });

    console.log(user1 ? user1.toJSON() : "No user found");

    /*
    const product = Product.build({ // insert query first build
      name: "Laptop",
      price: 50000,
    });

    await product.save(); // then save
    console.log("product saved:", product.toJSON());
    */

    const products = await Product.findAll({
      order: [["price", "ASC"]],
      limit: 2,
    });

    console.log("Products (ordered):", products.map(p => p.toJSON()));





  } catch (error) {
    console.error("Unable to connect:", error);
  }
})();
