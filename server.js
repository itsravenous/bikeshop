'use strict';
const express = require('express');
const Restful = require('new-sequelize-restful');
const sequelize = require('./db');

const app = express();
const Bike = require('./models/bike');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(require('body-parser').json({
	type: 'application/*',
}));
app.all(/\/api\//, (new Restful(sequelize)).route());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});