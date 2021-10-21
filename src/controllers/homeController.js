const User = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const homeGetMethod = (req,res)=>{
    res.render('home');
}

const homePostMethod = async (req, res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: hashedPassword
    })
    user.save()
        .catch(err => console.log(err))
    res.render('login')
}

module.exports = {
    homeGetMethod,
    homePostMethod
}