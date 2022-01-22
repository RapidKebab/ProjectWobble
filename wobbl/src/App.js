import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import Ex from "./page/Ex";

function App() {
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
