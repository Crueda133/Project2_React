import React, { useState } from "react";
import axios from "axios";
import "./../styles/SearchFormAdmin.css";

const SearchFormAdmin = ({ products, setProducts, setFilteredProducts }) => {
  const API_URL = "http://localhost:3001/properties"; // Change this to your actual API URL

  // New product state
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    city_name: "",
    department: "",
    price: "",
    country: "",
    description: "",
    product_galery_1_grand: "",
    catch_line: "",
    services: [],
    activities: [],
    arrivaldate: "",
    housing_name: "",
  });

  // Handle changes in the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle adding product - prevent default
  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      // Change axios - verificar con joshua si esta bien !
      const response = await axios.post(`${API_URL}/newProduct`);

      setProducts([response.data, ...products]);
      setFilteredProducts([response.data, ...products]);
      alert("Product added successfully!");

      // Reset the form
      setNewProduct({
        id: "",
        title: "",
        city_name: "",
        department: "",
        price: "",
        country: "",
        description: "",
        product_galery_1_grand: "",
        catch_line: "",
        services: [],
        activities: [],
        arrivaldate: "",
        housing_name: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  };

  return (
    <form className="admin-form" onSubmit={handleAddProduct}>
      <h2>Add New Product</h2>

      {/* First row: ID, Title, City Name */}
      <div className="row">
        <div className="form-group">
          <input
            type="text"
            name="id"
            placeholder="ID (Mandatory)"
            value={newProduct.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title (Mandatory)"
            value={newProduct.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city_name"
            placeholder="City Name (Mandatory)"
            value={newProduct.city_name}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* Second row: Price, Department, Services */}
      <div className="row">
        <div className="form-group">
          <input
            type="text"
            name="price"
            placeholder="Price (ex: '105.00 EUR' - Mandatory)"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="department"
            placeholder="Department (Mandatory)"
            value={newProduct.department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="services"
            placeholder="Services (comma-separated - Mandatory)"
            value={newProduct.services}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                services: e.target.value.split(",").map((s) => s.trim()),
              })
            }
            rows="1"
            required
          />
        </div>
      </div>

      {/* Third row: Image URL, Country, Arrival Date */}
      <div className="row">
        <div className="form-group">
          <input
            type="text"
            name="product_galery_1_grand"
            placeholder="Image URL (Mandatory)"
            value={newProduct.product_galery_1_grand}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={newProduct.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="arrivaldate"
            placeholder="Arrival Date (YYYY-MM-DD)"
            value={newProduct.arrivaldate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Fourth row: Description, Activities */}
      <div className="row">
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleInputChange}
            rows="1"
          />
        </div>
        <div className="form-group">
          <textarea
            name="activities"
            placeholder="Activities (comma-separated)"
            value={newProduct.activities}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                activities: e.target.value.split(",").map((a) => a.trim()),
              })
            }
            rows="1"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">
        Add Product
      </button>
    </form>
  );
};

export default SearchFormAdmin;
