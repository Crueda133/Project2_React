// PaymentConfirmed.jsx
import React from "react";
import { useParams } from "react-router-dom";

function PaymentConfirmed() {
  const { id } = useParams(); // Extract product ID from URL params
  const product = {
    id,
    name: "Example Product",
    price: 200,
    city_name: "Paris",
    country: "France",
    description: "A beautiful place to stay",
  };

  return (
    <div className="payment-confirmed">
      <h1>Congratulations!</h1>
      <p>
        You have just reserved <strong>{product.name}</strong> for{" "}
        <strong>{product.price}€</strong>.
      </p>
      <p>Details of your reservation:</p>
      <ul>
        <li>
          Location: {product.city_name}, {product.country}
        </li>
        <li>Description: {product.description}</li>
        <li>Price: {product.price}€</li>
      </ul>
    </div>
  );
}

export default PaymentConfirmed;
