import React from "react";
import "../styles/JobOffers.css"; // Correct path for the CSS file

function JobOffers() {
  return (
    <div className="job-offers-container">
      <h2>Join the HomeHeaven Team!</h2>
      <p>
        We are always looking for talented people to join our diverse team.
        Check out our latest job offers below:
      </p>

      {/* Teacher Assistant Job Offer */}
      <div className="job-offer">
        <h3>Developper Assistant - Help Our Super Busy Developper!</h3>
        <p>
          Our amazing developper has a lot on his plate: managing the team, and
          keeping up with his adorable dog Ragnar. He's also a pro surfer and
          needs help managing the workload! If you love working, have great
          organizational skills, and can handle a dog that thinks he's a CEO,
          this is the job for you. Oh, and if you can make a mean cup of coffee,
          that's a huge plus!
        </p>
      </div>

      {/* Job Offers by Language */}
      <h3>Job Offers By Language</h3>

      {/* Portuguese Job Offer */}
      <div className="job-offer">
        <h4>Portuguese Speaker - "Você fala português?"</h4>
        <p>
          If you're fluent in Portuguese, you are the perfect fit for our team.
          We need someone who can bring their skills to the table and help us
          expand into the Portuguese-speaking market. Bonus points if you know
          how to make a delicious Bica and love beach vibes!
        </p>
      </div>

      {/* Romanian Job Offer */}
      <div className="job-offer">
        <h4>Romanian Speaker - "Vorbești română?"</h4>
        <p>
          Calling all Romanians! We need someone who is passionate about our
          mission and can help us connect with the vibrant Romanian community.
          If you are creative, organized, and love a good bowl of sarmale, we
          want you on our team!
        </p>
      </div>

      {/* Indian Job Offer */}
      <div className="job-offer">
        <h4>Indian Speaker - "क्या आप हिंदी बोलते हैं?"</h4>
        <p>
          Namaste! Are you fluent in Hindi or any other Indian language? We are
          looking for someone who is ready to take on exciting challenges and
          bring a dose of creativity. Whether you're from Delhi, Mumbai, or
          anywhere in between, come help us grow and share the love of
          HomeHeaven. And yes, chai breaks are a must!
        </p>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>How to Apply:</h3>
        <p>
          If you're interested in any of the positions above, please send your
          resume to:
        </p>
        <p>
          <strong>For the German office (Berlin):</strong> <br />
          Contact: Erian Flores – <i>Chief Dog Wrangler & Surf Guru</i> <br />
          Email:{" "}
          <a href="mailto:erian.flores@homeheaven.com">
            erian.flores@homeheaven.com
          </a>
        </p>
        <p>
          <strong>For the French office (Aix-en-Provence):</strong> <br />
          Contact: Cristina Rueda –{" "}
          <i>Head of Multinational Relations & Espresso Enthusiast</i> <br />
          Email:{" "}
          <a href="mailto:cristina.rueda@homeheaven.com">
            cristina.rueda@homeheaven.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default JobOffers;
