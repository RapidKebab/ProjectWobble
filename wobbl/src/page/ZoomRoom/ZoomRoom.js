import React, { Component, useState } from "react";
import Messages from "../../components/Messages";
import { useParams } from "react-router";
import Msg from "../../components/Msg/Msg";
import "./ZoomRoom.css";

function Ex(){
  let {id} = useParams();
  const [chat, setChat] = useState([{id: 1, name: 'deez', points:1},{id: 2, name: 'nuts', points:1}])
    return (
      <>
        <div>Zoom room id: {id}</div>
        <Messages chat ={chat}/>
        <input type="text"/>
        <button>Send</button>
      </>
    );
}

export default Ex;
