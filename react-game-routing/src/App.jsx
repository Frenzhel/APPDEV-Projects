import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Games from './components/Games';
import NotFound from './components/NotFound';
import Game from './components/Game';
import './index.css';

export default function App() {
  return (
    <>
      <nav className="nav">
        <h1>My Game Lists</h1>
        <br />
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/games" className="nav-link">Games</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" >
          <Route index element={<Games />} />
          <Route path=':gameId' element={<Game />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
