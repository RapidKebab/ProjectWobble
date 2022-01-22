import React, { Component, useState, useEffect } from "react";
import Messages from "../../components/Messages";
import socketIOClient from "socket.io-client";
import { useParams } from "react-router";
import Msg from "../../components/Msg/Msg";
import "./ZoomRoom.css";
import { socket } from "../../service/socket";

function Ex() {
  let { roomId } = useParams();
  useEffect(() => {
    socket.emit("joinRoom", { roomId });
    socket.on("newMessage", (data) => {
      console.log(data);
    });
    socket.send("hello");
  });

  const [chat, setChat] = useState([
    { id: 1, name: "deez", points: 1 },
    { id: 2, name: "nuts", points: 1 },
  ]);
  return (
    <>
      <div>Zoom room id: {roomId}</div>
      <Messages chat={chat} />
      <input type="text" />
      <button>Send</button>
    </>
  );
}

export default Ex;
