var db = require('../config/db.js');

var UserSchema = db.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    passhash: {type: String, required: true},
    created: {type: Date, default: Date.now}
});
// Make it available to other files
module.exports = UserSchema;