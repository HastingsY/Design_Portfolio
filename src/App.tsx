import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CV from "./pages/CV";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App;
