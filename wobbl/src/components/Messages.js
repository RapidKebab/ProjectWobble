import React from "react";
import Msg from "./Msg/Msg";

export default function Messages({ chatMessages }) {

    return chatMessages.map((msg) => {
    return <Msg msg={msg.message} />;
  });
}


