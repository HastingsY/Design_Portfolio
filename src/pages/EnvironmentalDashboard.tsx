// LL dashboard project page
import React, { useState, KeyboardEvent } from "react";
import mockUp from "../assets/LLdashboard_mockup.png";
import ESS from "../assets/ESS_logo.png";
import LLfinal from "../assets/LLdashboard_final.png";
import "../styles/EnvironmentalDashboard.css";
import Lightbox from "../components/Lightbox";

// Accessible, reusable zoomable image
type ZoomableImgProps = {
  src: string;
  alt: string;
  className?: string;
  onZoom: (src: string, alt: string) => void;
};
const ZoomableImg: React.FC<ZoomableImgProps> = ({
  src,
  alt,
  className,
  onZoom,
}) => {
  const onKey = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onZoom(src, alt);
    }
  };
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onClick={() => onZoom(src, alt)}
      onKeyDown={onKey}
      tabIndex={0}
      role="button"
      aria-label={`Open larger view: ${alt}`}
      style={{ cursor: "zoom-in" }}
    />
  );
};

const EnvironmentalDashboard: React.FC = () => {
  // Lightbox state
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState<string | null>(null);
  const [lbAlt, setLbAlt] = useState("");

  const openLB = (src: string, alt: string) => {
    setLbSrc(src);
    setLbAlt(alt);
    setLbOpen(true);
  };

  return (
    <div className="project-details">
      <h2>Environmental Monitoring Dashboard</h2>
      <p className="project-summary">
        A web-based dashboard developed to visualize hydrological and
        environmental data for the University of Utah’s Landscape Lab. Designed
        to integrate scientific research and operational monitoring into an
        intuitive interface for researchers, planners, and citizen scientists.
      </p>

      <section className="project-section">
        <h3>Problem</h3>
        <p>
          In connection with my master's research, I collaborated with an
          interdisciplinary team of ecologists, hydrologists, city planners, and
          biogeochemists. The team needed a quick, accessible, and integrated
          solution to monitor and visualize environmental and economic data for
          a new landscape design facility at the University of Utah.
        </p>
      </section>

      <section className="project-section">
        <h3>Solution</h3>
        <p>
          I designed and developed a web-accessible RShiny dashboard that
          integrates hydrological information, site maps and imagery,
          environmental chemistry data, and maintenance resource tracking. The
          dashboard allows users to interactively explore datasets, visualize
          spatial and temporal trends, and monitor site performance in real
          time.
        </p>
        <p>
          You can explore the live dashboard here:{" "}
          <a
            href="https://landscape-lab.chpc.utah.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Environmental Dashboard →
          </a>
        </p>
      </section>

      <section className="project-section">
        <h3>Benefits</h3>
        <p>
          The dashboard provides research teams with data-driven insights to
          evaluate site performance and identify opportunities for design
          improvements. It also helps reduce resource usage and operational
          costs while supporting citizen scientists in monitoring ongoing
          environmental changes and stewardship outcomes.
        </p>
      </section>

      <section className="project-section">
        <h3>Tools</h3>
        <ul>
          <li>
            <strong>Rapid Concept Sketching:</strong> MS PowerPoint
          </li>
          <li>
            <strong>Frontend Development:</strong> RShiny
          </li>
          <li>
            <strong>Data Visualization (Static & Dynamic):</strong> R (ggplot2,
            plotly)
          </li>
          <li>
            <strong>Map Generation:</strong> R leaflet
          </li>
          <li>
            <strong>Statistical Summaries:</strong> R summarytools
          </li>
        </ul>
      </section>

      <section className="project-section">
        <h3>Brainstorming & Design Process</h3>

        <div className="subsection">
          <p>
            <strong>Stakeholder Meetings</strong> — Conducted individual and
            group sessions with key stakeholders to identify user needs and
            prioritize dashboard features. These discussions guided which
            datasets to include and how to structure the dashboard layout for
            optimal usability.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Rapid Concept Sketching</strong> — Created an initial layout
            concept in MS PowerPoint to visualize information hierarchy and
            potential interactions. Presented the concept during a virtual
            review session and incorporated team feedback to refine the design.
          </p>

          <figure className="project-figure">
            <ZoomableImg
              src={mockUp}
              alt="Initial dashboard mockup"
              className="project-image"
              onZoom={openLB}
            />
            <figcaption>
              <strong>Figure 1.</strong> Early mockup illustrating layout
              concept, color scheme, and component arrangement.
            </figcaption>
          </figure>
        </div>

        <div className="subsection">
          <p>
            <strong>Usability Heuristics</strong> — Applied color-blind
            accessibility principles, consistent labeling, and familiar
            interaction patterns to ensure inclusivity. Added on-page guidance
            to help users navigate map layers and interpret hydrograph
            visualizations effectively.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>Outcome</h3>
        <p>
          The final product provides both internal and external stakeholders
          with an intuitive dashboard for viewing key landscape and stream site
          characteristics. Future development will extend functionality to allow
          additional researchers to link their datasets via the sidebar. Planned
          updates also include a reactive database connection for automatic
          updates of hydrographs, stream discharge, and chemistry data.
        </p>

        <figure className="project-figure">
          <ZoomableImg
            src={LLfinal}
            alt="Final Landscape Lab dashboard"
            className="project-image"
            onZoom={openLB}
          />
          <figcaption>
            <strong>Figure 2.</strong> Final implemented dashboard integrating
            hydrology, chemistry, and maintenance datasets.
          </figcaption>
        </figure>
      </section>

      <hr />
      <div className="funding">
        <img className="ESS-logo" src={ESS} alt="ESS logo" />
        <div className="funding-text">
          This project was funded through the University of Utah's School of
          Environment, Society & Sustainability SAGE Lab.
        </div>
      </div>

      <Lightbox
        open={lbOpen}
        src={lbSrc}
        alt={lbAlt}
        onClose={() => setLbOpen(false)}
      />
    </div>
  );
};

export default EnvironmentalDashboard;
