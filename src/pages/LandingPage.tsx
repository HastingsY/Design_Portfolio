import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";
import picture from "../assets/picture.jpg";

const LandingPage = () => {
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
              Hi there! I'm Yvette Hastings. I developed a deep curiosity for
              data science and visualization during my master's degree, and I’ve
              been hooked ever since. Today, I focus on improving software
              quality by understanding what truly matters to the people who use
              it. From this understanding, I design and build visualization
              tools that meet the needs of diverse stakeholders. Some of my
              current research explores how software quality intersects with the
              natural sciences, with the goal of making complex science easier
              to analyze, synthesize, and share.
              <br />
              <br />I love connecting with others, learning about their work,
              and finding creative ways to make their ideas more impactful.
              Outside of work, I enjoy hiking, spending time with friends, and
              learning about new cultures.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
