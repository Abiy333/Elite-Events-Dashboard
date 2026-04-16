import React, { useState, useEffect } from "react";

export default function DashboardEasterEgg() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let keystrokeBuffer = "";
    const handleKeyDown = (event) => {
      keystrokeBuffer += event.key.toLowerCase();
      if (keystrokeBuffer.length > 4) {
        keystrokeBuffer = keystrokeBuffer.slice(-4);
      }
      if (keystrokeBuffer === "mojo") {
        setUnlocked(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${unlocked ? "bg-gradient-to-r from-fuchsia-600 to-purple-600" : "bg-gray-950"}`}
    >
      {!unlocked ? (
        <p className="text-gray-500 font-mono">
          Dashboard running normally. (Type the secret word)
        </p>
      ) : (
        <div className="text-center animate-bounce">
          <h1 className="text-6xl font-black text-white mb-4 shadow-black drop-shadow-2xl">
            🔥 MOJO RESTORED 🔥
          </h1>
          <p className="text-xl text-fuchsia-200 font-bold">
            Welcome back to the terminal.
          </p>
        </div>
      )}
    </div>
  );
}
