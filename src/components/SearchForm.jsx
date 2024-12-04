import React, { useState } from "react";
import "../styles/Form.css";
import SearchFormLists from "./SearchFormLists";

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
    setFilters(newFilters); // Update filters state
    onFilter(newFilters); // Notify parent component about changes
  };

  // Manejar selección de un ítem en los dropdowns
  const handleItemClick = (item, type) => {
    console.log(`Selected ${type}:`, item);
    const newFilters = { ...filters, [type]: item }; // Update filters with selected item
    setFilters(newFilters); // Reflect the selection in the input field
    onFilter(newFilters); // Notify parent component

    // Close the dropdown
    if (type === "country") setShowDestinations(false);
    if (type === "department") setShowDepartments(false);
    if (type === "services") setShowServices(false);
  };

  // Resetear los filtros
  const handleReset = () => {
    const defaultFilters = {
      country: "",
      price: "",
      department: "",
      services: "",
    };
    setFilters(defaultFilters); // Reset local filters
    onFilter(defaultFilters); // Reset parent filter logic
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
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
          onBlur={() => setTimeout(() => setShowDestinations(false), 200)}
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
          onBlur={() => setTimeout(() => setShowDepartments(false), 200)}
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
          onBlur={() => setTimeout(() => setShowServices(false), 200)}
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
        <label>Price</label>
        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="price-filter"
        >
          <option value="">Any</option>
          <option value="under_100">Under 100</option>
          <option value="100_to_150">100 to 150</option>
          <option value="150_to_200">150 to 200</option>
          <option value="over_200">Over 200</option>
        </select>
      </div>

      {/* Reset Button */}
      <button type="button" onClick={handleReset} className="reset-btn">
        Reset Filters
      </button>
    </form>
  );
}

export default SearchForm;
