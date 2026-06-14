import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/ui/CommandPalette";
import ScrollToTop from "./components/ui/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <CommandPalette />
        <Suspense fallback={
          <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-300" />
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
