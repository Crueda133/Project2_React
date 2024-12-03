// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="custom-navbar">
      {/* Navbar */}
      <nav
      // className="navbar navbar-expand-lg navbar-dark bg-dark"
      // style={{ background: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
