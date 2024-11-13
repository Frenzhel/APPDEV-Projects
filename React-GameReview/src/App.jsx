import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';
import Footer from './Footer';
import './index.css';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isLogin = () => (
      <div className="app">
            {isLoggedIn ? <Reviews /> : <Login onLogin={setIsLoggedIn} />}
        </div>
    )
    return (
        <div>
          {isLogin()}
          <Footer/>
        </div>
    )
}