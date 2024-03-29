const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./model')
const {getProfile} = require('./middleware/getProfile')
const routes = require('./routes');
const app = express();

app.set('sequelize', sequelize)
app.set('models', sequelize.models)

app.use(bodyParser.json());
app.use(routes);

module.exports = app;
