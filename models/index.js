'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


fs.readdirSync(__dirname)
  .filter(file => file !== basename && file.endsWith('.js'))
  .forEach(file => {
    console.log('👉 Loading model file:', file); // 👈 ADD THIS

    const exported = require(path.join(__dirname, file));
    console.log('   typeof export:', typeof exported); // 👈 ADD THIS

    const model = exported(sequelize, Sequelize.DataTypes); // 💥 crash happens here
    db[model.name] = model;
  });

module.exports = db;
