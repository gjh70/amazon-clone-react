import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ShopSection from "./components/ShopSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopSection />
      <Footer />
    </div>
  );
}

export default App;