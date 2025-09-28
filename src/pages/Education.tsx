import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";

const Education = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div>
          <h2>
            <strong>Education</strong>
          </h2>
          <p>These are my skills...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
