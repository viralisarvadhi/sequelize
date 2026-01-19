'use strict';

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order',
        {
            order_number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            total_amount: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            shipping_address: DataTypes.TEXT
        },
        {
            tableName: 'orders',
            timestamps: true,
            hooks: {
                beforeValidate: (order) => {
                    if (!order.order_number) {
                        order.order_number = `ORD-${Date.now()}`;
                    }
                    if (order.status) {
                        order.status = order.status.toUpperCase();
                    }
                }
            }
        }
    );

    return Order;
};
