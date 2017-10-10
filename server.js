var express = require('express');
var app = express();
// make body-parser available for all routes of the server
var bodyParser = require('body-parser');

app.use(bodyParser.json());
// call the function that sets which requests are accepted
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/test', function(req, res){
    res.send('Hello World');
});

//how you will access the API Methods
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/sessions'));
app.use('/api/definitions', require('./routes/definitions'));

app.listen(3000, function(){
    console.log('The app is listening on port 3000');
});