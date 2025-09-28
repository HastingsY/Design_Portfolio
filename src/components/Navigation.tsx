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
        to="/projects"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Projects
      </NavLink>
    </nav>
  );
};

export default Navigation;
