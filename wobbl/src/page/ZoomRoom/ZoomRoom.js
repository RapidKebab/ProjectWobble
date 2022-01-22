import React, { useState, useEffect } from "react";
import Messages from "../../components/Messages";
import socketIOClient from "socket.io-client";
import { useParams } from "react-router";
import "./ZoomRoom.css";
import { socket } from "../../service/socket";

function ZoomRoom() {
  function sendMessage({ message, roomId }) {
    console.log("sending message:" + input + " to room with id:" + roomId);
    fetch("http://localhost:5050/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, roomId }),
    });
  }

  let { roomId } = useParams();

  const [input, setInput] = useState("");

  const [chat, setChat] = useState([
    { id: 1, name: "deez", points: 1 },
    { id: 2, name: "nuts", points: 1 },
  ]);

  useEffect(() => {
    socket.emit("joinRoom", { roomId });
    socket.on("newMessage", (data) => {
      console.log(data);
    });
    socket.send("hello");
  }, []);

  return (
    <>
      <div className="id">Zoom room id: {roomId}</div>

      <div className="messaging">
        <Messages chat={chat} />{" "}
        <input 
          className="messagebox"
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button
          className="messagesender"
          onClick={() => {
            if (input != "") {
              sendMessage({ message:input, roomId });
              setInput("");
            }
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default ZoomRoom;
