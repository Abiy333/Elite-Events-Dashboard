import { useState, useEffect } from "react";
import { eventPackages } from "../data/packages";
import "./EventDashboard.css";

export default function EventDashboard() {
  const [packages, setPackages] = useState(() => {
    const savedData = localStorage.getItem("elitePackage");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return eventPackages;
  });
  const [newTitle, setnewTitle] = useState("");
  const [newPrice, setnewPrice] = useState("");
  const [newSpots, setnewSpots] = useState("");

  const deletePkg = (targetId) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== targetId));
  };

  const bookSpot = (targetId) => {
    setPackages((prev) =>
      prev.map((pkg) =>
        pkg.id === targetId
          ? { ...pkg, availableSpots: pkg.availableSpots - 1 }
          : pkg,
      ),
    );
  };

  const addPackage = (e) => {
    e.preventDefault();
    const newPkg = {
      id: Date.now(),
      title: newTitle,
      price: Number(newPrice),
      availableSpots: Number(newSpots),
    };
    setPackages((prev) => [...prev, newPkg]);

    setnewTitle("");
    setnewPrice("");
    setnewSpots("");
  };

  useEffect(() => {
    localStorage.setItem("elitePackage", JSON.stringify(packages));
  }, [packages]);

  return (
    <div className="dashboard-wrapper">
      <center>
        <h2 className="creation-engine">Active Events Packages</h2>
      </center>
      <form action="" onSubmit={addPackage} className="creation-engine">
        <input
          type="text"
          onChange={(e) => setnewTitle(e.target.value)}
          value={newTitle}
          placeholder="Package Name"
          className="input-premium"
        />
        <input
          type="number"
          onChange={(e) => setnewPrice(e.target.value)}
          value={newPrice}
          placeholder="Price (N)"
          className="input-premium"
        />
        <input
          type="number"
          onChange={(e) => setnewSpots(e.target.value)}
          value={newSpots}
          placeholder="Available Spots"
          className="input-premium"
        />
        <button type="submit" className="btn-create">
          Create Package
        </button>
      </form>
      <table className="premium-table">
        <thead>
          <tr>
            <th>Packages</th>
            <th>Prices</th>
            <th>Spots Left</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td>{pkg.title}</td>
              <td>{pkg.price}</td>
              <td>
                {pkg.availableSpots > 0 ? (
                  pkg.availableSpots
                ) : (
                  <span className="badge-sold-out"> "SOLD OUT" </span>
                )}
              </td>
              <td>
                <button
                  onClick={() => deletePkg(pkg.id)}
                  className="btn-delete btn-action"
                >
                  Delete Package
                </button>
                <button
                  onClick={() => bookSpot(pkg.id)}
                  disabled={pkg.availableSpots === 0}
                  className="btn-book btn-action"
                >
                  Book Spot
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
