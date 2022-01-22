var express = require('express');
var app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 5050;

io.on('connection', (socket) => {
    console.log('a user connected');
  });

app.get('/api/test', function (req, res) {
    res.send('This is a test API!');
});

server.listen(port, function () {
    console.log('Backend server listening on port 5050');
});