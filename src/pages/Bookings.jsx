import React from "react";
import { useParams } from "react-router-dom";

function Bookings({ bookings }) {
  const { id } = useParams();

  if (id) {
    const booking = bookings.find((b) => b.id.toString() === id);

    if (!booking) {
      return <div>Booking not found.</div>;
    }
    console.log(booking);
    return (
      <div className="booking-details">
        <h1>{booking.title}</h1>
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
    <div className="bookings-container">
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            <h2>{booking.title}</h2>
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
