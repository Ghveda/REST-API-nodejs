const User = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
        .then(result => res.send(result))
        .catch(err => console.log(err))
}

module.exports = {
    homeGetMethod,
    homePostMethod
}