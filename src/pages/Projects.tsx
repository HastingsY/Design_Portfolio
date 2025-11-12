// Projects directory
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cooking from "../assets/cooking.png";
import LL from "../assets/LLsite.jpg";
import pique from "../assets/PIQUE_logo.png";
import PIQUEViz from "./PIQUEViz";
import EnvironmentalDashboard from "./EnvironmentalDashboard";
import CookingApp from "./CookingApp";
import "../styles/Pages.css";
import "../styles/Projects.css";

const Projects = () => {
  const { slug } = useParams<{ slug?: string }>();
  const selected = Boolean(slug);

  const items = [
    {
      title: "Cooking App",
      slug: "cooking",
      path: "/projects/cooking",
      img: cooking,
      desc: "Engaging app to plan meals, track ingredients, and visualize nutrition at a glance.",
    },
    {
      title: "PIQUE Visualizer",
      slug: "pique",
      path: "/projects/pique",
      img: pique,
      desc: "An interactive visualizer for PIQUE software quality assessment scores and details.",
    },
    {
      title: "Environmental Monitoring Dashboard",
      slug: "environment",
      path: "/projects/environment",
      img: LL,
      desc: "An interactive environmental monitoring dashboard, displaying site map, hydrographs, and water chemistry.",
    },
  ];

  const renderDetail = () => {
    switch (slug) {
      case "cooking":
        return <CookingApp />;
      case "pique":
        return <PIQUEViz />;
      case "environment":
        return <EnvironmentalDashboard />;
      default:
        return <p>Select a project from the left to view details.</p>;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h2 className="pageTitle">
          <strong>Projects</strong>
        </h2>
        <p className="instructions">
          <strong>Click on a project card to view details.</strong>
        </p>

        {!selected ? (
          // Default: full grid
          <section className="projects-grid">
            {items.map((p) => (
              <Link
                key={p.slug}
                to={p.path}
                className="project-card"
                aria-label={p.title}
              >
                <img src={p.img} alt={p.title} />
                <div className="card-body">
                  <h4 className="card-title">{p.title}</h4>
                  <p className="card-desc">{p.desc}</p>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          // Selected: rail on the left, detail on the right
          <section className="projects-shell">
            <div className="card-rail">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  to={p.path}
                  className={`project-card project-card--mini ${slug === p.slug ? "is-active" : ""}`}
                  aria-label={p.title}
                >
                  <img src={p.img} alt={p.title} />
                  <div className="card-body">
                    <h4 className="card-title">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>

            <div className="project-detail">
              <div className="detail-topbar">
                <Link to="/projects" className="back-to-grid">
                  ← Close project details
                </Link>
              </div>
              {renderDetail()}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
