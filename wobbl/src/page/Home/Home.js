import React, { Component } from "react";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
    <div className="Home">
      <div className="inputText">Enter Your Zoom ID</div>
      <input className="input" type="text"/>
      <button className="joinButton">Join</button>
    </div>
    );
  }
}
