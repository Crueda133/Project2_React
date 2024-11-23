import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
