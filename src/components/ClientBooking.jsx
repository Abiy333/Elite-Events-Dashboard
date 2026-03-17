import React from "react";
import { useState, useEffect } from "react";
import "./ClientBooking.css";

export default function ClientBooking() {
  const [publicEvents, setPublicEvents] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("elitePackage");
    if (savedData) {
      setPublicEvents(JSON.parse(savedData));
    }
  }, []);

  /* const savedData = localStorage.getItem("elitePackage");
   if (savedData) {
     return JSON.parse(savedData);
  }
  return eventPackages;*/
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
