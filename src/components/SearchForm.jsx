import React, { useState } from "react";
import "../styles/Form.css";

function SearchForm({ onFilter, departments = [], cities = [] }) {
  const [filters, setFilters] = useState({
    country: "",
    price: "",
    department: "",
    city_name: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters); // Pass filters to parent component
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="country">Destination</label>
        <input
          type="text"
          id="country"
          name="country"
          value={filters.country}
          onChange={handleChange}
          placeholder="Enter destination"
        />
      </div>

      <div className="form-group">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          name="department"
          value={filters.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {/* Ensure departments is an array */}
          {departments && departments.length > 0 ? (
            departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))
          ) : (
            <option value="">No departments available</option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="city_name">City Name</label>
        <select
          id="city_name"
          name="city_name"
          value={filters.city_name}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {/* Ensure cities is an array */}
          {cities && cities.length > 0 ? (
            cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))
          ) : (
            <option value="">No cities available</option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <select
          id="price"
          name="price"
          value={filters.price}
          onChange={handleChange}
        >
          <option value="">Select Price Range</option>
          <option value="under_200">Less than 200€</option>
          <option value="200_to_500">200€ - 500€</option>
          <option value="500_to_1000">500€ - 1000€</option>
          <option value="over_1000">More than 1000€</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
