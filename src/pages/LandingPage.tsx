import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";
import picture from "../assets/picture.jpg";
import CV from "../assets/Hastings_CV_PhD_updated_Oct_2025.pdf";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  // CV button effects
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("keydown", onKey);
      // prevent body scroll under modal
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div>
          <h2 className="pageTitle">
            <strong>About Me </strong>
          </h2>
          <div className="about">
            <img className="picture" src={picture} />
            <p className="aboutMeText">
              Hi there! I'm Yvette Hastings. I'm an analytical chemist turned
              UI/UX focused software engineer. My journey to software
              engineering began with a question: how can scientists better
              communicate their work and findings to policy makers? That
              question led me to a career change and sparked a deep interest in
              bridging the gap between science and technology. During my
              continued education, I explored a range of scientific disciplines
              and developed a strong curiosity for data science and
              visualization. My curiosity grew even deeper during my master's
              degree and I’ve been hooked ever since. Today, I focus on
              improving software quality by understanding what truly matters to
              the people who use it. From this understanding, I design and build
              visualization tools that meet the needs of diverse stakeholders.
              <br />
              <br />
              Feel free to reach out via the{" "}
              <Link to="/contact" className="back-to-grid">
                Contact
              </Link>{" "}
              page. You can also learn more about me on the{" "}
              <Link to="/CV" className="back-to-grid">
                Curriculum Vitae
              </Link>
              ,{" "}
              <Link to="/education" className="back-to-grid">
                Skills & Experience
              </Link>{" "}
              page, or explore my latest projects on the{" "}
              <Link to="/projects" className="back-to-grid">
                Projects
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
