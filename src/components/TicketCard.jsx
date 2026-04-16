import React, { useEffect } from "react";
import valentineImage from "/valentine-package.jfif";

export default function TicketCard() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-sans">
      <article
        aria-labelledby="ticket-title"
        className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm"
      >
        <img
          src={valentineImage}
          alt="A beautifully wrapped Valentine's hamper basket filled with chocolates, wine, and a red ribbon."
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h2 id="ticket-title" className="text-2xl font-bold text-white mb-2">
            Premium Valentine's Package
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            An exclusive evening of romance, fine wine, and curated treats.
          </p>

          <div className="flex flex-col gap-3 mb-8 text-gray-300">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-rose-500 text-lg">
                📍
              </span>
              <span>The Elite Lounge, Lagos</span>
            </div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-rose-500 text-lg">
                📅
              </span>
              <time dateTime="2026-02-14T19:00">February 14th, 7:00 PM</time>
            </div>
          </div>

          <hr className="border-gray-800 mb-6" />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                Total
              </span>
              <p className="text-3xl font-bold text-white">
                <span aria-hidden="true">$150</span>

                <span className="sr-only">
                  Ticket price is one hundred and fifty dollars.
                </span>
              </p>
            </div>

            <button
              aria-label="Purchase ticket for the Premium Valentine's Package"
              className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-xl transition-all outline-none focus:ring-4 focus:ring-rose-500/50"
            >
              Checkout
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
