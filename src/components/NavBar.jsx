import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white border-b border-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        {/* Left Section: The Brand */}
        <div className="justify-end items-start">
          <span className="font-black text-xl tracking-tighter text-rose-500">
            ELITE
          </span>
          <span className="font-bold text-xl tracking-tighter">EVENTS</span>
        </div>

        <div className="flex gap-4 justify-end items-center">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Attendees
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Settings
          </a>
        </div>

        {/* Right Section: The User Profile */}
        {/* These need to be horizontal and vertically centered */}
        <div className="justify-end items-center">
          <div className="w-8 h-8 rounded-full bg-rose-600"></div>
          <span className="text-sm font-medium ">Admin User</span>
        </div>
      </div>
    </nav>
  );
}
