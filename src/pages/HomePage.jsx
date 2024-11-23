import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import SearchForm from "../components/SearchForm";

function HomePage() {
  return (
    <div>
      {/* Podemos agregar el logo en la parte izquierda */}
      <header>
        <h1>Mi Casa es Tu Casa</h1>
        <p>
          Experience warm Mexican hospitality at our European destinations. Your
          home away from home, wherever you go.
        </p>
      </header>
    </div>
  );
}

export default HomePage;
