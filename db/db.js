const Sequelize = require('sequelize');
const sequelize = new Sequelize('url', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
},);

module.exports = sequelize;