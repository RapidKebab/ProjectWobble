const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    //TODO get cur messages, if time implement with cocroachDB
  })
  .post(async (req, res) => {
    //TODO SEND MESSAGE and emit new message on socket

    io.to(req.body.roomId).emit(
      "newMessage",
      req.body.message
    );

    console.log(req.body);
    res.status(200).json("successful");
  });

module.exports = router;
