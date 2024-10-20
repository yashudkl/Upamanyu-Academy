import React from "react";
import { useNavigate } from 'react-router-dom'; //For redirection
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  // Handles Login Button Click
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };
  return (
    <div className="Header">
      <header>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#Lectures">Lectures<span style={{ fontSize: '12px' }}>          &#x25BC;</span>
              </a>
              <ul className="dropdown-menu">
                <li>Grade 10</li>
                <li>Grade 11</li>
                <li>Grade 12</li>
                <li>Entrance</li>
              </ul>
            </li>
            <li>
              <a href="#Live">Live</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#Questions">Questions <span style={{ fontSize: '12px' }}> &#x25BC;</span>
              </a>
              <ul className="dropdown-menu">
                <li>Grade 10</li>
                <li>Grade 11</li>
                <li>Grade 12</li>
                <li>Entrance</li>
              </ul>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
        <button className="button" onClick={handleLoginClick} >Login in</button>
        <button className="button" onClick={handleLoginClick} >Sign up</button>
        </div>
       
      </header>
    </div>
  );
}

export default Header;
