import Header from "../components/Header";
import Footer from "../components/Footer";
import UofU from "../assets/UofUlogo.jpg";
import MSU from "../assets/MSUlogo.jpg";
import "../styles/Pages.css";
import "../styles/Education.css";

const Education = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div>
          <h2 className="pageTitle">
            <strong>Education</strong>
          </h2>
          <p>These are my skills...</p>

          <div className="logos">
            <img className="MSU" src={MSU} />
            <img className="UofU" src={UofU} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
