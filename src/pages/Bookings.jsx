import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Bookings() {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  // Fetch bookings from the backend server
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${API_URL}/bookings`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  if (id) {
    const booking = bookings.find((b) => b.id.toString() === id);

    if (!booking) {
      return <div>Booking not found.</div>;
    }

    console.log("Booking from backend:", booking);

    return (
      <div className="booking-details">
        <h1>{booking.title}</h1>
        <img
          src={booking.image}
          alt={booking.title}
          className="booking-details-image"
        />
        <p>
          Location: {booking.city_name}, {booking.country}
        </p>
        <p>Price: {booking.price}€</p>
        <p>Description: {booking.description}</p>
        <p>Activities: {booking.activities?.join(", ")}</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return <div>No bookings yet.</div>;
  }

  return (
    <div className="bookings-title-container">
      <h1 className="bookings-title">Your Bookings</h1>
      <ul className="bookings-container">
        {bookings.map((booking) => (
          <li key={booking.id} className="bookings-card">
            <h2>{booking.title}</h2>
            <img
              src={booking.image}
              alt={booking.title}
              className="booking-image"
            />
            <p>
              Location: {booking.city_name}, {booking.country}
            </p>
            <p>Price: {booking.price}€</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookings;
