// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import Products from "./components/Products";
import Carousel from "./components/Carousel"; // Make sure the Carousel import stays here
import ProductDetail from "./pages/ProductDetail";
import PaymentPage from "./pages/PaymentPage";
import PaymentConfirmed from "./pages/PaymentConfirmed";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [services, setServices] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/properties");
      const data = await response.json();

      console.log("Full API Data:", data); // Debugging the full API response

      if (Array.isArray(data)) {
        setProducts(data); // Use the array directly for products
        setFilteredProducts(data); // Set filtered products

        // Extract unique departments
        const uniqueDepartments = Array.from(
          new Set(data.map((product) => product.department))
        );
        console.log("Unique Departments:", uniqueDepartments);
        setDepartments(uniqueDepartments); // Update state with departments

        // Extract unique city names for destinations
        const uniqueCities = Array.from(
          new Set(data.map((product) => product.city_name))
        );
        console.log("Unique Destinations:", uniqueCities);
        setDestinations(uniqueCities); // Update state with destinations

        // Extract unique services
        const allServices = data.flatMap((product) => product.services); // Combine all services
        const uniqueServices = Array.from(new Set(allServices)); // Remove duplicates
        console.log("Unique Services:", uniqueServices);
        setServices(uniqueServices);
      } else {
        console.log("Unexpected API response format. Expected an array.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (filters) => {
    console.log("Filters applied:", filters);
    let filtered = [...products]; // Copy the original products array

    // Filtro de destinos (país o ciudad)
    if (filters.country) {
      filtered = filtered.filter((product) =>
        product.city_name.toLowerCase().includes(filters.country.toLowerCase())
      );
    }

    if (filters.department) {
      filtered = filtered.filter((product) =>
        product.department
          .toLowerCase()
          .includes(filters.department.toLowerCase())
      );
    }

    if (filters.services) {
      filtered = filtered.filter((product) =>
        product.services.includes(filters.services)
      );
    }

    if (filters.price) {
      if (filters.price === "under_100") {
        filtered = filtered.filter((product) => product.price < 100);
      } else if (filters.price === "100_to_150") {
        filtered = filtered.filter(
          (product) => product.price >= 100 && product.price <= 150
        );
      } else if (filters.price === "150_to_250") {
        filtered = filtered.filter(
          (product) => product.price > 150 && product.price <= 250
        );
      } else if (filters.price === "over_250") {
        filtered = filtered.filter((product) => product.price > 250);
      }
    }

    setFilteredProducts(filtered); // Update filtered products
  };

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="content">
          <Routes>
            {/* Main Page Route */}
            <Route
              path="/"
              element={
                <>
                  {/* Show the Carousel only on the main page */}
                  <Carousel />
                  <SearchForm
                    onFilter={handleFilter} // Pass the filter handler to SearchForm
                    destinations={destinations}
                    departments={departments}
                    services={services}
                  />
                  <Products products={filteredProducts} />{" "}
                  {/* Display filtered products */}
                </>
              }
            />

            {/* Product Detail Route */}
            <Route
              path="/product/:id"
              element={<ProductDetail products={products} />} // Use the original products array
            />

            {/* Payment Page Route */}
            <Route path="/payment/:id" element={<PaymentPage />} />

            {/* Payment Confirmation Route */}
            <Route
              path="/payment-confirmed/:id"
              element={<PaymentConfirmed />}
            />

            {/* Catch-All Route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
