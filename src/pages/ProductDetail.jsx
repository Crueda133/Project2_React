import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetail.css";

function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === id);

  const handlePayment = async () => {
    if (!product) {
      console.error("Product not found.");
      return;
    }

    try {
      // POST to backend server's /bookings endpoint
      const response = await axios.post("http://localhost:3001/bookings", {
        id: product.id,
        title: product.title,
        price: product.price,
        city_name: product.city_name,
        country: product.country,
        description: product.description,
        image: product.product_galery_1_grand,
      });

      console.log("Response from backend server:", response.data);

      if (response.status === 201) {
        // Successfully added booking to the server
        console.log("Booking added successfully.");
        navigate(`/payment-confirmed/${id}`);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Failed to process payment:", error);
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

      {/* Button to initiate payment logic */}
      <button className="pay-now-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default ProductDetail;
