const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:EFA2021!@localhost:5432/eleven-journal");

module.exports = sequelize;