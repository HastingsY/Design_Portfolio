// static header with responsive navigation
import { useState } from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-title">
          <h1>Yvette D. Hastings</h1>
          <h2>Design Portfolio</h2>
        </div>

        {/* Hamburger button – only visible on mobile via CSS */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      <hr />

      {/* Navigation links – inline on desktop, dropdown on mobile */}
      <Navigation isOpen={menuOpen} onLinkClick={closeMenu} />
    </header>
  );
};

export default Header;
