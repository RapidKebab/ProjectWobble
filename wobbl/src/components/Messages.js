import React from "react";
import Msg from "./Msg/Msg";

export default function Messages({ chatMessages, roomId }) {

    return chatMessages.map((msg) => {
    return <Msg message={msg.message} id={msg.id} points={msg.points} roomId={roomId}/>;
  });
}


