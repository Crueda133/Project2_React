import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function Navbar({ carouselImages }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Carousel como fondo */}
      <div style={{ position: "absolute", zIndex: "-1", width: "100%" }}>
        <Carousel images={carouselImages} />
      </div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ background: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            HotelFinder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
