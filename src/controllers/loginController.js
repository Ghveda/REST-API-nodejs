const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginGetMethod = (req, res) => {
    res.render('login')
}

const loginPostMethod = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username: username });
    if (!user) {
        res.status(401).json({
            message: 'Email or password incorrect'
        })
        return;
    }
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
        res.status(401).json({
            message: 'Email or password incorrect'
        })
    }

    const payload = {
        id: user._id,
        username: user.username,
    }

    res.json({
        access_token: jwt.sign(payload, 'secret')
    })
}

module.exports = {
    loginGetMethod,
    loginPostMethod
}