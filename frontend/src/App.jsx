import React from "react";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TeamPage from "./landing_page/Team/TeamPage";
import HomePage from "./landing_page/Home/HomePage";
import SpearkersPage from "./landing_page/Home/SpearkersPage";
import AboutUsPage from "./landing_page/Home/AboutUsPage";
import TicketBookingPage from "./landing_page/Ticket/TicketBookingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/team" element={<TeamPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketBookingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
