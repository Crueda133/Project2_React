import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Products.css";

function Products({ products, isAdmin }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  useEffect(() => {
    axios
      .get(`${API_URL}/favorites`)
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => console.error("Error fetching favorites", error));
  }, [API_URL]);

  const toggleFavorite = async (product) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === product.id);

    if (isAlreadyFavorite) {
      try {
        await axios.delete(`${API_URL}/favorites/${product.id}`);
        setFavorites((prev) => prev.filter((fav) => fav.id !== product.id));
      } catch (error) {
        console.error("Error removing favorite", error);
      }
    } else {
      // Add to favorites
      try {
        const response = await axios.post(`${API_URL}/favorites`, product);
        setFavorites((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Error adding to favorites", error);
      }
    }
  };

  const handleDeleteClick = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/properties/${productId}`);
        alert("Product deleted successfully!");
        setFavorites((prev) =>
          prev.filter((product) => product.id !== productId)
        );
      } catch (error) {
        console.error("Failed to delete product", error);
      }
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${API_URL}/properties/${editingProduct.id}`,
        editingProduct
      );
      alert("Product updated successfully");
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving changes", error);
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
                  <p className="price">${product.price}</p>

                  <button
                    className={`favorite-button ${
                      favorites.some((fav) => fav.id === product.id)
                        ? "favorited"
                        : ""
                    }`}
                    onClick={() => toggleFavorite(product)}
                  >
                    {favorites.some((fav) => fav.id === product.id) ? "♥" : "♡"}
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
