'use strict';

// import all models & sequelize from index.js
const { sequelize, User, Product } = require('./models');

(async () => {
  try {
    // 1️⃣ Check DB connection
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully!');

    // ❌ DO NOT USE sequelize.sync()
    // await sequelize.sync();

    // 2️⃣ Fetch all users
    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log('All users:', JSON.stringify(users, null, 2));

    // 3️⃣ Find one user
    const user1 = await User.findOne({
      where: { name: 'vir' }
    });

    console.log(user1 ? user1.toJSON() : 'No user found');

    // 4️⃣ Fetch products (ordered + limit)
    const products = await Product.findAll({
      order: [['price', 'ASC']],
      limit: 2
    });

    console.log(
      'Products (ordered):',
      products.map(p => p.toJSON())
    );

  } catch (error) {
    console.error('Unable to connect:', error);
  }
})();
