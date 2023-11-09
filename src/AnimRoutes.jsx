import React from "react";

import Profile from "./Profile";
import About from "./About";
import Academy from "./Academy";
import Portfolio from "./Portfolio";

import { Routes, Route, useLocation } from "react-router-dom";

function AnimRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default AnimRoutes;
