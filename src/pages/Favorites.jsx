import axios from "axios";
import React, { useEffect, useState } from "react";

function Favourites() {
  const [favorites, setFavorites] = useState([]);
  const API_URL = "http://localhost:3001";

  useEffect(() => {
    // const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    axios
      .get(`${API_URL}/favorites`)
      .then((data) => {
        setFavorites(data.data);
        console.log(`favorites added:`, data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite products yet!</p>
      ) : (
        favorites.map((product) => (
          <div key={product.id} className="favorite-product-card">
            <img
              src={product.product_galery_1_grand}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>{product.city_name}</p>
            <p className="price">{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Favourites;
