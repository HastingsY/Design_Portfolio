import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import PIQUEViz from "./pages/PIQUEViz";
import EnvironmentalDashboard from "./pages/EnvironmentalDashboard";
import CookingApp from "./pages/CookingApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project1" element={<PIQUEViz />} />
        <Route path="project2" element={<EnvironmentalDashboard />} />
        <Route path="project3" element={<CookingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
