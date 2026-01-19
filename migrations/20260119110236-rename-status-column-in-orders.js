'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('orders', 'status', 'order_status');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('orders', 'order_status', 'status');
  }
};
