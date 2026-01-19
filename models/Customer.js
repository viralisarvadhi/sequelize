'use strict';

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define(
        'Customer',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            tableName: 'customers',
            timestamps: true
        }
    );

    Customer.associate = (models) => {
        Customer.hasMany(models.Order, {
            foreignKey: 'customer_id',
            as: 'orders'
        });
    };

    return Customer;
};
