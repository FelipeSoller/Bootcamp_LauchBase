const express = require('express');
const server = express();

server.get('/', function(require, response) {
    return response.send('Hello World!!!')
})

server.listen(3000, function() {
    console.log('server is running');
});