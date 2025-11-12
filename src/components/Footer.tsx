// static footer
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <small className="footer-copy">
          Copyright &copy; {currentYear} — Yvette D. Hastings
        </small>
      </div>
    </footer>
  );
};

export default Footer;
