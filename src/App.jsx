import EventDashboard from "./components/EventDashboard";
import ClientBooking from "./components/ClientBooking";
import TicketCard from "./components/TicketCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventCard from "./components/EventCard";
import StorefrontLanding from "./components/StorefrontLanding";
import Dashboard from "./components/Dashboard";
import CheckoutForm from "./components/CheckoutForm";
import KanbanBoard from "./components/KanbanBoard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<StorefrontLanding />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/events" element={<ClientBooking />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/ops" element={<KanbanBoard />} />
        </Routes>
      </div>
    </div>
  );
}
