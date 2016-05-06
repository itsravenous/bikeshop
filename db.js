'use strict';
const Sequelize = require('sequelize');

module.exports = new Sequelize('bikeshop', 'root', 'password', {
  host: 'db',
  dialect: 'mysql'
});