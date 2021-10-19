const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const home = require('./routes/home');
require('dotenv').config();



const app = express();

mongoose.connect('mongodb+srv://Ghveda:'+process.env.MONGO_PASSWORD+'@cluster0.zjtte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', './layout/layout.ejs');

app.use(home);


app.listen(3000);