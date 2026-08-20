import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const HomePage = lazy(() => import("./pages/HomePage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen bg-white transition-colors duration-300" />
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/service/:id" element={<ServicePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
