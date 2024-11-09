// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/Signup'); // Redirect to Signup page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for login
    axios.post('http://localhost:3001/login', {email, password})
      .then(result => {
        console.log(result);
        if(result.data == "Success"){
          navigate('/')
        }
        // Redirect to another page or perform further actions on success
        navigate('/'); // Adjust path as needed
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="create-account-section">
          <p>Don't have an account?</p>
          <button className="create-account-btn" onClick={handleSignupClick}>Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
