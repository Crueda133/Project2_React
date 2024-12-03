import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage({ products, productId }) {
  const navigate = useNavigate();

  // Handle payment submission
  const handlePayment = (id) => {
    console.log("Proceeding to payment for product ID:", id); // Debugging the ID
    navigate(`/payment-confirmed/${id}`); // Navigate with the correct ID
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>
        You are only one step away from booking your dream stay! This is where
        you can make payments for your bookings.
      </p>
      {/* Assuming `productId` comes from somewhere or is passed as a prop */}
      <button onClick={() => handlePayment(productId)}>Pay Now</button>
    </div>
  );
}

export default PaymentPage;
