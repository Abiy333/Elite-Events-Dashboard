import React from "react";
import { useState } from "react";
import "./ClientBooking.css";
import { useNavigate } from "react-router-dom";

export default function ClientBooking() {
  const [publicEvents, setPublicEvents] = useState(() => {
    const savedData = localStorage.getItem("elitePackage");
    return savedData ? JSON.parse(savedData) : [];
  });
  const navigate = useNavigate();

  return (
    <div className="client-page-wrapper">
      <center>
        <h1 className="client-title">Elite Events - VIP Booking</h1>
      </center>

      {/* The Grid Container */}
      <div className="events-grid">
        {/* The Factory */}
        {publicEvents.map((event) => (
          <div key={event.id} className="event-card">
            <div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-price">₦{event.price.toLocaleString()}</p>
              <p className="event-spots">
                {event.availableSpots > 0 ? (
                  `${event.availableSpots} Spots Remaining`
                ) : (
                  <span style={{ color: "red" }}>SOLD OUT</span>
                )}
              </p>
            </div>

            {/* The Client Booking Button */}
            <button
              onClick={() =>
                navigate("/checkout", { state: { selectedEvent: event } })
              }
              className="btn-client-book"
              disabled={event.availableSpots === 0}
            >
              {event.availableSpots === 0 ? "Unavailable" : "Secure Your Spot"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
