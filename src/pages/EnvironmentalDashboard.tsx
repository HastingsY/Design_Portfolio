// LL dashboard project page
import { Link } from "react-router-dom";
import mockUp from "../assets/LLdashboard_mockup.png";
import ESS from "../assets/ESS_logo.png";
import LLfinal from "../assets/LLdashboard_final.png";
import "../styles/EnvironmentalDashboard.css";

const EnvironmentalDashboard = () => (
  <article>
    <h3>
      <strong>Environmental Monitoring Dashboard</strong>
    </h3>
    <h4>The Problem</h4>
    <p>
      In connection to my masters research, I worked with an interdisciplinary
      team made up of ecologists, hydrologists, city planners, and
      biogeochemists. As part of our research work, we needed to have a{" "}
      <strong>quick and accessible</strong> solution to{" "}
      <strong>monitor and visualize</strong> enviromental and economic data for
      a new landscape design facility at the University of Utah.
    </p>
    <h4>Solution</h4>
    <p>
      I designed and developed a web accessible{" "}
      <Link to="https://landscape-lab.chpc.utah.edu/" className="back-to-grid">
        RShiny dashboard
      </Link>{" "}
      that incorporates hydrological information, site location and pictures,
      environmental chemistry data, and maintenance resource information.
    </p>
    <h4>Benefits</h4>
    <p>
      With this information, research teams can determine the site's successes
      or failures. Additionally, researchers are able to plan additional design
      implementations to improve enviromental quality and reduce resource usage
      and costs to the university. Finally, citizen scientists can view and monitor changes to the site.
    </p>
    <h4>Tools</h4>
    Several tools were utilized to design and develop the environmental
    dashboard.
    <ul>
      <li>
        <strong>Rapid Concept Sketching: </strong>MS PowerPoint
      </li>
      <li>
        <strong>Frontend Development: </strong>RShiny
      </li>
      <li>
        <strong>Data Visualization (static and dynamic): </strong>R (plotly,
        ggplot2)
      </li>
      <li>
        <strong>Map Generation: </strong>R leaflet
      </li>
      <li>
        <strong>Environmental Summary Statistics: </strong>R summarytools
      </li>
    </ul>
    <h4>Brainstorming</h4>
    <div className="brainstorming">
      <div>
        <strong>Stakeholder Meetings</strong> - I held individual and group
        meetings with key stakeholders to gather user needs and requirements.
        This step was crucial to gain insights into what the need was, determine
        the information that was important to display on the dashboard, and gain
        a concept of important to less important items for the dashboard. The
        important to less important items allowed me to later determine there
        relative positions on the dashboard when createing a rapid sketch for
        design.
      </div>
      <br />
      <div>
        <strong>Rapid Concept Sketching</strong> - A rapid concept sketch was
        created in MS PowerPoint to present research stakeholders with a design
        concept to ensure key information was visulized and displayed on the
        dashboard. Another meeting was held virutal to review the rapid concept
        sketch and make adjustments.
      </div>
      <br />
      <img className="mockUp" src={mockUp} />
    </div>
    <h4>Outcomes</h4>
    <img className="LLfinal" src={LLfinal} />
    <br />
    <hr />
    <div className="funding">
      <img className="ESS-logo" src={ESS} alt="ESS logo" />
      <div className="funding-text">
        This project was funded through the University of Utah's School of
        Environment, Society & Sustainability SAGE Lab.
      </div>
    </div>
  </article>
);
export default EnvironmentalDashboard;
