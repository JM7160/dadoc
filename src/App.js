import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Med from "./med/med";
import Hos from "./hos/hos";
import Sos from "./sos/sos";
import Alarm from "./alarm/alarm";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/med/med" element={<Med />} />
      <Route path="/hos/hos" element={<Hos />} />
      <Route path="/sos/sos" element={<Sos />} />
      <Route path="/alarm/alarm" element={<Alarm />} />
      </Routes>
    </Router>
  );
}

export default App;
