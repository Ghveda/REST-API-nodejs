const app = require('express');
const homeMethods = require('../controllers/homeController');

const route = app.Router();

route.get('/', homeMethods.homeGetMethod);
route.post('/', homeMethods.homePostMethod);



module.exports = route;