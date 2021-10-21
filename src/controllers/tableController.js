const User = require('../models/users');
const jwt = require('jsonwebtoken');

const tableGetMethod = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({_id: id})
        .exec()
        .then(data => data);

    jwt.sign({user}, 'secret', (error, token)=>{
        res.jsonp({user: token})
    })
}

const tableDeleteMethod = (req, res) => {
    const id = req.params.id;
    User.remove({ _id: id })
        .then((result) => res.jsonp(result))
        .catch(error => res.jsonp({ error: error }))
}

const tableUpdateMethod = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, { username: req.body.username })
        .then((result) => res.jsonp({ msg: 'username is updated', result: result }))
        .catch(error => res.jsonp({ error: error }))
}

module.exports = {
    tableGetMethod,
    tableDeleteMethod,
    tableUpdateMethod
}