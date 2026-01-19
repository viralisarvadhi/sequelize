'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          order_number: 'ORD-5001',
          total_amount: 2500.00,
          status: 'CONFIRMED',          // ✅ FIXED
          shipping_address: 'Delhi, India',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', {
      order_number: 'ORD-5001'
    });
  }
};
