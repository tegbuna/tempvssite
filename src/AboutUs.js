import React, { useState, useEffect } from "react";
import  './AboutUs.css';


const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/about-us")
      .then(response => response.json())
      .then(data => {
        setAboutUs(data);
      });
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {aboutUs && (
        <p>{aboutUs.content}</p>
      )}
    </div>
  );
};


export default AboutUs
