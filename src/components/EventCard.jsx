import React from "react";

export default function EventCard() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 font-sans">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden">
        <div className="h-48 w-full relative">
          {/*TOP SECTION: Image*/}
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100"></div>

          {/* Floating Date Badge (Needs to sit ON TOP of the image) */}
          <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-xl shadow-lg flex flex-col items-center leading-none">
            <span className="text-rose-600 text-[10px] font-black uppercase tracking-widest mb-1">
              APR
            </span>
            <span className="text-gray-900 text-xl font-bold">24</span>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="p-6">
          <div className="mb-6">
            <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">
              Design Conference
            </span>
            <h2 className="text-gray-900 font-bold text-2xl mt-1 mb-2 leading-tight">
              The Future of Minimalist UI
            </h2>
            <p className="text-gray-500 text-sm">Lagos, Nigeria</p>

            {/* Footer: Price and Button */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="textgray-400 text-xs font-medium block">
                Starting at
              </span>
              <span className="text-gray-900 font-black text-2xl">$499</span>
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-3 px-6 rounded-xl transition-colors outline-none focus:ring-4-200">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
