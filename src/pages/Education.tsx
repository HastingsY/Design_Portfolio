import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ESS from "../assets/ESS_logo.png";
import MSU from "../assets/MSUlogo.jpg";
import "../styles/Pages.css";
import "../styles/Education.css";

import ExtensionIcon from "@mui/icons-material/Extension";
import HandymanIcon from "@mui/icons-material/Handyman";
import DrawIcon from "@mui/icons-material/Draw";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

const Education = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div>
          <p className="statement">
            Creative UI/UX designer, software engineer, and problem-solver
            passionate about creating intuitive, clean interfaces designed to
            communicate complex data.
          </p>
          <div className="education-cards">
            <h2>
              <ExtensionIcon className="Icon technical" fontSize="large" />
              Technical Skills
            </h2>
            <ul>
              <li>
                <strong>Frontend Development: </strong>HTML, CSS,
                JavaScript/TypeScript, React, RShiny
              </li>
              <li>
                <strong>Data Visualization: </strong>R ggplot2, plotly,
                matplotlib, D3.js, Tableau, ArcGIS Pro
              </li>
              <li>
                <strong>Programming: </strong>R (Shiny, ggplot2, tidyverse,
                statistics), Python, Java, SQL, MATLAB
              </li>
              <li>
                <strong>Version Control: </strong>Git, GitHub, GitLab
              </li>
            </ul>
          </div>
          <div className="education-cards">
            <h2>
              <HandymanIcon className="Icon tools" fontSize="large" />
              Tools & Technology
            </h2>
            <ul>
              <li>
                <strong>Survey: </strong>Qualtrics, Google Analytics
              </li>
              <li>
                <strong>Design: </strong>Figma, Adobe XD, Adobe Illustrator, MS
                PowerPoint
              </li>
              <li>
                <strong>Development: </strong>VS Code, IntelliJ, R Studio,
                GitHub, Node.js, React
              </li>
              <li>
                <strong>Documentation: </strong>Overleaf, R Markdown/Quatro,
                Docusaurus
              </li>
            </ul>
          </div>
          <div className="education-cards">
            <h2>
              <DrawIcon className="Icon design" fontSize="large" />
              Design & Creative Skills
            </h2>
            <ul>
              <li>
                User research, requirements gathering, and persona development
              </li>
              <li>
                Wireframing & prototyping (Figma, Adobe XD; rapid concept
                sketching in PowerPoint)
              </li>
              <li>Usability heurisitics</li>
              <li>UX design laws</li>
              <li>Interaction design principles</li>
              <li>Unified Modeling Language (UML) Diagraming</li>
              <li>Information architecture</li>
            </ul>
          </div>
          <div className="education-cards">
            <h2>
              <AssuredWorkloadIcon
                className="Icon experience"
                fontSize="large"
              />
              Experience
            </h2>
            <p className="experience-summary">
              Projects emphasizing data visualization, usability testing, and
              clean UI engineering.
            </p>

            <div className="experience-item">
              <img className="experience-logo-MSU" src={MSU} alt="MSU logo" />
              <div className="experience-text">
                <h3>
                  UI Designer, Montana State University Software Engineering and
                  Cybersecurity Lab (2025)
                </h3>
                <p>
                  Designed and developed a web visualizer to display PIQUE
                  software quality model data. Collaborated with stakeholders to
                  transform JSON outputs into interactive visual cards. Applied
                  user research, wireframing, and usability testing to enhance
                  workflow clarity and accessibility.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <img className="experience-logo-MSU" src={MSU} alt="MSU logo" />
              <div className="experience-text">
                <h3>
                  UI/UX Designer, Montana State University UI Design Course
                  (2025)
                </h3>
                <p>
                  Designed a responsive cooking app integrating recipes,
                  shopping lists, AI assistance, and VR cooking classes. Applied
                  user research, business modeling, wireframing, prototyping,
                  and user testing to optimize design functionality and user
                  engagement.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <img className="experience-logo" src={ESS} alt="ESS logo" />
              <div className="experience-text">
                <h3>
                  UI Designer, University of Utah School of Environment, Society
                  & Sustainability SAGE Lab (2022)
                </h3>
                <p>
                  Designed an environmental dashboard showcasing water quality,
                  hydrology, and maintenance costs for a campus research
                  facility. Conducted requirement gathering, prototyping, and
                  usability testing to refine dashboard layout and data
                  communication effectiveness.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-link-row">
            <p className="projects-text">Want to see these skills in action?</p>
            <Link to="/projects" className="back-to-grid">
              To Projects Page →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
