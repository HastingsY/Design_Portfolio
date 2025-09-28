// cooking app project page
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";

const CookingApp = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <nav className="back-row">
          <Link
            to="/projects"
            className="back-link"
            aria-label="Back to project cards"
          >
            <svg className="back-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to project cards</span>
          </Link>
        </nav>

        <h3>
          <strong>Cooking App</strong>
        </h3>
        <p>Coming soon…</p>
      </main>
      <Footer />
    </div>
  );
};

export default CookingApp;
