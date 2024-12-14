import React, { useState, useEffect } from "react";

function Account() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    nationality: "",
    address: "",
    country: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Fetch account details on component mount
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch(`${API_URL}/accounts`);
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setSubmittedData(data[0]); // Assuming only one account
            setIsSubmitted(true);
          }
        } else {
          console.error("Failed to fetch account data.");
        }
      } catch (error) {
        console.error("Error fetching account:", error);
      }
    };
    fetchAccount();
  }, [API_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedData(formData);
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          birthDate: "",
          nationality: "",
          address: "",
          country: "",
          phone: "",
        });
      } else {
        alert("Failed to create account.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the account.");
    }
  };

  return (
    <div className="account-form-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="account-form">
          <h1>Create an Account</h1>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Nationality:
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="account-summary">
          <h1>Account Information</h1>
          <p>
            <strong>First Name:</strong> {submittedData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {submittedData.lastName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {submittedData.birthDate}
          </p>
          <p>
            <strong>Nationality:</strong> {submittedData.nationality}
          </p>
          <p>
            <strong>Address:</strong> {submittedData.address}
          </p>
          <p>
            <strong>Country:</strong> {submittedData.country}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
        </div>
      )}
    </div>
  );
}

export default Account;
