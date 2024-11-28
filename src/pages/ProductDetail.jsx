import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css"; // Correct path to CSS in the styles folder

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image_url} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price} €</p>
      <p>
        Location: {product.city_name}, {product.country}
      </p>
    </div>
  );
}

export default ProductDetail;
