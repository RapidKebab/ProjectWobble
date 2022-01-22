import React, { Component } from "react";
import "./Header.css";
import Icon from "../../img/wobblicon.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className ="icon" src={Icon}/>
        <div className="headerText">
          This is the HEADER
        </div>
      </div>
    );
  }
}
