import React, { Component } from "react";
import React, { useState } from "react";
import Messages from "../components/Messages";

export default class Ex extends Component {
  
  render() {
    const [chat,setChat] = useState(['sample text','sample text 2'])
    return (
      <>
        <Messages chat = {chat}/>
        <input type="text"/>
        <button>Send</button>
      </>
    );
  }
}
