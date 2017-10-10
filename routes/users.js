//Users Configuration - Can be used as a router from server.js
var router = require('express').Router();
//Allow us to encrypt our password
var bcrypt = require('bcryptjs');

var User = require('../models/user');
var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

// we create a router where users will be able to Save a User in the db

router.post('/', (req, res) => {
    // user = { username: 'foo', email: 'user@test.com', pwd: 'pass'}
    var user = new User({
        username: req.body.user.username,
        email: req.body.user.email,
        passhash: bcrypt.hashSync(req.body.user.pwd, 10)
    });
    // Store to Database
    user.save().then(
        (newuser) => {
            var sessionToken = jwt.sign(newuser._id, constants.JWT_SECRET, { expiresIn: 60*60*24}); // Create sessionToken expiring in a day
                        
            res.json({
                user: newuser,
                message: 'success',
                sessionToken: sessionToken
            });
        },
        (err) => {
            res.send(500, err.message);
        }
    );
});

module.exports = router;

