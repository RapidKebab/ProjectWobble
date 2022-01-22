import React, { Component } from "react";
import Messages from "../components/Messages";

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
        {this.state.chat}
        <input type="text"/>
        <button>Send</button>
      </>
    );
  }
}
