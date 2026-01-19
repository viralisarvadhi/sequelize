'use strict';

const { Order } = require('./models');

async function practiceHooks() {
    try {
        console.log('🚀 Creating a new order...\n');

        const order = await Order.create({
            total_amount: 1299.99,
            status: 'pending', // 👈 will be uppercased by hook
            shipping_address: 'Jaipur, India'
        });

        console.log('📦 Order saved in DB:\n');
        console.log(order.toJSON());
    } catch (error) {
        console.error('❌ Error while practicing hooks:', error);
    } finally {
        process.exit();
    }
}

practiceHooks();
