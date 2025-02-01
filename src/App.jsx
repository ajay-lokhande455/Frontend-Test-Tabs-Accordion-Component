import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabs from "./pages/Tabs";
import Accordion from "./pages/Accordion";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tabs" element={<Tabs />} /> 
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </Router>
  );
}

export default App;
