// LL dashboard project page
import SlideDeck from "../components/SlideDeck";
import deckUrl from "../assets/environmental-dashboard.pdf";

const EnvironmentalDashboard = () => (
  <article>
    <h3>
      <strong>Environmental Monitoring Dashboard</strong>
    </h3>
    <SlideDeck fileUrl={deckUrl} />
  </article>
);
export default EnvironmentalDashboard;
