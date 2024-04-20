import React from "react";
import Countries from "../Countries/Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";

const Body = () => {
  return (
    <Router>
    <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
      <div style={{ display: "flex", flex: "1" }}> 
        <div style={{ flex: "0 0 15%", maxWidth: "15%" }}><Sidebar /></div>
        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default Body;
