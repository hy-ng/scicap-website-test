import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import DatasetSection from "./components/DatasetSection";
import Footer from "./components/Footer";
import Challenge2025 from "./pages/Challenge2025";
import NoPage from "./pages/NoPage";
import "./App.css";
import "./styles/Challenge2025.css";
import BackgroundPattern from "./components/BackgroundPattern"; // Uncomment if you add it

const HomePage = () => (
  <main>
    <NewsSection />
    <HeroSection />
    <DatasetSection />
  </main>
);

function App() {
  useEffect(() => {
    // Check if we came from a 404
    const isNotFound = sessionStorage.getItem('notFoundPage');
    if (isNotFound) {
      sessionStorage.removeItem('notFoundPage');
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="main-wrapper">
        <BackgroundPattern />
        <Routes>
          <Route path="/challenge/2025" element={<Challenge2025 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;