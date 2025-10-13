// static footer
import Navigation from "./Navigation";
import "../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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

      {/* Right side: social icons */}
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/yvette-hastings-2a47231b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-link"
          title="LinkedIn"
        >
          <LinkedInIcon fontSize="large" />
        </a>

        {/* Email icon opens default mail client */}
        <a
          href={`mailto:yvettehastings@montana.edu?subject=${encodeURIComponent(
            "Portfolio contact"
          )}&body=${encodeURIComponent("Hi Yvette,")}`}
          aria-label="Email"
          className="social-link"
          title="Email"
        >
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
