import React, { useState } from "react";
import Messages from "../../components/Messages";
import { useParams } from "react-router";
import "./ZoomRoom.css";

function Ex(){
  let {id} = useParams();
  const [chat, setChat] = useState([{id: 1, name: 'deez', points:1},{id: 2, name: 'nuts', points:1}])
    return (
      <>
      
      <div className="id">Zoom room id: {id}</div>
      <div className="messaging">
        
        <Messages chat ={chat}/>
        <input type="text"/>
        <button>Send</button>
      </div>
      </>
    );
}

export default Ex;
