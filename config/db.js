// Database Configuration File
var db = require('mongoose');

// Connect User:Password@Database_IP:Port/Database_Name
db.connect('mongodb://test:test@127.0.0.1:27017/nodeapi');

// make db object available
module.exports = db;
