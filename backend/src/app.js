var express = require('express');
var app = express();
var cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
const port = 5050;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));


io.on('connection', (socket) => {
    console.log('a user connected');
  });

app.get('/api/test', function (req, res) {
    res.send('This is a test API!');
});

server.listen(port, function () {
    console.log('Backend server listening on port 5050');
});