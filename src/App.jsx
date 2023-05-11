import Home from './components/home/Home';
import Nav from './components/nav/Nav';
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
          {/* <Home /> */}
        </Routes>
      </BrowserRouter>
      <Nav />
    </>
  );
}

export default App;
