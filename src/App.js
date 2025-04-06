import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Med from "./med/med";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/med/med" element={<Med />} />
      </Routes>
    </Router>
  );
}

export default App;
