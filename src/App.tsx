import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
