import React, { Component, useState } from "react";
import Messages from "../../components/Messages";
import Msg from "../../components/Msg/Msg";
import "./ZoomRoom.css";

function Ex(){
  const [chat, setChat] = useState([{id: 1, name: 'deez', points:1},{id: 2, name: 'nuts', points:1}])
    return (
      <>
        <Messages chat ={chat}/>
        <input type="text"/>
        <button>Send</button>
      </>
    );
}

export default Ex;
