import React, { useEffect, useState } from "react";

function AdminPanel() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the API
    fetch("http://localhost:3001/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  const handleDelete = (id) => {
    // Delete a property
    fetch(`http://localhost:3001/properties/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProperties(properties.filter((property) => property.id !== id)); // Update the list
      })
      .catch((error) => console.error("Error deleting property:", error));
  };

  const handleAddProperty = () => {
    // Redirect to Add Property page or show a form here
    console.log("Add Property Clicked");
  };

  const handleEdit = (id) => {
    // Redirect to an Edit Property page or open an edit form
    console.log(`Edit Property with ID: ${id}`);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleAddProperty}>Add New Property</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.title}</td>
              <td>
                <button onClick={() => handleEdit(property.id)}>Edit</button>
                <button onClick={() => handleDelete(property.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
