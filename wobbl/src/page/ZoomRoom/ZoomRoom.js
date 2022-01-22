import React, { useState, useEffect } from "react";
import Messages from "../../components/Messages";
import socketIOClient from "socket.io-client";
import { useParams } from "react-router";
import "./ZoomRoom.css";
import { socket } from "../../service/socket";

function ZoomRoom() {
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
      <div className="id">Zoom room id: {roomId}</div>
      <div className="messaging">
      <Messages chat={chat} />
      <input className="messagebox" type="text" />
      <button className="messagesender">Send</button>
      </div>
    </>
  );
}

export default ZoomRoom;
