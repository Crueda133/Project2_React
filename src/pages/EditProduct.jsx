import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams(); // Extract product id from URL
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:3001/properties";

  useEffect(() => {
    // Fetch product data based on the ID
    fetch(`${API_URL}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setError(null); // Clear previous errors on success
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError(err.message);
      });
  }, [id, API_URL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      const updatedProduct = await response.json();
      console.log("Updated product successfully:", updatedProduct);

      // Re-fetch the updated product data
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));

      alert("Product updated successfully!");
    } catch (err) {
      console.error("Error saving changes:", err);
      alert("Failed to save changes");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Sanitize and update the product state
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={product.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price || ""}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "price",
                  value: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
        </label>
        {/* Add more fields as needed */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
