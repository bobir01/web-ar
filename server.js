var static = require('node-static');
const http = require('http');

const file = new (static.Server)();

http.createServer(function (req, res) {
    req.addListener('end', function () {
        file.serve(req, res);
    }).resume();
}).listen(3000, "0.0.0.0");

console.log('Server running at http://localhost:3000/');
