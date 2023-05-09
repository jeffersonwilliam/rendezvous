import Header from './Header';
import Hero from './hero/Hero';
import Conditions from './conditions/Conditions';
import VenueDetails from './venuedetails/VenueDetails';
import './home.scss';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Conditions />
      <VenueDetails />
    </div>
  );
};

export default Home;
