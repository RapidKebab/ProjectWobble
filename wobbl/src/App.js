import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Ex from "./page/Ex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ex" element={<Ex />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
