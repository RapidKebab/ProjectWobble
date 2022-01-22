import React from "react";
import "./Msg.css"
import UpIcon from "../../img/uparrow.png";
import DownIcon from "../../img/downarrow.png";

function Msg() {
  return (
    <>
      <div className="msg">
        {Msg.name}
        <div className="buttons">
        +1
        <img
        className="up"
        src={UpIcon}
        />
        <img
        className="down"
        src={DownIcon}
        />
        </div>
      </div>

    </>
  );
}

export default Msg;
