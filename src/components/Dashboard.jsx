// src/components/Dashboard.jsx
import React from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { state } = useAuth();
  const navigate = useNavigate();
  if (!state.isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <h2 className="text-gray-500 text-2xl">
          Locked. Please log in from the Navigation Bar.
        </h2>
      </div>
    );
  }

  // The Vault: Only renders if the Bouncer lets them pass
  return (
    <div className="p-8 bg-gray-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Admin Control Panel</h1>
      <p className="text-gray-400">
        Security Level: {state.role.toUpperCase()}
      </p>
      <button
        onClick={() => navigate("/ops")}
        className="flex my-5 bg-rose-600 hover:bg-rose-500 text-white px-5 py-2 rounded-lg font-bold text-lg transition-colors tracking-tight"
      >
        Open Operations Board
      </button>

      {/* Your table of attendees would go here */}
      <div className="mt-8 p-8 border border-gray-800 rounded-xl">
        <p>Confidential Event Data Loaded.</p>
      </div>
    </div>
  );
}
