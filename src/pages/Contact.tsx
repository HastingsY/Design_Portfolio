import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Pages.css";
import { Link } from "@react-email/components";

const Email = () => {
  return <Link href="yvettehastings@montana.edu">Contact Me</Link>;
};

export const Contact = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div>
          <h2>
            <strong>Contact Me </strong>
          </h2>
          <p>Email {<Email />}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
