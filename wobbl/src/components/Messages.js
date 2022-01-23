import React from "react";
import Msg from "./Msg/Msg";

export default function Messages({ chat, rerender }) {
  console.log(chat);
  const test = rerender;
  return chat.map((msg) => {
    return <Msg msg={msg.message} />;
  });
}


