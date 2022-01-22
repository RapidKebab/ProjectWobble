const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    //TODO get cur messages, if time implement with cocroachDB
  })
  .post(async (req, res) => {
    //TODO SEND MESSAGE and emit new message on socket

    io.to("123").emit(
      "newMessage",
      `test message for room with id:${req.body.room}`
    );

    console.log(req.body);
    res.status(200).json("successful");
  });

module.exports = router;
