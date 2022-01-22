import React, { Component, useState } from "react";
import Messages from "../components/Messages";
import Msg from "../components/Msg/Msg";

function Ex() {
  const [chats, setChats] = useState(["first chat", "second chat"]);
  return (
    <>
      <Msg />
      {chats}
      <input type="text" />
      <button>Send</button>
    </>
  );
}
export default Ex;
