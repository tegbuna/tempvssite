import React, { useState, useEffect } from "react";
import './SiteMap.css';

const SiteMap = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const pages = [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "Products and Services",
        link: "/products-and-services"
      },
      {
        title: "Blog",
        link: "/blog"
      },
      {
        title: "About Us",
        link: "/about"
      },
      {
        title: "Contact Us",
        link: "/contact"
      }
    ];

    setUrls(pages.filter(page => page.link !== pathname));
  }, []);

  return (
    <div>
      <h1>Site Map</h1>
      <ul>
        {urls.map(url => (
          <li key={url.id}>
            <a href={url.link}>{url.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
