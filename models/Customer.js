const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
//const Product = require("./Product");

class Customer extends Model { }

Customer.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Customer",
        tableName: "Customers",
    }
);
// association
/*Customer.hasMany(Product, {
    foreignKey: "customerId",
});*/

module.exports = Customer;
