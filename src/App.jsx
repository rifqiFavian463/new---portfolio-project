import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./AnimRoutes";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
