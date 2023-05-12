import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import MoreInfo from './components/more-info/MoreInfo';
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Home />} />
          <Route path='/more-info' element={<MoreInfo />} />
          {/* <Home /> */}
        </Routes>
      </BrowserRouter>
      <Nav />
    </>
  );
}

export default App;
