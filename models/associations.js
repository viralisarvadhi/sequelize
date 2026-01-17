const Customer = require("./Customer");
const Product = require("./Product");

// One Customer -> Many Products
Customer.hasMany(Product, {
    foreignKey: "customerId",
});

Product.belongsTo(Customer, {
    foreignKey: "customerId",
});
