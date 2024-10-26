import React from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/Signup'); // Redirect to Signup page
  }//Handling required 
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
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
