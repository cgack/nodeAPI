module.exports = (req, res, next) => {
    // Define Accepted Origins, which methods to be called in the API
    res.header('access-contro-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    // The Access-Control-Allow-Headers response header is used in response to a preflight 
    // request to indicate which HTTP headers will be available via
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
}; // next parameter allows to continue after the process of the function