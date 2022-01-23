var express = require('express');
var app = express();
var cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const bp = require('body-parser');
require("dotenv").config();


global.io = require("socket.io")(server, {
    cors: {
      origin: process.env.FRONTENDDADDRESS || "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
app.set('socketio', io);

const port = process.env.PORT || 5050;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());



//routes
const messageRouter = require("./routes/message");
const roomRouter = require("./routes/room");
//map routes
app.use("/api/message", messageRouter);
app.use("/api/room", roomRouter);

io.on('connection', socket => {
    socket.leave();
    console.log('a user connected');
    socket.on('joinRoom', ({ roomId }) => {
    socket.join(roomId);
    });
});


app.get('/api/test', function (req, res) {
    res.send('This is a test API!');
});

server.listen(port, function () {
    console.log('Backend server listening on port 5050');
});