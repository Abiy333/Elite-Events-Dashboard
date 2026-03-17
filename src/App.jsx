import EventDashboard from "./components/EventDashboard";
import ClientBooking from "./components/ClientBooking";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientBooking />} />
        <Route path="/admin" element={<EventDashboard />} />
      </Routes>
    </>
  );
}
