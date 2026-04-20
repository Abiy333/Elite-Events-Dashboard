import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function NavBar() {
  // Grab the vault data (state) and the walkie-talkie (dispatch)
  const { state, dispatch } = useAuth();

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: { name: "Abigail", email: "abigail@elite.com" },
    });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="bg-gray-900 text-white border-b border-gray-800 p-4 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Section: The Brand */}
        <div>
          <span className="font-black text-xl tracking-tighter text-rose-500">
            ELITE
          </span>
          <span className="font-bold text-xl tracking-tighter">EVENTS</span>
        </div>

        {/* Middle Section: The Links */}
        <div className="flex items-center gap-2 mx-7 px-5">
          <Link
            to="/"
            style={{
              color: "#d4af37",
              marginRight: "20px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Storefront
          </Link>
          <Link
            to="/events"
            style={{
              color: "#d4af37",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Book Event
          </Link>

          {state.isAuthenticated && state.role === "admin" && (
            <>
              <Link
                to="/admin"
                style={{
                  color: "#d4af37",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Admin Dashboard
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Conditional Rendering based on the global state */}
          {state.isAuthenticated ? (
            <>
              {/* Logged In View */}
              <div className="flex items-center gap-3">
                {/* Dynamic Avatar using the first letter of the user's name */}
                <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center font-bold">
                  {state.user.name.charAt(0)}
                </div>
                <span className="text-sm font-medium">{state.user.name}</span>
                <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400 uppercase">
                  {state.role}
                </span>

                {/* The Logout Button */}
                <button
                  onClick={handleLogout}
                  className="ml-4 text-sm text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            /* Logged Out View */
            <button
              onClick={handleLogin}
              className="bg-rose-600 hover:bg-rose-500 text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
