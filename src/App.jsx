import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./AnimRoutes";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Sidebar />
        <AnimRoutes />
        {/* cursor */}
        <motion.div variants={cursorVariants} animate={cursorBG} className="w-[38px] h-[38px] md:hidden lg:block bg-white fixed top-0 right-0 pointer-events-none z-20 rounded-full"></motion.div>
      </Router>
    </>
  );
}

export default App;
