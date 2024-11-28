import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import Products from "./components/Products";
import Carousel from "./components/Carousel"; // Import the Carousel component
import ProductDetail from "./pages/ProductDetail"; // Import ProductDetail page

function App() {
  const [products, setProducts] = useState([]); // Initialize as empty array
  const [filteredProducts, setFilteredProducts] = useState([]); // Initialize as empty array
  const [departments, setDepartments] = useState([]); // Initialize departments as empty array
  const [cities, setCities] = useState([]); // Initialize cities as empty array

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/properties");
      const data = await response.json();
      console.log("API Data:", data); // Log the fetched data

      // Check if data is directly an array or if it's wrapped in properties
      if (Array.isArray(data)) {
        setProducts(data); // Use data directly if it's an array
        setFilteredProducts(data); // Initially show all products
      } else if (data.properties && Array.isArray(data.properties)) {
        setProducts(data.properties); // Use properties if the response contains it
        setFilteredProducts(data.properties); // Initially show all products
      } else {
        console.log("No products found in API response");
      }

      // Optionally, fetch departments and cities (if separate API calls are needed)
      setDepartments(data.departments || []);
      setCities(data.cities || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  // Filter products based on search criteria
  const handleFilter = (filters) => {
    let filtered = [...products]; // Copy the original products array

    // Apply filters
    if (filters.country) {
      filtered = filtered.filter((product) =>
        product.country.toLowerCase().includes(filters.country.toLowerCase())
      );
    }
    if (filters.price) {
      filtered = filtered.filter((product) =>
        product.price.includes(filters.price)
      );
    }
    if (filters.department) {
      filtered = filtered.filter((product) =>
        product.department
          .toLowerCase()
          .includes(filters.department.toLowerCase())
      );
    }
    if (filters.city_name) {
      filtered = filtered.filter((product) =>
        product.city_name
          .toLowerCase()
          .includes(filters.city_name.toLowerCase())
      );
    }

    setFilteredProducts(filtered); // Apply the filter results
  };

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          {/* Add Carousel above the products */}
          <Carousel />

          {/* Pass the filter function and departments/cities data as props to SearchForm */}
          <SearchForm
            onFilter={handleFilter}
            departments={departments}
            cities={cities}
          />

          {/* Show products list */}
          <Products products={filteredProducts} />
        </div>

        <div className="footer">
          <Footer />
        </div>

        {/* Setup routes for product detail page */}
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
