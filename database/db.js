const { Sequelize } = require('sequelize');
const config = require('./config/config')
const db = {};

db.connection = new Sequelize (config.database, config.username, config.password, config);

module.exports = db;