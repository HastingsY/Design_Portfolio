// static header
import Navigation from "./Navigation";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Design Portfolio</h1>
      </div>

      <div>
        <h2>Yvette D. Hastings</h2>
      </div>

      <hr />

      <Navigation />
    </header>
  );
};

export default Header;
