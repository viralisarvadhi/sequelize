const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
//const Customer = require("./Customer");


class Product extends Model {
    // class-level method see by the static keyword 
    static getModelName() {
        return "Product";
    }

    // if we call it in index than directly get the output that this method work for 
    getPriceWithTax() {
        return this.price * 1.18; // 18% GST
    }
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Product",
        tableName: "Products",
    }
);
// association
/*Product.belongsTo(Customer, {
    foreignKey: "customerId",
});*/

module.exports = Product;
