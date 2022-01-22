import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import ZoomRoom from "./page/ZoomRoom/ZoomRoom";

const ENDPOINT = "http://localhost:5050";

function App() {
  const[response, setResponse] = useState("");
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("connectionMessage", data => {
      setResponse(data);
      console.log(data);
    });
    socket.on("newMessage", data =>{
      console.log(data);
    })

    socket.send('hello');
  }, []);
 

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zoom/:id" element={<ZoomRoom />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
