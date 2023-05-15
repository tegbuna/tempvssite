import React from "react";
import  './FooterNav.css';


const FooterNav = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li><a href="/products-and-services">Products and Services</a></li>
              <li><a href="/sitemap">Site Map</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>Copyright &copy; 2023 Your Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
