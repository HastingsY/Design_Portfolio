// cooking app project page
import "../styles/EnvironmentalDashboard.css";
import MSU from "../assets/MSUlogo.jpg";
import wireframe1 from "../assets/wireframe 1.png";
import wireframe2 from "../assets/wireframe 2.png";
import wireframe3 from "../assets/wireframe 3.png";
import wireframe4 from "../assets/wireframe 4.png";

import Lightbox from "../components/Lightbox";
import React, { useState, KeyboardEvent } from "react";

// Small helper to avoid repeating handlers on every <img>
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
      className={className ? `${className}` : undefined}
      onClick={() => onZoom(src, alt)}
      onKeyDown={onKey}
      tabIndex={0}
      role="button"
      aria-label={`Open larger view: ${alt}`}
      style={{ cursor: "zoom-in" }}
    />
  );
};

const CookingApp: React.FC = () => {
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
      <h2>Cooking App</h2>
      <p className="project-summary">
        A mobile application built to streamline meal prep, keep track of health
        goals, provide immersive cooking classes, save recipes, set dietary and
        allergy preferences, and provide AI-assisted recipe generation.
      </p>

      <section className="project-section">
        <h3>Problem</h3>
        <p>
          Many people struggle with everyday cooking decisions: not knowing what
          to cook after a long day, how to plan meals in advance, or what to do
          with leftover ingredients. These challenges often lead to frustration,
          wasted food, and missed opportunities for healthier eating. For
          college students and working professionals with busy schedules and
          limited grocery store trips, it is important to find quick,
          accessible, and adaptable ingredient lists, recipes, and cooking
          guidance.
        </p>
      </section>

      <section className="project-section">
        <h3>Solution</h3>
        <p>
          In a team setting, we designed a cooking application suited to meet
          the needs of college and young working professionals. The cooking
          application is tailored to finding and storing recipes, provide
          grocery shopping assistance, generate recipes with an AI bot, and
          track health and fitness goals. Additionally, users can join virtual
          cooking classes to enhance their culinary skills.
        </p>
      </section>

      <section className="project-section">
        <h3>Benefits</h3>
        <p>
          The cooking app benefits many working professionals, either in school
          or working in industry, by reducing time spent finding recipes,
          shopping, and prepping for meals.
        </p>
      </section>

      <section className="project-section">
        <h3>Tools</h3>
        <ul>
          <li>
            <strong>Design Process Documentation:</strong> Adobe Express
          </li>
          <li>
            <strong>User Interviews & Testing:</strong> MS Teams, Google Forms
          </li>
          <li>
            <strong>Empathy Mapping & Persona Generation:</strong> Draw.io, Miro
          </li>
          <li>
            <strong>Information Architecture & User Flows:</strong> Figma or
            Lucidchart
          </li>
          <li>
            <strong>Low- & High-Fidelity Prototyping:</strong> Adobe XD
          </li>
          <li>
            <strong>Branding & Icons:</strong> Material Design
          </li>
          <li>
            <strong>Accessibility Testing:</strong> Contrast Checker
          </li>
        </ul>
      </section>

      <section className="project-section">
        <h3>Brainstorming & Design Process</h3>

        <div className="subsection">
          <p>
            <strong>Market Analysis</strong> — Conducted research on cooking
            existing cooking applications in the market. Market analysis allowed
            the design team to identify features benefiting new cooking
            applications.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>User Interviews</strong> — Conducted user interviews to
            identify what users like and don't like in existing cooking apps or
            in their normal cooking routine. Findings from user interviews were
            synthesized into <em>empathy maps</em> to identify what users do,
            think, feel, and say when thinking about and performing the action
            of recipe finding and cooking.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Empathy Mapping & Persona Development</strong> — Developed
            empathy maps and user personas to represent primary user groups such
            as Busy Students, Young Professionals, and Health-Conscious
            Beginners. These personas guided design priorities such as fast
            recipe discovery, grocery list integration, and AI-driven
            personalization.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Information Architecture & User Flow</strong> — Mapped user
            flows for core interactions including finding recipes, generating AI
            meal plans, and joining virtual cooking classes. This helped ensure
            intuitive navigation and minimized cognitive load for first-time
            users.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Business Modeling</strong> — Outlined potential monetization
            strategies, including freemium access with premium recipe packs and
            virtual class subscriptions. Considered partnerships with local
            grocers for ingredient delivery integration and brand sponsorships
            for cookware or health products.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Low- & High-Fidelity Prototyping</strong> — Created an
            initial layout and component arrangement to visualize the cooking
            app. High-fidelity prototyping in Adobe XD allowed stakeholders to
            preview interaction flow and provide usability feedback.
          </p>
          <p>
            You can explore the High-Fidelity prototype here:{" "}
            <a
              href="https://xd.adobe.com/view/e740af88-b63b-4e38-95d5-d20c346ec112-b213/?fullscreen&hints=off"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View High-Fidelity Prototype →
            </a>
          </p>

          <figure className="project-figure">
            <ZoomableImg
              src={wireframe1}
              alt="Wireframe 1"
              className="project-image"
              onZoom={openLB}
            />
            <ZoomableImg
              src={wireframe2}
              alt="Wireframe 2"
              className="project-image"
              onZoom={openLB}
            />
            <ZoomableImg
              src={wireframe3}
              alt="Wireframe 3"
              className="project-image"
              onZoom={openLB}
            />
            <ZoomableImg
              src={wireframe4}
              alt="Wireframe 4"
              className="project-image"
              onZoom={openLB}
            />
            <figcaption>
              <strong>Figure 1.</strong> Early mockups illustrating layout
              concept and component arrangement for the cooking app.
            </figcaption>
          </figure>
        </div>

        <div className="subsection">
          <p>
            <strong>Usability Heuristics</strong> — Applied{" "}
            <em>accessibility and consistency principles</em>, ensuring that
            colors meet contrast ratios and icons follow industry standards.
            Focused on <em>visibility of system status</em> (e.g., showing
            loading indicators during recipe generation),
            <em>user control and freedom</em> (e.g., the ability to cancel
            recipe generation or remove ingredients), and{" "}
            <em>error prevention</em> (e.g., filtering out allergens or
            unavailable ingredients). Emphasized
            <em>recognition rather than recall</em> by keeping recent recipes,
            shopping lists, and preferences visible on the main page.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>UX Laws</strong> — Guided by <em>Hick’s Law</em> to limit
            choices per screen and simplify user flow; <em>Fitts’s Law</em> by
            making key actions (e.g., “Add Ingredient,” “Generate Recipe”) large
            and easy to reach;
            <em>Miller’s Law</em> by grouping related information (e.g.,
            nutritional facts, cooking time, ingredients); and{" "}
            <em>Jakob’s Law</em> by using familiar icons and interaction
            patterns common in recipe and shopping apps.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Usability Testing</strong> — Usability testing with five
            participants is planned to gather feedback on task flow,
            readability, and icon clarity.
          </p>
        </div>

        <div className="subsection">
          <p>
            <strong>Design Process Documentation:</strong> — All design stages,
            from market analysis to the high-fidelity prototype, were
            documented.
          </p>
          <p>
            You can explore the Design Process Documentation here:{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Design Process Documentation →
            </a>
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>Outcome</h3>
        <p>
          The final prototype offers users an accessible and enjoyable cooking
          experience, enabling them to plan meals, generate recipes from
          available ingredients, and join interactive virtual cooking classes.
          Future iterations will focus on enhancing personalization and
          integrating nutrition tracking.
        </p>
      </section>

      <section className="project-section">
        <h3>Reflection</h3>
        <p>
          This project strengthened my understanding of designing mobile
          experiences for everyday usability. Collaborating in a
          multidisciplinary team improved my ability to communicate design
          rationale, balance user needs with technical constraints, and
          iteratively refine prototypes based on feedback.
        </p>
      </section>

      <hr />
      <div className="funding">
        <img className="ESS-logo" src={MSU} alt="MSU logo" />
        <div className="funding-text">
          This project was completed as a course project for the Montana State
          University UI Design course.
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

export default CookingApp;
