import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state?.selectedEvent;

  useEffect(() => {
    if (!event) {
      navigate("/events");
    }
  }, [event, navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedData = localStorage.getItem("elitePackage");

    if (savedData) {
      let allEvents = JSON.parse(savedData);

      allEvents = allEvents.map((dbEvent) => {
        if (dbEvent.id === event.id) {
          return {
            ...dbEvent,
            availableSpots: dbEvent.availableSpots - formData.guests,
          };
        }
        return dbEvent;
      });

      localStorage.setItem("elitePackage", JSON.stringify(allEvents));
    }

    alert(
      `Payment Successful! ${formData.guests} ticket(s) secured for ${event.title}.`,
    );

    navigate("/events");
  };

  if (!event) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Checkout
          </h2>

          {/* 4. DYNAMIC DATA: We inject the specific event details they clicked! */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100 text-left">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
              You are booking:
            </p>
            <p className="text-xl font-black text-rose-600">{event.title}</p>
            <p className="text-gray-700 font-medium">
              Price: ₦{event.price.toLocaleString()}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Tickets
            </label>
            <input
              type="number"
              name="guests"
              min="1"
              max={event.availableSpots}
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition-all shadow-md"
          >
            Pay ₦{(event.price * formData.guests).toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  );
}
