import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";

// Import the PDF from your assets folder (adjust filename if needed)
import cvPdf from "../assets/Hastings_CV_PhD_updated_Oct_2025.pdf";

const CV = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content centered">
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -0%)",
          }}
        >
          <h2 className="pageTitle">
            <strong>Curriculum Vitae</strong>
          </h2>
          <section className="cv-viewport">
            <iframe
              className="pdf-frame"
              src={cvPdf}
              title="Curriculum Vitae (PDF)"
            />
          </section>

          {/* Optional: download link */}
          <p className="cv-actions">
            <a href={cvPdf} download>
              Download CV (PDF)
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CV;
