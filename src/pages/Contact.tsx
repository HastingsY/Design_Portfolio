import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../styles/Pages.css";
import "../styles/Contact.css";

const Contact = () => (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <h2>
        <strong>Contact Me</strong>
      </h2>
      <p>Have a question or a project in mind? I’d love to hear from you.</p>
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Contact;
