import React, { useState } from "react";
import "../styles/Form.css";
import SearchFormLists from "./SearchFormLists"; // Import the reusable component

function SearchForm({
  onFilter,
  services = [],
  destinations = [],
  departments = [],
}) {
  const [filters, setFilters] = useState({
    country: "",
    price: "",
    department: "",
    services: "",
  });

  // Estados para mostrar u ocultar los dropdowns
  const [showDestinations, setShowDestinations] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Actualizar los filtros al escribir en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  // Manejar selección de un ítem en los dropdowns
  const handleItemClick = (item, type) => {
    console.log(`Selected ${type}:`, item);
    const newFilters = { ...filters, [type]: item }; // Update filters first
    setFilters(newFilters);
    console.log("Filters after update:", newFilters);
    onFilter(newFilters); // Pass updated filters to the parent
    setTimeout(() => {
      if (type === "country") setShowDestinations(false);
      if (type === "department") setShowDepartments(false);
      if (type === "services") setShowServices(false);
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form className="search-form">
      {/* Destinos */}
      <div className="form-group">
        <label htmlFor="country">Destination</label>
        <input
          type="text"
          id="country"
          name="country"
          value={filters.country}
          onChange={handleChange}
          placeholder="Enter destination"
          onFocus={() => setShowDestinations(true)}
          onBlur={() => setTimeout(() => setShowDestinations(false), 100)}
        />
        {showDestinations && (
          <SearchFormLists
            data={destinations}
            onItemClick={(item) => handleItemClick(item, "country")}
            title="Popular Destinations"
            listType="destination"
          />
        )}
      </div>

      {/* Departamento */}
      <div className="form-group">
        <label htmlFor="department">Department / Region</label>
        <input
          type="text"
          id="department"
          name="department"
          value={filters.department}
          onChange={handleChange}
          placeholder="Enter department"
          onFocus={() => setShowDepartments(true)}
          onBlur={() => setTimeout(() => setShowDepartments(false), 100)}
        />
        {showDepartments && (
          <SearchFormLists
            data={departments}
            onItemClick={(item) => handleItemClick(item, "department")}
            title="Available Departments"
            listType="department"
          />
        )}
      </div>

      {/* Servicios */}
      <div className="form-group">
        <label htmlFor="services">Services</label>
        <input
          type="text"
          id="services"
          name="services"
          value={filters.services}
          onChange={handleChange}
          placeholder="Enter services"
          onFocus={() => setShowServices(true)}
          onBlur={() => setTimeout(() => setShowServices(false), 100)}
        />
        {showServices && (
          <SearchFormLists
            data={services}
            onItemClick={(item) => handleItemClick(item, "services")}
            title="Available Services"
            listType="service"
          />
        )}
      </div>

      {/* Rango de precios */}
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <select
          id="price"
          name="price"
          value={filters.price}
          onChange={handleChange}
        >
          <option value="">Select Price Range</option>
          <option value="under_100">Less than 100€</option>
          <option value="100_to_150">100€ - 150€</option>
          <option value="150_to_250">150€ - 250€</option>
          <option value="over_250">More than 250€</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
