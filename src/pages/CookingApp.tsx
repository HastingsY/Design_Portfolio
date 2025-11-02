// cooking app project page
import MSU from "../assets/MSUlogo.jpg";

const CookingApp = () => (
  <article>
    <h3>
      <strong>Cooking App</strong>
    </h3>
    <p>Coming soon…</p>
    <hr />
    <div className="funding">
      <img className="MSU-logo" src={MSU} alt="MSU logo" />
      <div className="funding-text">
        This project was completed for the Montana State University UI Design
        course.
      </div>
    </div>
  </article>
);
export default CookingApp;
