import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import PIQUEViz from "./pages/PIQUEViz";
import EnvironmentalDashboard from "./pages/EnvironmentalDashboard";
import CookingApp from "./pages/CookingApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
