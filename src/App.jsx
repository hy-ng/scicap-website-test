import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import DatasetSection from "./components/DatasetSection";
import Footer from "./components/Footer";
import "./App.css";
import BackgroundPattern from "./components/BackgroundPattern"; // Uncomment if you add it

function App() {
  return (
    <>
      <Navbar />
      <div className="main-wrapper">
        <BackgroundPattern />
        <main>
          <NewsSection />
          <HeroSection />
          <DatasetSection />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;