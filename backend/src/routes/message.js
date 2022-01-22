const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res)=>{
    //TODO get cur messages, if time implement with cocroachDB
}).post(async (req,res)=>{
    //TODO SEND MESSAGE and emit new message on socket
    io.emit('newMessage', {message: req.body.message, zoomId:req.body.zoomId});
    console.log(req.body);
    console.log(`the message: ${req.body.message} has been emitted`);
    res.json("succesful");

});

module.exports = router;