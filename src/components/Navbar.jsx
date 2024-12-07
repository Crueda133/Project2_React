// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HHgoodlogo.png";

function Navbar({ onAdminToggle, isAdmin, setIsAdmin }) {
  return (
    <div className="custom-navbar">
      {/* Navbar */}
      <nav>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
            HomeHeaven
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookings">
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link admin-button ${isAdmin ? "active" : ""}`}
                  onClick={() => {
                    setIsAdmin(!isAdmin);
                  }}
                >
                  {isAdmin ? "Exit Admin Mode" : "Admin"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
