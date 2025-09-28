// Projects directory
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/cooking.png";
import "../styles/Pages.css";
import "../styles/Projects.css";

const Projects = () => {
  const items = [
    {
      title: "PIQUE Visualizer",
      path: "/project1",
      img: "https://via.placeholder.com/800x450?text=PIQUE+Visualizer",
      desc: "An interactive Quality-in-Use visualizer for PIQUE scores and factors.",
    },
    {
      title: "Environmental Monitoring Dashboard",
      path: "/project2",
      img: "https://via.placeholder.com/800x450?text=Environmental+Dashboard",
      desc: "Live charts and alerts for environmental metrics and field sensors.",
    },
    {
      title: "Cooking App",
      path: "/project3",
      img: logo,
      desc: "Plan meals, track ingredients, and visualize nutrition at a glance.",
    },
  ];

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h3>
          <strong>Projects</strong>
        </h3>

        <section className="projects-grid">
          {items.map((p) => (
            <Link
              key={p.title}
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
