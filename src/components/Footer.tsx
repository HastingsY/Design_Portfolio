import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <p>&copy; {currentYear} Yvette D. Hastings</p>
      </div>
    </footer>
  );
};

export default Footer;
