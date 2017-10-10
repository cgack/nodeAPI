var jwt = require('jsonwebtoken');
var User = require('../models/user');
var constants = require('../config/constants');

module.exports = (req, res, next) => {
    var sessionToken = req.headers.authorization;

    if (!req.body.user && req.headers.authorization){
        // jwt check [Session]
       jwt.verify(sessionToken, constants.JWT_SECRET, (err, decodedId) => {
            if (decodedId.data){
                // if we find a user in the database that corresponds to requests user - accepted
                User.findOne({ _id: decodedId.data}).then((user) =>{ 
                   req['user'] = user;
                   next();
                }, (err) => {
                    // if the user exists in request but not found in the db - rejected
                    res.send(401, 'not authorized, user does not exist');                    
                });
            } else {
                res.send(401, 'not authorized');
            }
       });
        
    } else {
        next();
    }
};