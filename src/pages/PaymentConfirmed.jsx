import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/PaymentConfirmed.css";

function PaymentConfirmed({ products, setBookings, bookings }) {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Payment Confirmed - Product ID:", id);

  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div className="sorry-message">Product not found.</div>;
  }

  const handleManageBooking = () => {
    navigate(`/bookings/${product.id}`);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (email) {
      console.log("Email submitted:", email);
      alert("Thank you for subscribing!");
      // You can add logic to send this email to your backend here.
    }
  };

  return (
    <div className="payment-confirmed-container">
      <h1>Congratulations!</h1>
      <p>
        You have reserved <strong>{product.title}</strong> for{" "}
        <strong>{product.price}</strong>.
      </p>

      <div className="product-details">
        <h2>Details:</h2>
        <ul>
          <li>
            Location: {product.city_name}, {product.country}
          </li>
          <li>Description: {product.description}</li>
          <li>Activities: {product.activities.join(", ")}</li>
        </ul>
      </div>
      <div className="buttons-row">
        <a href="/" className="button">
          Back to Home
        </a>
        <button className="button" onClick={handleManageBooking}>
          Manage Booking
        </button>
        <form className="email-container" onSubmit={handleSubscription}>
          <input
            type="email"
            name="email"
            placeholder="Type email to receive your information & offers"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <img
        src={product.product_galery_1_grand}
        alt={product.title}
        className="product-image"
      />
    </div>
  );
}

export default PaymentConfirmed;
