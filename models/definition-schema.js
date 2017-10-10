var db = require('../config/db');

var DefinitionSchema = db.Schema({
    logType: String,
    desc: String,
    // owner: { type: db.Schema.Types.ObjectId, ref: 'User' }
    owner: String
});

module.exports = DefinitionSchema;