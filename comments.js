// Create web server
// 1. Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var mime = require('mime');
var querystring = require('querystring');
var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        // response.writeHead(200, { 'Content-Type': 'text/html'
    }
})