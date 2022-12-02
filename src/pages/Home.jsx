import React from "react";
import { useState } from "react";
import Bottom from "../components/bottom/Bottom";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MobileNav from "../components/mobileNav/MobileNav";
import Navbar from "../components/navbar/Navbar";
import Portfolio from "../components/portfolio/Portfolio";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home-container">
      {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Portfolio />
      <Bottom />
      <Footer />
    </div>
  );
}

export default Home;
