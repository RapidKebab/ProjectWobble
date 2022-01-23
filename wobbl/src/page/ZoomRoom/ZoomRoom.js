import React, { useState, useEffect } from "react";
import Messages from "../../components/Messages";
import { useParams } from "react-router";
import "./ZoomRoom.css";
import { socket } from "../../service/socket";
const ENDPOINT = process.env.REACT_APP_BACKEND || "http://localhost:5050";

function ZoomRoom() {
  var vheight = window.innerHeight;

  function sendMessage({ message, roomId }) {
    console.log("sending message:" + input + " to room with id:" + roomId);
    fetch(ENDPOINT + "/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, roomId }),
    });
  }

  let { roomId } = useParams();

  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", { roomId });
    socket.on("updateMessage", (data) => {
      console.log(data);
      setChat(data.curMessages);
    });
  }, []);

  return (
    <>
      <div className="id">Zoom room id: {roomId}</div>

      <div className="messaging">
        <div className="messages" ><Messages chatMessages={chat} roomId={roomId}  /></div>
        
        <div className="inputField">
          <input
            className="messagebox"
            type="text"
            value={input}
            onInput={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              //of the key pressed is enter send the message
              if (e.key === "Enter") {
                if (input !== "") {
                  sendMessage({ message: input, roomId });
                  setInput("");
                }
              }
            }}
          />
          <button
            className="messagesender"
            onClick={() => {
              if (input !== "") {
                sendMessage({ message: input, roomId });
                setInput("");
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default ZoomRoom;
