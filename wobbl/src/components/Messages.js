import React from "react";
import Msg from "./Msg/Msg";

function Messages({ chat }) {
  return chat.map((msg) => {
    return <Msg msg={msg} />;
  });
}

export default Messages;
