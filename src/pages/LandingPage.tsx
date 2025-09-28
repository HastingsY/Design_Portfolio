import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";

const LandingPage = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div>
          <h3>
            <strong>About Me: </strong>
          </h3>
          <p>This is me and my story....</p>
        </div>
        <div>
          <h3>
            <strong>My Skills: </strong>
          </h3>
          <p>These are my skills...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
