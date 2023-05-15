import React from "react";
import  './Navbar.css';


const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <a href="/">
          <img src="https://i.imgur.com/9oUb797.png" alt="Logo" />
        </a>
      </div>
      <div className="Links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="SignIn">
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
