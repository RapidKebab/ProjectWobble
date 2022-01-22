import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import Ex from "./page/Ex/Ex";

const ENDPOINT = "http://localhost:5050";

function App() {
  const[response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connectionMessage", data => {
      setResponse(data);
      console.log(data);
    });
    socket.send('hello');
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ex" element={<Ex />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
