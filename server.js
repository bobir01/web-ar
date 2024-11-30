var static = require('node-static');
const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
}
const file = new (static.Server)();

https.createServer(options, function (req, res) {
    req.addListener('end', function () {
        file.serve(req, res);
    }).resume();
}).listen(3000, "0.0.0.0");


http.createServer(options, function (req, res) {
    req.addListener('end', function () {
        file.serve(req, res);
    }).resume();
}).listen(3001,  "0.0.0.0");
