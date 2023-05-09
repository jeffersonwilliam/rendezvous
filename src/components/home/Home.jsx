import Header from './Header';
import Hero from './hero/Hero';
import Conditions from './conditions/Conditions';
import './home.scss';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Conditions />
    </div>
  );
};

export default Home;
