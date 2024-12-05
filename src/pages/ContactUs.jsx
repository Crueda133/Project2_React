import React from "react";
import "../styles/ContactUs.css"; // Correct path for the CSS file

function ContactUs() {
  return (
    <div className="contact-container">
      {/* German Office - Left Side */}
      <div className="contact-info left">
        <h3>For the German office (Berlin):</h3>
        <p>
          Contact: Erian Flores – <i>Co-Founder and Back-End Manager</i>
          <br />
          Email:{" "}
          <a href="mailto:erian.flores@homeheaven.com">
            erian.flores@homeheaven.com
          </a>
          <br />
          Phone: +49 30 123456789
          <br />
          Address: Alexanderplatz 1, 10178 Berlin, Germany
          <br />
          <strong>Find us on the map:</strong>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24364.004672754215!2d13.388859431626633!3d52.51703629813127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b20d91c221e551%3A0x6ad536f2ba220b3e!2sAlexanderplatz%20101%2C%2010178%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1614764370852!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </p>
      </div>

      {/* French Office - Right Side */}
      <div className="contact-info right">
        <h3>For the French office (Aix-en-Provence):</h3>
        <p>
          Contact: Cristina Rueda – <i>Co-Founder and Front-End Manager</i>
          <br />
          Email:{" "}
          <a href="mailto:cristina.rueda@homeheaven.com">
            cristina.rueda@homeheaven.com
          </a>
          <br />
          Phone: +33 4 12345678
          <br />
          Address: Fontaine de la Rotonde, 13100 Aix-en-Provence, France
          <br />
          <strong>Find us on the map:</strong>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21383.463110767362!2d5.442319003505375!3d43.52974272416053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c68f9be399467b%3A0x7a9759c3c2c61c88!2sFontaine%20de%20la%20Rotonde%2C%2013100%20Aix-en-Provence%2C%20France!5e0!3m2!1sen!2sus!4v1614765375105!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
