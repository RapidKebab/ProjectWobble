const express = require("express");
const router = express.Router();

var curId = 0;
var rooms = [];
var curMessages = [];
var curRoomId = 0;

//while <50 messages keep adding and updating no need to remove anything

function insertMessage(newMessage) {
  console.log("inserting new message:  " + newMessage);
  curMessages.forEach((element) => {
    dropPts(element);
  });

  //3 for testing change back
  if (curMessages.length > 15) {
    removeLowest(curMessages);
  }
  curMessages.push(newMessage);
}

function addPts(message) {
  console.log(message);
  message.points++;
}
function dropPts(message) {
  console.log(message);
  message.points--;
}
function removeLowest(messageList) {
  lowestmsg = messageList[0];
  messageList.forEach(function (element) {
    if (element.points < lowestmsg.points) {
      lowestmsg = element;
    }
  });
  messageList.splice(messageList.indexOf(lowestmsg), 1);
}

router
  .route("/")
  .get(async (req, res) => {
    //TODO get cur messages, if time implement with cocroachDB
  })
  .post(async (req, res) => {
    //TODO SEND MESSAGE and emit new message on socket
    var newMessage = {
      message: req.body.message,
      id: curId,
      points: 1,
      test: "bleepbloop",
    };
    curId++;
    if (req.body.roomId !== curRoomId) {
      curMessages = [];
      curRoomId = req.body.roomId;
    }
    //push new message into the list
    insertMessage(newMessage);
    console.log(req.body.roomId);
    io.to(req.body.roomId).emit("updateMessage", { curMessages: curMessages });

    console.log(req.body);
    res.status(200).json("successful");
  });

router.route("/vote").post(async (req, res) => {
  if (req.body.up) console.log("upvote on message with id:" + req.body.id);
  else console.log("downvote on message with id:" + req.body.id);
  //find message with this ID
  var msg = curMessages.filter((message) => {
    return message.id === req.body.id;
  })[0];
  if (req.body.up) addPts(msg);
  else {
    dropPts(msg);
  }

  io.to(req.body.roomId).emit("updateMessage", { curMessages: curMessages });

  res.json("succesful");
});

module.exports = router;
