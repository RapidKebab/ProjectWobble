import React, { useState } from "react";
import "./Msg.css";
import UpIcon from "../../img/uparrow.png";
import DownIcon from "../../img/downarrow.png";
import { motion } from "framer-motion";

function Msg({ msg }) {
  const [points, setPoints] = useState(320);
  console.log(msg);


  function upVote() {
    console.log("upvote");
  }

  function downVote() {
    console.log("downvote");
  }

  return (
    <>
      <div className="msg">
        <div className="msgtxt">{msg}</div>
        <div className="buttons">
          +1
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
