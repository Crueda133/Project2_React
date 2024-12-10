import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Products.css";

function Products({ products, isAdmin, onDelete, onEdit }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(product)) {
        return prevFavorites.filter((fav) => fav !== product);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const isFavorite = (productId) => favorites.includes(productId);

  const handleDeleteClick = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      onDelete(productId);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "price" ? parseFloat(value) || 0 : value;

    setEditingProduct({
      ...editingProduct,
      [name]: sanitizedValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onEdit && editingProduct) {
      onEdit(editingProduct);
      setEditingProduct(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

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
              {editingProduct?.id === product.id && isAdmin ? (
                <>
                  <label>
                    Title:
                    <input
                      type="text"
                      name="title"
                      value={editingProduct.title}
                      onChange={handleFormChange}
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      name="description"
                      value={editingProduct.description}
                      onChange={handleFormChange}
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="number"
                      name="price"
                      value={editingProduct.price || 0}
                      onChange={handleFormChange}
                    />
                  </label>
                  <label>
                    Image URL:
                    <input
                      type="text"
                      name="product_galery_1_grand"
                      value={editingProduct.product_galery_1_grand}
                      onChange={handleFormChange}
                    />
                  </label>
                  <div className="form-actions">
                    <button onClick={handleFormSubmit}>Save Changes</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{product.title}</h3>
                  <p>{product.city_name}</p>
                  <p>{product.catch_line}</p>
                  <p className="price">{product.price}</p>

                  <button
                    className={`favorite-button ${
                      favorites.includes(product) ? "favorited" : ""
                    }`}
                    onClick={() => toggleFavorite(product)}
                  >
                    {favorites.includes(product) ? "♥" : "♡"}
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="view-offer-link"
                  >
                    See the offer ➡️
                  </Link>

                  {isAdmin && (
                    <>
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteClick(product.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
