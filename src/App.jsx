import { Suspense, lazy } from "react";
import EventDashboard from "./components/EventDashboard";
import ClientBooking from "./components/ClientBooking";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import StorefrontLanding from "./components/StorefrontLanding";
import Dashboard from "./components/Dashboard";
const CheckoutForm = lazy(() => import("./components/CheckoutForm"));
const KanbanBoard = lazy(() => import("./components/KanbanBoard"));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<StorefrontLanding />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/events" element={<ClientBooking />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/ops" element={<KanbanBoard />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
