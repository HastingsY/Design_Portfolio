import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Project button navigation
  const handleButtonClick = () => {
    navigate("/projects");
  };

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
              UI/UX focued software engineer. My journey to software engineering
              began with a question: how can scientists better communicate their
              work and findings to policy makers? That question led me to a
              career change and sparked a deep interest in bridging the gap
              between science and technology. During my continued education, I
              explored a range of scientific disciplines and developed a strong
              curiosity for data science and visualization. My curiosity grew
              even deeper during my master's degree and I’ve been hooked ever
              since.
              <br />
              <br />
              Today, I focus on improving software quality by understanding what
              truly matters to the people who use it. From this understanding, I
              design and build visualization tools that meet the needs of
              diverse stakeholders. Some of my current research explores how
              software quality intersects with the natural sciences, with the
              goal of making complex science easier to analyze, synthesize, and
              share.
              <br />
              <br />I love connecting with others, learning about their work,
              and finding creative ways to make ideas and insights accessible
              and impactful. Outside of work, I enjoy hiking, spending time with
              friends, and exploring new cultures.
              <br />
              <br />
              Feel free to reach out via the{" "}
              <Link to="/contact" className="back-to-grid">
                Contact
              </Link>{" "}
              page or the email and LinkedIn icons below. You can also learn
              more about my journey on the{" "}
              <Link to="/education" className="back-to-grid">
                Skills & Experience
              </Link>{" "}
              page, view my Curriculum Vitae via the button below, or explore my
              latest projects on the{" "}
              <Link to="/projects" className="back-to-grid">
                Projects
              </Link>{" "}
              page.
              <br />
              <br />
              <div className="btn-row">
                <button className="CV" onClick={openModal}>
                  Curriculum Vitae
                </button>
              </div>
            </p>
          </div>
        </div>
      </main>

      {open && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae PDF"
          onClick={closeModal} // click backdrop closes
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close PDF"
              ref={closeBtnRef}
            >
              ×
            </button>

            {/* PDF display */}
            <iframe className="pdf-frame" title="Yvette Hastings CV" src={CV} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LandingPage;
