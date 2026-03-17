import EventDashboard from "./components/EventDashboard";
import ClientBooking from "./components/ClientBooking";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav
        style={{ padding: "20px", background: "#1a1a1a", textAlign: "center" }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Storefront
        </Link>
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
      </nav>
      <Routes>
        <Route path="/" element={<ClientBooking />} />
        <Route path="/admin" element={<EventDashboard />} />
      </Routes>
    </>
  );
}
