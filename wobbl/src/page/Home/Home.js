import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home () {
    const [zoomId,setZoomId] = useState("");

    let navigate = useNavigate();

    function handleClick() {
      navigate(`/zoom/${zoomId}`);
    }

    return (
    <div className="Home">
      <div className="inputText">Enter Your Zoom ID</div>
      <input className="input" type="text" value={zoomId} onInput={e => setZoomId(e.target.value)}/>
      <button className="joinButton" onClick={handleClick}>Join</button>
    </div>
    );
  
}
export default Home;
