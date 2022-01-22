import React, { Component } from "react";
import Messages from "../components/Messages";

export default class Ex extends Component {
  
  render() {
    this.setState({chat: ["deez","nuts"]})
    return (
      <>
        <Messages chat = {this.state.chat}/>
        <input type="text"/>
        <button>Send</button>
      </>
    );
  }
}
