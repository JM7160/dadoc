import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Med from "./med/med";
import Hos from "./hos/hos";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/med/med" element={<Med />} />
      <Route path="/hos/hos" element={<Hos />} />
      </Routes>
    </Router>
  );
}

export default App;
