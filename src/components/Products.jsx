import React from "react";
import "../styles/Products.css"; // Corrected path

function Products({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.product_galery_1_grand}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.city_name}</p>
            <p>{product.price}</p>
            <p>{product.catch_line}</p>
            <a href={product.link} className="view-offer-link">
              See the offer
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
