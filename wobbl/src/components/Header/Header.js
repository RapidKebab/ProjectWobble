import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Icon from "../../img/wobblbigpng.png";
function Header() {
  let navigate = useNavigate();
  return (
    <div className="header">
      <img
        className="icon"
        src={Icon}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="headerText"></div>
    </div>
  );
}

export default Header;
