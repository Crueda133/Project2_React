import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../styles/ProductDetail.css";

function ProductDetail({ products, setBookings, bookings }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === id);
  const handlePayment = () => {
    console.log("products:", products);
    console.log("id from params:", id);
    const product = products.find((p) => p.id === id);
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

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.product_galery_1_grand} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price} €</p>
      <p>
        Location: {product.city_name}, {product.country}
      </p>

      {/* Button to navigate to the Payment Confirmation page */}
      <button className="pay-now-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default ProductDetail;
