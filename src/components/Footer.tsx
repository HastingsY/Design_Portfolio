// static footer
import Navigation from "./Navigation";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <Navigation />
        <small className="footer-copy">
          Copyright &copy; {currentYear} — Yvette D. Hastings
        </small>
      </div>
      {/* (Optional) add a <div className="footer-right">…</div> for anything else later */}
    </footer>
  );
};

export default Footer;
