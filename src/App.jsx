import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components;
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import Products from "./components/Products";
// Pages
import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import Bookings from "./pages/Bookings";
import ContactUs from "./pages/ContactUs";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";
import PaymentPage from "./pages/PaymentPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import JobOffers from "./pages/JobOffers";
import Account from "./pages/Account";
import AddOrEditProduct from "./pages/AddOrEditProduct";

function App() {
  return (
    <Router>
      {/* Navbar at the top */}
      <div className="navbar">
        <Navbar />
      </div>
      {/* Main content area with SearchForm and Products */}
      <div className="content">
        <Content />
        <Routes>
          {/* Content is the home page with SearchForm and Products */}
          <Route
            path="/"
            element={
              <>
                <SearchForm className="searchForm" />
                <Products className="products" />
              </>
            }
          />
          {/* Navbar Routes */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/account" element={<Account />} />
          {/* podemos decir que esta parte solo sera visible si tienes Admin rights  */}
          <Route path="/add-or-edit-product" element={<AddOrEditProduct />} />
          {/* Esto va en el centro  - Products and SearchForm*/}
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* //esto va en el footer  */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/job-offers" element={<JobOffers />} />
        </Routes>
      </div>
      {/* Footer at the bottom */}
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}
export default App;
