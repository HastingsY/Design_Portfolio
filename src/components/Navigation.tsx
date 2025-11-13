// navigation links in header
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

type NavigationProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ isOpen, onLinkClick }) => {
  return (
    <nav
      id="primary-nav"
      className={`nav ${isOpen ? "nav--open" : ""}`}
      aria-label="Primary"
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={onLinkClick}
      >
        About Me
      </NavLink>

      <NavLink
        to="/CV"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={onLinkClick}
      >
        Curriculum Vitae
      </NavLink>

      <NavLink
        to="/education"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={onLinkClick}
      >
        Skills &amp; Experience
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={onLinkClick}
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={onLinkClick}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;

