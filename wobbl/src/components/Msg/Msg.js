import React, { useState } from "react";
import "./Msg.css";
import UpIcon from "../../img/uparrow.png";
import DownIcon from "../../img/downarrow.png";

function Msg({ msg }) {
  const [points, setPoints] = useState(320);
  console.log(msg);
  const style = {
    backgroundColor: `hsl(14, ${points/10}%, 50%)`,
    width: "100px",
    height: "100px",
  };

  return (
    <>
      <div className="msg">
        <div className="msgtxt">{msg}</div>
        <div style={style} />
        <div className="buttons">
          +1
          <img className="up" src={UpIcon} />
          <img className="down" src={DownIcon} />
        </div>
      </div>
    </>
  );
}

export default Msg;
