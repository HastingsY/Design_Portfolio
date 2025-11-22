import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { SkillsExperience } from './components/SkillsExperience';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFound } from './components/NotFound';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col transition-colors">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navigation />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<SkillsExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </Router>
  );
}