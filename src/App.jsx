import EventDashboard from "./components/EventDashboard";
import ClientBooking from "./components/ClientBooking";
import TicketCard from "./components/TicketCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventCard from "./components/EventCard";

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
        <Link
          to="/book-event"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Book Event
        </Link>
      </nav>
      <NavBar />
      <Routes>
        <Route path="/" element={<ClientBooking />} />
        <Route path="/admin" element={<EventDashboard />} />
        <Route path="/book-event" element={<EventCard />} />
      </Routes>
    </>
  );
}
