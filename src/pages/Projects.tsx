// Projects directory
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cooking from "../assets/cooking.png";
import LL from "../assets/LLsite.jpg";
import pique from "../assets/PIQUE_logo2.jpg";
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
      title: "PIQUE Visualizer",
      slug: "pique",
      path: "/projects/pique",
      img: pique,
      desc: "An interactive Quality-in-Use visualizer for PIQUE scores and factors.",
    },
    {
      title: "Environmental Monitoring Dashboard",
      slug: "environment",
      path: "/projects/environment",
      img: LL,
      desc: "Live charts and alerts for environmental metrics and field sensors.",
    },
    {
      title: "Cooking App",
      slug: "cooking",
      path: "/projects/cooking",
      img: cooking,
      desc: "Plan meals, track ingredients, and visualize nutrition at a glance.",
    },
  ];

  const renderDetail = () => {
    switch (slug) {
      case "pique":
        return <PIQUEViz />;
      case "environment":
        return <EnvironmentalDashboard />;
      case "cooking":
        return <CookingApp />;
      default:
        return <p>Select a project from the left to view details.</p>;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h3>
          <strong>Projects</strong>
        </h3>

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
                  ← Back to project thumbnail list
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
