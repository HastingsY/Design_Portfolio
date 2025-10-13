// static header
import Navigation from "./Navigation";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Yvette D. Hastings</h1>
      </div>

      <div>
        <h2>Design Portfolio</h2>
      </div>

      <hr />

      <Navigation />
    </header>
  );
};

export default Header;
