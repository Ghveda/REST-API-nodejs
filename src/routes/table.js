const app = require('express');
const tableMethods = require('../controllers/tableController');

const route = app.Router();

route.get('/table/:id', tableMethods.tableGetMethod);
route.delete('/table/:id', tableMethods.tableDeleteMethod);
route.put('/table/:id', tableMethods.tableUpdateMethod);

module.exports = route;