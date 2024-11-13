import React, { useState } from 'react';
import './index.css';

export default function Login({ onLogin }) {
    const account = {
        username: "admin",
        password: "admin"
    };

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleUserNameChange(event) {
        setUserName(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleLogin() {
        if (userName === account.username && password === account.password) {
            setError('')
            onLogin(true)
        } else {
            setError('Invalid username or password')
        }
    }
    
    const renderLogin = () => (
        <div className="login-container">
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            <label>Username:</label>
            <input type="text" onChange={handleUserNameChange} />
            <label>Password:</label>
            <input type="password" onChange={handlePasswordChange} />
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error">{error}</p>}
        </div>
    )

    return (
        <div>
            {renderLogin()}
        </div>
    )
}
