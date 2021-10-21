const route = require("./home");
const loginMethods = require('../controllers/loginController');


route.get('/login', loginMethods.loginGetMethod);
route.post('/login', loginMethods.loginPostMethod);

module.exports = route;