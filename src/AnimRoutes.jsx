import Profile from "./Profile";
import About from "./About";
import Academy from "./Academy";
import Portfolio from "./Portfolio";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="https://rifqifavian463.github.io/new---portfolio-project/" element={<Profile />} />
        <Route path="https://rifqifavian463.github.io/new---portfolio-project/about" element={<About />} />
        <Route path="https://rifqifavian463.github.io/new---portfolio-project/academy" element={<Academy />} />
        <Route path="https://rifqifavian463.github.io/new---portfolio-project/portfolio" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimRoutes;
