import React, { useState } from "react";
import  './SocialBar.css';


const SocialBar = () => {
  const [links, setLinks] = useState([
    {
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/your-company-name",
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/your-company-name",
    },
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/company/your-company-name",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/your-company-name",
    },
  ]);

  return (
    <div className="social-bar">
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <a href={link.url}>
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SocialBar