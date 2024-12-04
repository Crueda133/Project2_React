import React from "react";
import { useParams } from "react-router-dom";
import "../styles/PaymentConfirmed.css";

function PaymentConfirmed({ products }) {
  const { id } = useParams(); // Get product ID from the URL
  console.log("Payment Confirmed - Product ID:", id); // Debugging the ID

  // Ensure the ID comparison is done correctly (either both as strings or both as numbers)
  const product = products.find((prod) => prod.id.toString() === id); // Compare directly as string or use parseInt if needed

  if (!product) {
    return <div className="sorry-message">Product not found.</div>; // Show message if product not found
  }

  return (
    <div className="payment-confirmed-container">
      <h1>Congratulations!</h1>
      <p>
        You have reserved <strong>{product.title}</strong> for{" "}
        <strong>{product.price}€</strong>.
      </p>

      <div className="product-details">
        <h2>Details:</h2>
        <ul>
          <li>
            Location: {product.city_name}, {product.country}
          </li>
          <li>Description: {product.description}</li>
          <li>Price: {product.price}€</li>
        </ul>
      </div>

      {/* Optional: Add product image */}
      <img
        src={product.product_galery_1_grand}
        alt={product.title}
        className="product-image"
      />

      {/* Optional: Add a "Back to Home" button */}
      <a href="/" className="button">
        Back to Home
      </a>
    </div>
  );
}

export default PaymentConfirmed;
