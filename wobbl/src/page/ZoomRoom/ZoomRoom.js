import React, { useState, useEffect } from "react";
import Messages from "../../components/Messages";
import { useParams } from "react-router";
import "./ZoomRoom.css";
import { socket } from "../../service/socket";
const ENDPOINT = process.env.REACT_APP_BACKENDADDRESS || "http://localhost:5050";



function ZoomRoom() {
  function sendMessage({ message, roomId }) {
    console.log("sending message:" + input + " to room with id:" + roomId);
    fetch(ENDPOINT+"/api/message", {
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
  ]);

  useEffect(() => {
    socket.emit("joinRoom", { roomId });
    socket.on("newMessage", (data) => {
      console.log(data);
      chat.push({message: data});
      setChat([...chat]);
    });
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
          onKeyDown={(e)=>{
            //of the key pressed is enter send the message
            if(e.code===13){
              console.log(e);
              if (input !== "") {
                sendMessage({ message:input, roomId });
                setInput("");
              }
            }
          }}
        />
        <button
          className="messagesender"
          onClick={() => {
            if (input !== "") {
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
