import React, { Component } from "react";
import Messages from "../components/Messages";
import Msg from "../components/Msg";

export default class Ex extends Component {
  constructor(props){
      super(props);
      this.state={
        chat: "deez"
      }
  }
  render() {
    return (
      <>
        <Msg/>
        {this.state.chat}
        <input type="text"/>
        <button>Send</button>
      </>
    );
  }
}
