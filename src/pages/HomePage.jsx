
import React from "react";
import NavBar from '../components/Common/NavBar.jsx';
import HeroSection from "../components/Common/Hero.jsx";
import Features from "../components/Common/Features.jsx";
import Footer from "../components/Common/Footer.jsx";

function Homepage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}

export default Homepage;