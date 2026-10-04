import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicePage";
import Profile from "./pages/Profile";
import LawyersPage from "./pages/LawyersPage";
import Firm from "./pages/Firm";
import Kontak from "./pages/Kontak";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lawyers" element={<LawyersPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/firm" element={<Firm />} />
      <Route path="/contact" element={<Kontak />} />
    </Routes>
  );
}