import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import Products from "./components/Products";
import Carousel from "./components/Carousel";
import ProductDetail from "./pages/ProductDetail";
import PaymentPage from "./pages/PaymentPage";
import PaymentConfirmed from "./pages/PaymentConfirmed";

function App() {
  const [products, setProducts] = useState([]); // Stores all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Stores filtered products
  const [departments, setDepartments] = useState([]); // Stores unique departments
  const [destinations, setDestinations] = useState([]); // Stores unique destinations
  const [services, setServices] = useState([]); // Stores unique services

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/properties");
      const data = await response.json();
      console.log("API Data Fetched:", data); // Log fetched data for debugging

      if (Array.isArray(data) && data.length > 0) {
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique departments
        const uniqueDepartments = Array.from(
          new Set(data.map((product) => product.department))
        );
        setDepartments(uniqueDepartments);

        // Extract unique cities
        const uniqueCities = Array.from(
          new Set(data.map((product) => product.city_name))
        );
        setDestinations(uniqueCities);

        // Extract unique services
        const allServices = data.flatMap((product) => product.services);
        const uniqueServices = Array.from(new Set(allServices));
        setServices(uniqueServices);
      } else {
        console.log("API response does not contain products data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Products State Updated:", products); // Log products after they are updated
  }, [products]);

  // Handle filtering logic
  const handleFilter = (filters) => {
    console.log("Filters applied:", filters); // Log filters for debugging
    let filtered = [...products]; // Clone the original products array

    // Filtrar por destino (país o ciudad)
    if (filters.country && filters.country.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.city_name.toLowerCase().includes(filters.country.toLowerCase())
      );
    }

    // Filtrar por departamento/región
    if (filters.department && filters.department.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.department
          .toLowerCase()
          .includes(filters.department.toLowerCase())
      );
    }

    // Filtrar por servicios
    if (filters.services && filters.services.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.services.some((service) =>
          service.toLowerCase().includes(filters.services.toLowerCase())
        )
      );
    }

    // Filtrar por rango de precios (conversión explícita de precio a número)
    if (filters.price) {
      filtered = filtered.filter((product) => {
        const productPrice = parseFloat(product.price); // Ensure price is treated as a number

        switch (filters.price) {
          case "under_100":
            return productPrice < 100;
          case "100_to_150":
            return productPrice >= 100 && productPrice <= 150;
          case "150_to_200":
            return productPrice > 150 && productPrice <= 200;
          case "over_200":
            return productPrice > 200;
          default:
            return true;
        }
      });
    }

    // Update the state with the filtered products
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar Component */}
        <div className="navbar">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="content">
          <Routes>
            {/* Main Page Route */}
            <Route
              path="/"
              element={
                <>
                  {/* Carousel shown only on the main page */}
                  <Carousel />
                  {/* Search Form for filtering products */}
                  <SearchForm
                    onFilter={handleFilter} // Pass the filter handler to SearchForm
                    destinations={destinations}
                    departments={departments}
                    services={services}
                  />
                  {/* Display filtered products or a message if none are found */}
                  {filteredProducts.length > 0 ? (
                    <Products products={filteredProducts} />
                  ) : (
                    <div className="sorry-message">
                      <i className="fas fa-sad-tear"></i>{" "}
                      {/* A professional emoji icon */}
                      Oops! We couldn't find any products matching your filters.
                      Try adjusting or removing some filters, and we're sure
                      you'll find an incredible deal on something you'll love
                      and can't wait to buy!
                    </div>
                  )}
                </>
              }
            />

            {/* Product Detail Route */}
            <Route
              path="/product/:id"
              element={<ProductDetail products={products} />} // Pass original products array
            />

            {/* Payment Page Route */}
            <Route
              path="/payment/:id"
              element={<PaymentPage products={products} />}
            />

            {/* Payment Confirmation Route */}
            <Route
              path="/payment-confirmed/:id"
              element={<PaymentConfirmed products={products} />}
            />

            {/* Catch-All Route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>

        {/* Footer Component */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
