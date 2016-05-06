'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../db');

module.exports = sequelize.define('bikes', {
  id: {
  autoIncrement: true,
  primaryKey: true,
  type: Sequelize.INTEGER
  },
  make: Sequelize.STRING,
  model: Sequelize.STRING
});