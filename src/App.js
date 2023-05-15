import React, { useState } from "react";
import Navbar from "./Navbar";
import SocialBar from "./SocialBar";
import Hero from "./Hero";
import Hook from "./Hook";
import SocialProof from "./SocialProof";
import ProductsAndServices from "./ProductsAndServices";
import Blog from "./Blog";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import SiteMap from "./SiteMap";
import FooterNav from "./FooterNav";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="left-gutter"></div>
        <div className="main">
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <SocialBar />
          <Hero />
          <Hook />
          <SocialProof />
          <ProductsAndServices />
          <Blog />
          <AboutUs />
          <ContactUs />
          <SiteMap />
          <FooterNav />
        </div>
        <div className="right-gutter"></div>
      </div>
      </div>
      );
};

      export default App;
