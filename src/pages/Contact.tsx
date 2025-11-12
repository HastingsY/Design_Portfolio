import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import "../styles/Contact.css";
import "../styles/Pages.css";

const Contact = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="contact-center">
          <h2 className="pageTitle">
            <strong>Contact Me</strong>
          </h2>
          <p className="font">
            Have a question or a project in mind? I’d love to hear from you.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
