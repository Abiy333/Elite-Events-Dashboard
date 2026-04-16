import React from "react";

export default function BentoDashboard() {
  return (
    <div className="bg-gray-950 min-h-screen p-8 flex items-center justify-center font-sans">
      {/* THE GRID ENGINE */}
      {/* 1 column on mobile, 3 columns on desktop, gap-6 creates the spacing */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {/* CARD 1: Hero Metric (Spans 2 out of 3 columns) */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:col-span-2 hover:-translate-y-1 transition-transform duration-300 shadow-xl">
          <h2 className="text-gray-400 text-sm tracking-widest uppercase font-semibold mb-2">
            Total Revenue
          </h2>
          <p className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
            $124,500
          </p>
          <span className="text-emerald-500 font-medium bg-emerald-500/10 px-3 py-1 rounded-full text-sm">
            +14% this month
          </span>
        </div>

        {/* CARD 2: The Graph (Spans 1 column natively) */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-center">
          <h2 className="text-gray-400 text-sm tracking-widest uppercase font-semibold mb-2">
            Tickets Sold
          </h2>
          <p className="text-4xl font-bold text-white">3,402</p>
        </div>

        {/* CARD 3: Call to Action (Spans ALL 3 columns at the bottom) */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:col-span-3 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Host a new event
            </h2>
            <p className="text-gray-400">
              Set up your next massive tech meetup in seconds.
            </p>
          </div>
          <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-xl transition-colors outline-none focus:ring-4 focus:ring-rose-500/50 whitespace-nowrap">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}
