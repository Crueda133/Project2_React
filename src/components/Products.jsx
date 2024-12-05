import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

function Products({ products, isAdmin }) {
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
            <div className="details">
              <h3>{product.title}</h3>
              <p>{product.city_name}</p>
              <p>{product.catch_line}</p>
            </div>
            <div className="right-column">
              <p className="price">{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-offer-link">
                See the offer ➡️
              </Link>
              {isAdmin && <button>Edit</button>}
              {isAdmin && <button>Delete</button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
