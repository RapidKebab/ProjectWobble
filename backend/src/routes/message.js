const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res)=>{
    //TODO get cur messages, if time implement with cocroachDB
}).post(async (req,res)=>{
    //TODO SEND MESSAGE and emit new message on socket
    io.emit('newMessage', req.query.message);
    console.log(`the message: ${req.query.message} has been emitted`);

});

module.exports = router;