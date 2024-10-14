import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#Lectures">Lectures</a>
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
              <a href="#Questions">Questions</a>
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
        <button className="button">Sign in</button>
      </header>
    </div>
  );
}

export default Header;
