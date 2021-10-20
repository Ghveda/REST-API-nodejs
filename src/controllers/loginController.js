const User = require('../models/users');

const loginGetMethod = (req,res)=>{
    res.render('login');
}

const loginPostMethod = (req,res)=>{
    res.send('some')
}

module.exports = {
    loginGetMethod,
    loginPostMethod
}