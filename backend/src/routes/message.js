const express = require("express");
const router = express.Router();

var curId=0;
var curMessages = [];

//while <50 messages keep adding and updating no need to remove anything

function insertMessage(newMessage){
  console.log("inserting new message:  "+newMessage);
  curMessages.forEach(element => {
    dropPt(element);
  });
  curMessages.push(newMessage);
  //3 for testing change back
  if(curMessages.length>3){
    removeLowest(curMessages);
  }
  //insert message into already sorted priority queue
}

function addPts({message}){
  message.points++;
}
function dropPt(message){
  message.points--;
}
function removeLowest(messageList){
  lowestmsg= messageList[0]
  messageList.forEach(function(element){
    if(element.points<lowestmsg.points){
      lowestmsg=element;
    }
  });
  messageList.splice(messageList.indexOf(lowestmsg),1);
}

router
  .route("/")
  .get(async (req, res) => {
    //TODO get cur messages, if time implement with cocroachDB
  })
  .post(async (req, res) => {
    //TODO SEND MESSAGE and emit new message on socket
    var newMessage = {message:req.body.message, id:curId, points:1, test:"bleepbloop"}
    curId++;

    //push new message into the list
    insertMessage(newMessage);

    io.to(req.body.roomId).emit(
      "updateMessage",
      {curMessages: curMessages}
    );

    console.log(req.body);
    res.status(200).json("successful");
  });

module.exports = router;
