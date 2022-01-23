import React, { useState } from "react";
import "./Msg.css";
import UpIcon from "../../img/uparrow.png";
import DownIcon from "../../img/downarrow.png";
import { motion } from "framer-motion";

const ENDPOINT = process.env.REACT_APP_BACKEND || "http://localhost:5050";


function Msg({ message, id , points, roomId }) {
  console.log(message);
  console.log(id);
  console.log(points);


  function upVote() {
    console.log("upvote");
    fetch(ENDPOINT+"/api/message/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, up:true,roomId }),
    });

  }

  function downVote() {
    console.log("downvote");
    fetch(ENDPOINT+"/api/message/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, up:false }),
    });
  }

  return (
    <>
      <div className="msg">
        <div className="msgtxt">{message}</div>
        <div className="buttons">
          {points}
          <motion.img
            className="up"
            src={UpIcon}
            onClick={() => {
              upVote();
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          />
          <motion.img
            className="down"
            src={DownIcon}
            onClick={() => {
              downVote();
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Msg;
