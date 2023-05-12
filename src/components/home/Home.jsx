import Header from './Header';
// import Hero from './hero/Hero';
import Hero from '../../utils/hero/Hero';
import Conditions from './conditions/Conditions';
import VenueDetails from './venuedetails/VenueDetails';
import './home.scss';

const Home = () => {
  const cafeDetails = {
    title: 'Cafe Noir',
    desc: 'A casual Parisian-inspired cafe with a lively atmosphere and a wide assortment of eclairs, pastries, and sandwiches',
    rating: '4.7/5',
    showAllStars: true,
    showMoreInfoBtn: true,
    showBackBtn: false,
  };

  return (
    <div>
      <Header />
      <Hero cafeDetails={cafeDetails} />
      <Conditions />
      <VenueDetails />
    </div>
  );
};

export default Home;
