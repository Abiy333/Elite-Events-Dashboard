import EventDashboard from "./components/EventDashboard";
import ClientBooking from "./components/ClientBooking";
import TicketCard from "./components/TicketCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <nav>
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
      <NavBar />
      <Routes>
        <Route path="/" element={<ClientBooking />} />
        <Route path="/admin" element={<EventDashboard />} />
      </Routes>
    </>
  );
}
