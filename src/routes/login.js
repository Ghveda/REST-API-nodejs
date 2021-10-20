const route = require("./home");
const loginMethods = require('../controllers/loginController');
const passport = require('passport');


route.get('/login', loginMethods.loginGetMethod);
route.post('/login', passport.authenticate('local'), loginMethods.loginPostMethod);

module.exports = route;