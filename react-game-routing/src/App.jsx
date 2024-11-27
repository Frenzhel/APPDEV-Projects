import { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Games from "./components/Games";
import NotFound from "./components/NotFound";
import Game from "./components/Game";
import "./index.css";

export default function App() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <>
      {/* Only show the navigation bar if the user has entered */}
      {isEntered && (
        <nav className="nav">
          <h1>My Game Lists</h1>
          <br />
          <ul>
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/games" className="nav-link">Games</Link></li>
          </ul>
        </nav>
      )}

      <Routes>
        {/* Pass the setIsEntered and isEntered states to the Home component */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={<Home setIsEntered={setIsEntered} isEntered={isEntered} />}
        />
        <Route path="/games">
          <Route index element={<Games />} />
          <Route path=":gameId" element={<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
