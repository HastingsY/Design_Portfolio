// LL dashboard project page
import SlideDeck from "../components/SlideDeck";
import deckUrl from "../assets/environmental-dashboard.pdf";
import mockUp from "../assets/LLdashboard_mockup.png";
import "../styles/EnvironmentalDashboard.css";

const EnvironmentalDashboard = () => (
  <article>
    <h3>
      <strong>Environmental Monitoring Dashboard</strong>
    </h3>
    <img className="mockUp" src={mockUp} />
    <SlideDeck fileUrl={deckUrl} />
  </article>
);
export default EnvironmentalDashboard;
