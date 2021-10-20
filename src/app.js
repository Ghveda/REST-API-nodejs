const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const home = require('./routes/home');
const login = require('./routes/login');
const passport = require('passport');
const passportLocal = require('passport-local');
const User = require('./models/users');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
mongoose.connect('mongodb+srv://Ghveda:' + process.env.MONGO_PASSWORD + '@cluster0.zjtte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

passport.use(new passportLocal.Strategy({
    usernameField: 'username',
    session: false
}, async (username, password, done) => {
    try {
        const user = await User.find({ username: username })
        if (user && await bcrypt.compare(password, user.password)) {
            done(null, user)
        } else {
            done(null, false)
        }
    } catch (error) {
        done(error);
    }
}))



app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', './layout/layout.ejs');

app.use(home);
app.use(login);


app.listen(3000);