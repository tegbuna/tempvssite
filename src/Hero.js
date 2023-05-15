import React from "react";
import SocialBar from "./SocialBar";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Your Company Name</h1>
        <p>Your company's tagline or mission statement</p>
        <a href="/products-and-services">Learn More</a>
      </div>
      <div className="hero-image"></div>
      <SocialBar />
    </div>
  );
};

export default Hero;
