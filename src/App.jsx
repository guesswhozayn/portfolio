import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar /> {/* Navbar is rendered globally, above all routes */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />
          {/* Resume Page Route */}
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
