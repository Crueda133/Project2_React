import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* Links container */}
      <ul>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/terms">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/job-offers">Job Offers</Link>
        </li>
      </ul>
      {/* Optional footer text, can be used for copyright */}
      <div className="footer-text">
        &copy; 2024 HotelFinder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
