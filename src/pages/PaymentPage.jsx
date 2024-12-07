import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function PaymentPage({ products, setBookings }) {
  const navigate = useNavigate();
  const { id } = useParams(); // Retrieve product ID from URL params

  const handlePayment = () => {
    console.log("products:", products);
    console.log("id from params:", id);
    const product = products.find((p) => p.id === parseInt(id));
    console.log("Matched product:", product);
    if (product) {
      // Add product to bookings
      setBookings((prevBookings) => [
        ...prevBookings,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          city_name: product.city_name,
          country: product.country,
          description: product.description,
          image: product.product_galery_1_grand,
        },
      ]);

      console.log("Booking added:", product); // Debug log

      // Navigate to PaymentConfirmed
      navigate(`/payment-confirmed/${id}`);
    } else {
      console.error("Product not found for ID:", id);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>
        You are one step away from booking your dream stay! Click "Pay Now" to
        confirm.
      </p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default PaymentPage;
