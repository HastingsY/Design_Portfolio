// navigation links in header
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Navigation = () => {
  return (
    <nav className="nav" aria-label="Primary">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About Me
      </NavLink>

      <NavLink
        to="/education"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Skills & Experience
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
