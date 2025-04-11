import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Med from "./med/med";
import Hos from "./hos/hos";
import Sos from "./sos/sos";
import Alarm from "./alarm/alarm";
import Login from "./login/login";
import Signup from "./login/signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <Nav />}

      <Routes>
        <Route path="/login/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} /> 

        {!isLoggedIn ? (
          <Route path="*" element={<Navigate to="/login/login" replace />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/med/med" element={<Med />} />
            <Route path="/hos/hos" element={<Hos />} />
            <Route path="/sos/sos" element={<Sos />} />
            <Route path="/alarm/alarm" element={<Alarm />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
