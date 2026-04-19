// src/components/Dashboard.jsx
import React from "react";
import { useAuth } from "./AuthProvider";

export default function Dashboard() {
  const { state } = useAuth(); // We only need the state here, not dispatch

  // The Bouncer: If they aren't authenticated, kick them out
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

      {/* Your table of attendees would go here */}
      <div className="mt-8 p-8 border border-gray-800 rounded-xl">
        <p>Confidential Event Data Loaded.</p>
      </div>
    </div>
  );
}
