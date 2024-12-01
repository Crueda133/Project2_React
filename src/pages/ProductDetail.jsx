import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductDetail.css";

function ProductDetail({ products }) {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

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
      <Link to={`/payment-confirmed/${product.id}`}>
        <button className="pay-now-btn">Pay Now</button>
      </Link>
    </div>
  );
}

export default ProductDetail;
